// @ts-ignore
import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.SHOPIFY_API_URL || "https://soundboxdev.myshopify.com/admin/api/2023-10/graphql.json"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "X-Shopify-Access-Token": process.env.SHOPIFY_SECRET_KEY
    }
  };
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  }
};

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

export const createCustomer = async (data) => {
  const mutation = gql`
    mutation customerCreate($input: CustomerInput!) {
      customerCreate(input: $input) {
        customer {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`;

  return await client.mutate({
      mutation: mutation,
      variables: {
        input: {
          email: data['customer[email]'],
          firstName: data['customer[first_name]'],
          lastName:  data['customer[last_name]'],
          tags: [
            "trader"
          ],
          metafields: [
            {
              "namespace": "custom-register",
              "key": "trade_account_type",
              "type": "single_line_text_field",
              "value": "credit"
            },
            {
              "namespace": "custom-register",
              "key": "trade_account_status",
              "type": "single_line_text_field",
              "value": "2"
            },
            {
              "namespace": "custom-register",
              "key": "details-company-name",
              "type": "single_line_text_field",
              "value": data["details-company-name"]
            },
            {
              "namespace": "custom-register",
              "key": "details-company-industry",
              "type": "single_line_text_field",
              "value": data["details-company-industry"]
            },
            {
              "namespace": "custom-register",
              "key": "details-type-of-company",
              "value": data["details-type-of-company"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "details-address",
              "type": "single_line_text_field",
              "value": data["details-address"]
            },
            {
              "namespace": "custom-register",
              "key": "details-address-2",
              "type": "single_line_text_field",
              "value": data["details-address-2"]
            },
            {
              "namespace": "custom-register",
              "key": "details-postcode",
              "type": "single_line_text_field",
              "value": data["details-postcode"]
            },
            {
              "namespace": "custom-register",
              "key": "details-registration-number",
              "type": "single_line_text_field",
              "value": data["details-registration-number"]
            },
            {
              "namespace": "custom-register",
              "key": "registered-office-address",
              "type": "single_line_text_field",
              "value": data["registered-office-address"]
            },
            {
              "namespace": "custom-register",
              "key": "details-telephone",
              "value": data["details-telephone"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "details-fax",
              "value": data["details-fax"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "details-email",
              "value": data["details-email"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "details-purchasing-contact",
              "value": data["details-purchasing-contact"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "details-accounts-contact",
              "value": data["details-accounts-contact"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-company",
              "value": data["references-company"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-contact-name",
              "value": data["references-contact-name"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-address",
              "value": data["references-address"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-postcode",
              "value": data["references-postcode"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-telephone",
              "value": data["references-telephone"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-email",
              "value": data["references-email"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-company-2",
              "value": data["references-company-2"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-contact-name-2",
              "value": data["references-contact-name-2"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-address-2",
              "value": data["references-address-2"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-postcode-2",
              "value": data["references-postcode-2"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-telephone-2",
              "value": data["references-telephone-2"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "references-email-2",
              "value": data["references-email-2"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "bank-name",
              "value": data["bank-name"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "bank-branch",
              "value": data["bank-branch"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "bank-account-number",
              "value": data["bank-account-number"],
              "type": "single_line_text_field"
            },
            {
              "namespace": "custom-register",
              "key": "bank-sort-code",
              "value": data["bank-sort-code"],
              "type": "single_line_text_field"
            }

          ]
        }
      }
    }
  );

};

export const createActivationUrl = async (customerId) => {
  const mutation = gql`
    mutation getAccountActivationUrl($customerId: ID!) {
      customerGenerateAccountActivationUrl(customerId: $customerId) {
        accountActivationUrl
      }
    }`

  return await client.mutate({
    mutation: mutation,
    variables: {
      customerId
    }
  });
}
