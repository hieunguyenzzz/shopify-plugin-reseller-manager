import {authenticate} from "~/shopify.server";
import {redirect} from "@remix-run/node";

export async function action({request}) {
  const body = await request.formData();
  console.log(body);
  return redirect(`/app/plugin-reseller-new`);
  // const {  admin } = await authenticate.admin(request);
  //
  // await deleteCustomer(request.params.id, admin.query);
}


async function deleteCustomer(id, query) {
  const response = await query(
      `#graphql
    mutation deleteCustomer($id: ID!) {
      customerDelete(id: $id) {
        deletedCustomerId
        userErrors {
          field
          message
        }
      }
    }`,
    { variables: { id: id } }
  );
  const customers = await response.json();
  return customers.data.customers
}

