import { json } from "@remix-run/node";
import { createCustomer } from "~/model/shopify.server.js";
import { sendEmail } from "~/model/sendgrid.server";
import { CONFIRMATION_HTML } from "~/constant";

interface PostDataInterface {
  'customer[first_name]': string,
  'customer[last_name]': string,
  'customer[email]': string,
  'details-company-name': string,
  'details-company-industry': string
  'details-address': string,
  'details-address-2': string,
  'details-postcode': string,
  'details-registration-number': string,
  'registered-office-address': string,
  'details-telephone': string,
  'details-fax': string,
  'details-email': string,
  'details-purchasing-contact': string,
  'details-accounts-contact': string,
  'references-company': string,
  'references-contact-name': string,
  'references-address': string,
  'references-postcode': string,
  'references-telephone': string,
  'references-email': string,
  'references-company-2': string,
  'references-contact-name-2': string,
  'references-address-2': string,
  'references-postcode-2': string,
  'references-telephone-2': string,
  'references-email-2': string,
  'bank-name': string,
  'bank-branch': string,
  'bank-account-number': string,
  'bank-sort-code': string,

}

const propertyToLabel = {
  'customer[first_name]': 'First Name',
  'customer[last_name]': 'Last Name',
  'customer[email]': 'Email',
  'details-company-name': 'Company Name',
  'details-company-industry': 'Company Industry',
  'details-address': 'Address',
  'details-address-2': 'Address 2',
  'details-postcode': 'Postcode',
  'details-registration-number': 'Registration Number',
  'details-type-of-company': 'Type of Company',
}
export const action = async ({ request }) => {

  const values = await request.json() as PostDataInterface;
  console.log(values);
  let text = '<ul>';
  let result = await createCustomer(values);
  console.log(result);
  for (const property in values) {
    if (!propertyToLabel[property]) continue;
    text += `<li>${propertyToLabel[property]}: ${values[property]}</li>`
  }
  text += '</ul>';
  await sendEmail({
    to: "showroom@soundboxstore.com",
    from: "hush@soundboxstore.com",
    subject: "Trade Account Application",
    html: "new trade account request received: <br > " + text + "<br >" + "<a href='https://admin.shopify.com/store/thankyou-485/apps/plugin-reseller/app'>Cick here</a> for full list of reseller"
  });

  await sendEmail({
    to: values['customer[email]' as keyof PostDataInterface],
    from: "hush@soundboxstore.com",
    subject: "Reseller Application Received",
    html: CONFIRMATION_HTML
  });

  console.log(result.data.customerCreate.userErrors);
  return json({ message: "Hello, world!"}, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export function loader() {
  return json({ message: "Hello, world!"}, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    },
  });
}
