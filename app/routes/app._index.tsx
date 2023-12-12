import {json, redirect} from "@remix-run/node";
import {
  Page,
  Layout,
  Card, IndexTable, useIndexResourceState,
} from "@shopify/polaris";
import {
  Link,
  useLoaderData,
  useFetcher,
} from "@remix-run/react";
import { authenticate } from "../shopify.server";
import {
  METAFIELD_ADDRESS,
  METAFIELD_COMPANY_NAME,
  METAFIELD_COMPANY_TYPE,
  METAFIELD_POSTCODE,
  METAFIELD_TRADE_ACCOUNT_STATUS
} from "~/constant";


async function  getCustomerPage(cursor, query) {
  const response = await query(
      `#graphql
    query getCustomers($cursor: String) {
      customers(first: 10, query: "trader" ,after: $cursor) {
        pageInfo {
          startCursor
          endCursor
          startCursor
          hasNextPage
        }
        edges {
          node {
            id
            displayName
            email
            createdAt
            metafields(first: 50) {
              edges {
                node {
                  id
                  key
                  value
                }
              }
            }
            metafield(key: "created_at", namespace: "custom-register") {
              value
            }
          }
        }
      }
    }`,
    { variables: { cursor: cursor } }
  );
  const customers = await response.json();
  return customers.data.customers
}

async function deleteCustomer(id, query) {
  const response = await query(
    `#graphql
    mutation deleteCustomer($input: CustomerDeleteInput!) {
      customerDelete(input: $input) {
        deletedCustomerId
        userErrors {
          field
          message
        }
      }
    }`,
    { variables: {input: { id: id } }}
  );
  const customers = await response.json();
  return customers.data.customers
}

export async function action({request}) {
  const { session, admin } = await authenticate.admin(request);
  const body = await request.text();
  console.log(decodeURIComponent(body));
  console.log('bodyyyy',  JSON.parse(decodeURIComponent(body).replace('body=', '')));
  let customers = JSON.parse(decodeURIComponent(body).replace('body=', ''));
  for (const customer of customers) {
    await deleteCustomer(customer, admin.graphql);
  }
  return redirect(`/app`);
}

export const loader = async ({ request }) => {
  const { session, admin } = await authenticate.admin(request);
  let hasNextPage = true;
  let endCursor = null;
  const allCustomers = [];

  while (hasNextPage) {

    const customersData = await getCustomerPage(endCursor, admin.graphql);
    const customers = customersData.edges.map((edge) => edge.node);
    console.log(customersData.pageInfo.startCursor);
    allCustomers.push(...customers);

    hasNextPage = customersData.pageInfo.hasNextPage;
    endCursor = customersData.pageInfo.endCursor;
  }

  return json({
    shop: session.shop.replace(".myshopify.com", ""),
    customers: allCustomers.sort((a, b) => {
      const dateA = a.metafield?.value ? new Date(a.metafield.value) : new Date(0);
      const dateB = b.metafield?.value ? new Date(b.metafield.value) : new Date(0);

      // Compare dates in descending order (more recent dates first)
      return dateB.getTime() - dateA.getTime();
    })
  });
};

export default function Index() {

  const { customers } = useLoaderData();
  const fetcher = useFetcher();
  console.log('customers', customers);

  const resourceName = {
    singular: "order",
    plural: "orders"
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(customers);

  //console.log('selectedResources', selectedResources);
  const bulkActions = [{
    content: 'Delete',
    onAction: async () => {

      await fetcher.submit({body: JSON.stringify(selectedResources)}, { method: "POST" });

    },
  }];

  return (
    <Page title={"Trade account Manager"}>

      <Layout>
        <Layout.Section>
          <Card padding="0">
            <IndexTable
              onSelectionChange={handleSelectionChange}
              resourceName={resourceName}
              bulkActions={bulkActions}
              selectedItemsCount={
                allResourcesSelected ? 'All' : selectedResources.length
              }
              headings={[
              { title: "Name" },
              { title: "Email" },
              { title: "Company Name" },
              { title: "Company Type" },
              { title: "Address" },
              { title: "Postcode" },
                { title: "Register Date" },
              { title: "Trade Account Status" },
            ]} itemCount={customers.length}>
              {customers.map((customer, index) => {
                let metafields = customer.metafields.edges;

                let companyType = metafields.find((metafield) => metafield.node.key === METAFIELD_COMPANY_TYPE);
                let companyName = metafields.find((metafield) => metafield.node.key === METAFIELD_COMPANY_NAME);
                let postcode = metafields.find((metafield) => metafield.node.key === METAFIELD_POSTCODE);
                let address = metafields.find((metafield) => metafield.node.key === METAFIELD_ADDRESS);
                let status = metafields.find((metafield) => metafield.node.key === METAFIELD_TRADE_ACCOUNT_STATUS);

                return (
                  <IndexTable.Row key={customer.id} id={customer.id} position={index} selected={selectedResources.includes(customer.id)}>
                    <IndexTable.Cell>
                      <Link to={`trade/${customer.id.replace('gid://shopify/Customer/', '')}`}>
                        {customer.displayName}
                      </Link>
                    </IndexTable.Cell>
                    <IndexTable.Cell>{customer.email}</IndexTable.Cell>
                    <IndexTable.Cell>{companyName?.node?.value}</IndexTable.Cell>
                    <IndexTable.Cell>{companyType?.node?.value}</IndexTable.Cell>
                    <IndexTable.Cell>{address?.node?.value}</IndexTable.Cell>
                    <IndexTable.Cell>{postcode?.node?.value}</IndexTable.Cell>
                    <IndexTable.Cell>{customer.createdAt}</IndexTable.Cell>
                    <IndexTable.Cell>{status?.node?.value === "1" ? 'Approve' : status?.node?.value === "2" ? 'Pending' : 'Decline' }</IndexTable.Cell>
                  </IndexTable.Row>
                );
              })}

            </IndexTable>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
