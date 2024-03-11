import { json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigation, useSubmit } from "@remix-run/react";
import {
  BlockStack,
  Card,
  Layout,
  Page,
  PageActions, Select,
  Text,
  TextField
} from "@shopify/polaris";
import { useState } from "react";
import {
  APPROVAL_HTML,
  METAFIELD_ADDRESS,
  METAFIELD_ADDRESS2,
  METAFIELD_BANK_ACCOUNT_NUMBER,
  METAFIELD_BANK_BRANCH,
  METAFIELD_BANK_NAME,
  METAFIELD_BANK_SORT_CODE,
  METAFIELD_COMPANY_ACCOUNT_CONTACT,
  METAFIELD_COMPANY_ADDRESS,
  METAFIELD_COMPANY_EMAIL,
  METAFIELD_COMPANY_FAX, METAFIELD_COMPANY_INDUSTRY,
  METAFIELD_COMPANY_NAME,
  METAFIELD_COMPANY_NUMBER,
  METAFIELD_COMPANY_PURCHASE_CONTACT,
  METAFIELD_COMPANY_TELEPHONE,
  METAFIELD_COMPANY_TYPE,
  METAFIELD_POSTCODE,
  METAFIELD_TRADE_ACCOUNT_STATUS,
  METAFIELD_TRADE_ACCOUNT_TYPE,
  METAFIELD_TRADE_REFERENCE2_ADDRESS,
  METAFIELD_TRADE_REFERENCE2_COMPANY,
  METAFIELD_TRADE_REFERENCE2_CONTACT_NAME,
  METAFIELD_TRADE_REFERENCE2_EMAIL,
  METAFIELD_TRADE_REFERENCE2_POSTCODE,
  METAFIELD_TRADE_REFERENCE2_TELEPHONE,
  METAFIELD_TRADE_REFERENCE_ADDRESS,
  METAFIELD_TRADE_REFERENCE_COMPANY,
  METAFIELD_TRADE_REFERENCE_CONTACT_NAME,
  METAFIELD_TRADE_REFERENCE_EMAIL,
  METAFIELD_TRADE_REFERENCE_POSTCODE,
  METAFIELD_TRADE_REFERENCE_TELEPHONE
} from "~/constant";
import { getReseller, updateReseller } from "~/model/reseller.server";
import { sendEmail } from "~/model/sendgrid.server";
import { createActivationUrl } from "~/model/shopify.server";
import { authenticate } from "~/shopify.server";

export async function loader({ request, params }) {

  // [START authenticate]
  const { admin } = await authenticate.admin(request);

  // [END authenticate]
  if (params.id === "new") {
    return json({
      destination: "product",
      title: ""
    });
  }
  let response = await getReseller(params.id, admin.graphql);
  let reseller = response.data.customer;
  return json(reseller);
}

export async function action({ request, params }) {
  const { session, admin } = await authenticate.admin(request);
  const { shop } = session;
  let data = await request.json();

  // /** @type {any} */
  // const data = {
  //   ...JSON.parse(body),
  //   shop
  // };

  // send email to customer
  if (data.action === "delete") {
    return redirect(`/app`);
  }
  let tradeStatus = data.metafields.find((node) => node.key === METAFIELD_TRADE_ACCOUNT_STATUS);
  let activationUrlData = await createActivationUrl(data.id);
  console.log(activationUrlData);
  console.log(data.email);
  if (tradeStatus && tradeStatus.value === "1" && activationUrlData?.data?.customerGenerateAccountActivationUrl?.accountActivationUrl) {
    console.log("approve");
    try {
      await sendEmail({
        to: data.email,
        from: "hush@soundboxstore.com",
        subject: "Trade Account Approved",
        html: APPROVAL_HTML.replace('{{url}}', activationUrlData.data.customerGenerateAccountActivationUrl.accountActivationUrl),
        dynamic_template_data: {
          url: activationUrlData.data.customerGenerateAccountActivationUrl.accountActivationUrl
        }
      });
    } catch (err) {
      console.log('error when send email');

      // @ts-ignore
      console.log(err?.response?.body);
    }

  }

  if (tradeStatus && tradeStatus.value === "0") {
    console.log("approve");
    await sendEmail({
      to: data.email,
      from: "customersupport@soundboxstore.com",
      subject: "Trade Account Decline",
      text: "Your trade account has been decline.",
      html: "<p>Your trade account has been decline.</p>"
    });
  }

  let response = await updateReseller(data, admin.graphql);
  console.log(response.data.customerUpdate.userErrors);
  return redirect(`/app/trade/${data.id.replace("gid://shopify/Customer/", "")}`);
}

export default function resellerForm() {
  const reseller = useLoaderData();
  const errors = useActionData()?.errors || {};
  const [formState, setFormState] = useState(reseller);
  const [cleanFormState, setCleanFormState] = useState(reseller);
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState);
  const nav = useNavigation();

  const isSaving =
    nav.state === "submitting" && nav.formData?.get("action") !== "delete";
  const isDeleting =
    nav.state === "submitting" && nav.formData?.get("action") === "delete";
  // [END state]

  const statusOption = [
    { label: "Approve", value: "1" },
    { label: "Pending", value: "2" },
    { label: "Decline", value: "0" }
  ];

  // [START save]
  const submit = useSubmit();
  let metafields = formState.metafields.nodes;
  const company = metafields.find(
    (node) => node.key === METAFIELD_COMPANY_NAME
  );

  const address = metafields.find(
    (node) => node.key === METAFIELD_ADDRESS
  );


  function handleSave() {
    const data = {
      id: formState.id,
      email: formState.email,
      firstName: formState.firstName,
      lastName: formState.lastName,
      metafields: formState.metafields.nodes
    };

    setCleanFormState({ ...formState });
    submit(data, { method: "post", encType: "application/json" });
  }

  function findMetafield(key) {
    return metafields.find((node) => node.key === key);
  }

  // [END save]


  return (
    <Page title="Editting" backAction={{
      url: "/app",
    }} primaryAction={{
      content: "Save",
      loading: isSaving,
      disabled: !isDirty || isSaving || isDeleting,
      onAction: handleSave
    }}>

      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Card>
              <BlockStack gap="500">
                <Text as={"h2"} variant="headingLg">
                  Name
                </Text>
                <BlockStack gap={"500"}>
                  <TextField
                    id="firstName"
                    label="firstName"
                    placeholder={"first name"}
                    labelHidden
                    autoComplete="off"
                    value={formState.firstName}
                    onChange={(firstName) => setFormState({ ...formState, firstName })}
                    error={errors.title}
                  />
                  <TextField
                    id="lastName"
                    label="lastName"
                    placeholder={"Last name"}
                    labelHidden
                    autoComplete="off"
                    value={formState.lastName}
                    onChange={(lastName) => setFormState({ ...formState, lastName })}
                    error={errors.title}
                  />
                </BlockStack>

              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="500">
                <Text as={"h2"} variant="headingLg">
                  Customer Detail
                </Text>
                <Text as={"h6"} variant="headingSm">
                  Company Name
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"
                  placeholder={"Company Name"}
                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_NAME)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== METAFIELD_COMPANY_NAME), {
                        id: company.id,
                        key: METAFIELD_COMPANY_NAME,
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Industry
                </Text>

                <TextField
                  id="companyIndustry"
                  label="companyIndustry"
                  placeholder={"Industry"}
                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_INDUSTRY)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== METAFIELD_COMPANY_INDUSTRY), {
                        id: company.id,
                        key: METAFIELD_COMPANY_INDUSTRY,
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Address
                </Text>

                <TextField
                  id="address"
                  label="address"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_ADDRESS)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Address 2
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_ADDRESS2)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Postcode
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_POSTCODE)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Type of company
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_TYPE)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Registration number
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_NUMBER)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Registered Office Address (if different from above)
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_ADDRESS)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Telephone
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_TELEPHONE)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Fax
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_FAX)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Email
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_EMAIL)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Purchasing Contact
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_PURCHASE_CONTACT)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

                <Text as={"h6"} variant="headingSm">
                  Accounts contact
                </Text>

                <TextField
                  id="companyName"
                  label="companyName"

                  labelHidden
                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_COMPANY_ACCOUNT_CONTACT)?.value}
                  onChange={(company_name) => setFormState({
                    ...formState,
                    metafields: {
                      nodes: [...metafields.filter(m => m.key !== "company_name"), {
                        id: company.id,
                        key: "company_name",
                        value: company_name
                      }]
                    }
                  })}
                  error={errors.title}
                />

              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="500">
                <Text as={"h2"} variant="headingLg">
                  Trade References
                </Text>
                <Text as={"h4"} variant="headingMd">
                  References 1
                </Text>

                <TextField
                  id="companyName"
                  label="Company"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE_COMPANY)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Contact Name"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE_CONTACT_NAME)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Address"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE_ADDRESS)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Postcode"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE_POSTCODE)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Telephone"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE_TELEPHONE)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Email"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE_EMAIL)?.value}
                  error={errors.title}
                />
                <Text as={"h4"} variant="headingMd">
                  References 2
                </Text>

                <TextField
                  id="companyName"
                  label="Company"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE2_COMPANY)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Contact Name"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE2_CONTACT_NAME)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Address"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE2_ADDRESS)?.value}
                />

                <TextField
                  id="companyName"
                  label="Postcode"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE2_POSTCODE)?.value}
                />

                <TextField
                  id="companyName"
                  label="Telephone"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE2_TELEPHONE)?.value}
                />

                <TextField
                  id="companyName"
                  label="Email"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_TRADE_REFERENCE2_EMAIL)?.value}
                  error={errors.title}
                />

              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="500">
                <Text as={"h2"} variant="headingLg">
                  Bank Details
                </Text>

                <TextField
                  id="companyName"
                  label="Name"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_BANK_NAME)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Branch"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_BANK_BRANCH)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Account Number"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_BANK_ACCOUNT_NUMBER)?.value}
                  error={errors.title}
                />

                <TextField
                  id="companyName"
                  label="Sort code"

                  disabled={true}
                  autoComplete="off"
                  value={findMetafield(METAFIELD_BANK_SORT_CODE)?.value}
                  error={errors.title}
                />
              </BlockStack>
            </Card>

            <Card>
              <TextField
                id="companyName"
                label="Account Type"
                disabled={true}
                autoComplete="off"
                value={findMetafield(METAFIELD_TRADE_ACCOUNT_TYPE)?.value}
                error={errors.title}
              />

              <Select
                name={METAFIELD_TRADE_ACCOUNT_STATUS}
                label="Status"
                options={statusOption}
                onChange={(value) => setFormState({
                  ...formState,
                  metafields: {
                    nodes: [...metafields.filter(m => m.key !== METAFIELD_TRADE_ACCOUNT_STATUS), {
                      id: findMetafield(METAFIELD_TRADE_ACCOUNT_STATUS)?.id,
                      key: METAFIELD_TRADE_ACCOUNT_STATUS,
                      type: "single_line_text_field",
                      value: value
                    }]
                  }
                })}
                value={findMetafield(METAFIELD_TRADE_ACCOUNT_STATUS)?.value}
              />
            </Card>

          </BlockStack>
        </Layout.Section>
        <Layout.Section>
          <PageActions
            secondaryActions={[
              {
                content: "Delete",
                loading: isDeleting,
                disabled: !reseller.id || !reseller || isSaving || isDeleting,
                destructive: true,
                outline: true,
                onAction: () =>
                  submit({ action: "delete" }, { method: "post", encType: "application/json", })
              }
            ]}
            primaryAction={{
              content: "Save",
              loading: isSaving,
              disabled: !isDirty || isSaving || isDeleting,
              onAction: handleSave
            }}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
