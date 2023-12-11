export async function getReseller(id, graphql) {

  const response = await graphql(
      `#graphql
    query getReseller($id: ID!) {
      customer(id: $id) {
        id
        email
        firstName
        lastName
        metafields(first: 40) {
          nodes {
            id
            value
            key
          }
        }
      }
    }`,{
      variables: {
        id: 'gid://shopify/Customer/' + id
      },
    }
  );

  return await response.json();
}

export function validateReseller(data) {
  const errors = {};
  if (!data.email) {
    errors.email = "Email is required";
  }
  if (!data.firstName) {
    errors.firstName = "First name is required";
  }
  if (!data.lastName) {
    errors.lastName = "Last name is required";
  }
  return errors;
}

export async function updateReseller(data, graphql) {
  console.log(data.metafields);
  const response = await graphql(
      `#graphql
    mutation updateReseller($input: CustomerInput!) {
      customerUpdate(input: $input) {
        customer {
          id
          email
          firstName
          lastName
          metafields(first: 20) {
            nodes {
              id
              value
              key
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,{
      variables: {
        input: {
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          metafields: [
            ...data.metafields
          ]
        }
      },
    }
  );

  return await response.json();
}

export const METAFIELD_COMPANY_NAME = 'details-company-name';
const METAFIELD_ADDRESS = 'details-address';
const METAFIELD_ADDRESS2 = 'details-address-2';
const METAFIELD_POSTCODE = 'details-postcode';
const METAFIELD_COMPANY_TYPE = 'details-type-of-company';
const METAFIELD_COMPANY_NUMBER = 'details-registration-number';
const METAFIELD_COMPANY_ADDRESS = 'registered-office-address';
const METAFIELD_COMPANY_TELEPHONE = 'details-telephone';
const METAFIELD_COMPANY_EMAIL = 'details-email';
const METAFIELD_COMPANY_PURCHASE_CONTACT = 'details-purchasing-contact';
const METAFIELD_COMPANY_ACCOUNT_CONTACT = 'details-accounts-contact';
const METAFIELD_TRADE_REFERENCE_COMPANY = 'references-company';
const METAFIELD_TRADE_REFERENCE_CONTACT_NAME = 'references-contact-name';
const METAFIELD_TRADE_REFERENCE_ADDRESS = 'references-addres';
const METAFIELD_TRADE_REFERENCE_POSTCODE = 'references-postcode';
const METAFIELD_TRADE_REFERENCE_TELEPHONE = 'references-telephone';
const METAFIELD_TRADE_REFERENCE_EMAIL = 'references-email';



const METAFIELD_TRADE_REFERENCE2_COMPANY = 'references-company-2';
const METAFIELD_TRADE_REFERENCE2_CONTACT_NAME = 'references-contact-name-2';
const METAFIELD_TRADE_REFERENCE2_ADDRESS = 'custom-register.references-address-2';
const METAFIELD_TRADE_REFERENCE2_POSTCODE = 'references-postcode-2';
const METAFIELD_TRADE_REFERENCE2_TELEPHONE = 'references-telephone-2';
const METAFIELD_TRADE_REFERENCE2_EMAIL = 'references-email-2';
export const METAFIELD_TRADE_ACCOUNT_STATUS= 'trade-account-status';
