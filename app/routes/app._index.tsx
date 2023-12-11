import { json } from "@remix-run/node";
import {
  Page,
  Layout,
  Card, IndexTable,
} from "@shopify/polaris";
import {
  Link,
  useLoaderData,
  useNavigate
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

  console.log(customers);

  const resourceName = {
    singular: "order",
    plural: "orders"
  };

  return (
    <Page title={"Trade account Manager"}>

      <Layout>
        <Layout.Section>
          <Card padding="0">
            <IndexTable resourceName={resourceName} headings={[
              { title: "Name" },
              { title: "Email" },
              { title: "Company Name" },
              { title: "Company Type" },
              { title: "Address" },
              { title: "Postcode" },
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
                  <IndexTable.Row key={customer.id} id={customer.id} position={index}>
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
