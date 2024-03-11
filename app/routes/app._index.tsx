import { ActionFunctionArgs, json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import {
  Link,
  useFetcher,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams
} from "@remix-run/react";
import {
  Badge,
  Card, Frame, IndexFilters, IndexFiltersMode, IndexTable,
  Layout,
  Loading,
  Page,
  useIndexResourceState,
} from "@shopify/polaris";
import { useEffect, useState } from "react";
import {
  METAFIELD_ADDRESS,
  METAFIELD_COMPANY_NAME,
  METAFIELD_COMPANY_TYPE,
  METAFIELD_POSTCODE,
  METAFIELD_TRADE_ACCOUNT_STATUS
} from "~/constant";
import { authenticate } from "~/shopify.server";
const buildQueryString = (s: String) => {
  if (!s) return `tag:trader`
  return `tag:trader AND ${s}`
}
async function getCustomerPage({
  cursor, query
}, graphql) {
  console.log('get customer page', cursor);

  const response = await graphql(
    `#graphql
    query getCustomers($cursor: String,$query: String) {
      customers(first: 20, query: $query,after: $cursor, reverse: true) {
        pageInfo {
          startCursor
          endCursor
          startCursor
          hasPreviousPage
          hasNextPage
        }
        edges {
          node {
            id
            displayName
            email
            createdAt
            metafields(first: 30) {
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
    { variables: { cursor: cursor, query: buildQueryString(query) } }
  );

  const customers = await response.json();
  console.log('get customer page ,customers', customers);

  return customers.data.customers
}
async function getCustomerPagePre({
  cursor, query
}, graphql) {
  console.log('get customer page', cursor);
  const response = await graphql(
    `#graphql
    query getCustomers($cursor: String,$query: String) {
      customers(last: 20, query: $query ,before: $cursor, reverse: true) {
        pageInfo {
          startCursor
          endCursor
          startCursor
          hasPreviousPage
          hasNextPage
        }
        edges {
          node {
            id
            displayName
            email
            createdAt
            metafields(first: 30) {
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
    { variables: { cursor: cursor, query: buildQueryString(query) } }
  );

  const customers = await response.json();
  console.log('get customer page ,customers', customers);

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
    { variables: { input: { id: id } } }
  );
  const customers = await response.json();
  return customers.data.customers
}

export async function action({ request }: ActionFunctionArgs) {
  const { admin } = await authenticate.admin(request);
  const body = await request.text();
  let customers = JSON.parse(decodeURIComponent(body).replace('body=', ''));
  for (const customer of customers) {
    await deleteCustomer(customer, admin.graphql);
  }
  return redirect(`/app`);
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { session, admin } = await authenticate.admin(request);
  const endCursor = new URL(request.url).searchParams.get('endCursor');
  const startCursor = new URL(request.url).searchParams.get('startCursor');
  const query = new URL(request.url).searchParams.get('query');
  const allCustomers = [];
  const customersData = !startCursor
    ? await getCustomerPage({
      cursor: endCursor,
      query: query
    }, admin.graphql)
    : await getCustomerPagePre({
      cursor: startCursor,
      query: query
    }, admin.graphql);
  const customers = customersData.edges.map((edge) => edge.node);
  allCustomers.push(...customers);

  return json({
    context: {
      debug: process.env.DEBUG
    },
    id: endCursor || 'start',
    endCursor,
    shop: session.shop.replace(".myshopify.com", ""),
    customers: allCustomers.sort((a, b) => {
      const dateA = a.metafield?.value ? new Date(a.metafield.value) : new Date(0);
      const dateB = b.metafield?.value ? new Date(b.metafield.value) : new Date(0);

      // Compare dates in descending order (more recent dates first)
      return dateB.getTime() - dateA.getTime();
    },),
    pageInfo: customersData.pageInfo,
  });
};

export default function Index() {

  const navigation = useNavigate();
  const { state } = useNavigation();
  const dataLoader = useLoaderData<typeof loader>();
  const { customers, id, pageInfo, context } = dataLoader;
  const fetcher = useFetcher();
  const resourceName = {
    singular: "order",
    plural: "orders"
  };
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(customers);

  //console.log('selectedResources', selectedResources);
  const bulkActions = [{
    content: 'Delete',
    onAction: async () => {
      await fetcher.submit({ body: JSON.stringify(selectedResources) }, { method: "POST" });
    },
  }];
  const [queryValue, setQueryValue] = useState('');
  const handleClearAll = () => {
    setQueryValue('');
  }
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const timmer = setTimeout(() => {
      if (queryValue) {
        setSearchParams({ query: queryValue });
      } else {
        setSearchParams({});
      }
    }, 1000);
    return () => {
      clearTimeout(timmer);
    }
  }, [queryValue]);

  return (
    <Frame>
      {state === 'loading' && <Loading />}
      <Page title={"Trade account Manager"}>
        <Layout>
          <Layout.Section>
            <Card padding="0">
              <IndexFilters
                queryValue={queryValue}
                queryPlaceholder="Searching in all"
                onQueryChange={setQueryValue}
                onQueryClear={handleClearAll}
                cancelAction={{
                  onAction: handleClearAll,
                  disabled: false,
                  loading: false,
                }}
                tabs={[]}
                selected={0}
                onSelect={console.log}
                canCreateNewView
                filters={[]}
                appliedFilters={[]}
                onClearAll={handleClearAll}
                mode={IndexFiltersMode.Filtering}
                setMode={handleClearAll}

              />
              <IndexTable
                key={id}
                lastColumnSticky
                loading={(() => {
                  let res = state === 'loading'
                  return res;
                })()}
                onSelectionChange={handleSelectionChange}
                resourceName={resourceName}
                bulkActions={bulkActions}
                selectedItemsCount={
                  allResourcesSelected ? 'All' : selectedResources.length
                }
                pagination={{

                  hasNext: pageInfo.hasNextPage,
                  hasPrevious: pageInfo.hasPreviousPage,
                  onPrevious: () => {
                    navigation(`/app?startCursor=${pageInfo.startCursor}`);
                  },
                  onNext: () => {
                    navigation(`/app?endCursor=${pageInfo.endCursor}`);
                  },
                }}
                headings={[
                  { title: "Name" },
                  { title: "Email" },
                  // { title: "Register Date" },
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
                    <IndexTable.Row key={customer.id} id={customer.id} position={index} selected={selectedResources.includes(customer.id)}>
                      <IndexTable.Cell>
                        <Link to={`trade/${customer.id.replace('gid://shopify/Customer/', '')}`}>
                          {customer.displayName}
                        </Link>
                      </IndexTable.Cell>
                      <IndexTable.Cell>{customer.email}</IndexTable.Cell>
                      {/* <IndexTable.Cell>{customer.createdAt}</IndexTable.Cell> */}
                      <IndexTable.Cell>{companyName?.node?.value}</IndexTable.Cell>
                      <IndexTable.Cell>{companyType?.node?.value}</IndexTable.Cell>
                      <IndexTable.Cell>{address?.node?.value}</IndexTable.Cell>
                      <IndexTable.Cell>{postcode?.node?.value}</IndexTable.Cell>
                      <IndexTable.Cell>{status?.node?.value === "1" ? <Badge tone="success" progress="complete">Approve</Badge> : status?.node?.value === "2" ? <Badge progress="partiallyComplete">Pending</Badge> : <Badge tone="critical" progress="incomplete">Decline</Badge>}</IndexTable.Cell>
                    </IndexTable.Row>
                  );
                })}

              </IndexTable>
            </Card>
          </Layout.Section>
        </Layout>

        {context.debug && <Card>
          <pre>
            {
              JSON.stringify(dataLoader, null, 2)
            }
          </pre>
        </Card>}
      </Page>
    </Frame>

  );
}
