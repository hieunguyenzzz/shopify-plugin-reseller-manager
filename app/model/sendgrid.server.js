import * as sgMail from "@sendgrid/mail";

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API || "");

export async function sendEmail(data) {
  const msg = {
    to: data.to,
    from: data.from,
    subject: data.subject,
    text: data.text,
    html: data.html
  };

  let result = await sgMail.send(msg);
  console.log(result);
  return result;
}
