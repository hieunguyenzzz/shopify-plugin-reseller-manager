
export const METAFIELD_COMPANY_NAME = 'details-company-name';
export const METAFIELD_COMPANY_INDUSTRY = 'details-company-industry';
export const METAFIELD_ADDRESS = 'details-address';
export const METAFIELD_ADDRESS2 = 'details-address-2';
export const METAFIELD_POSTCODE = 'details-postcode';
  export const METAFIELD_COMPANY_TYPE = 'details-type-of-company';
export const METAFIELD_COMPANY_NUMBER = 'details-registration-number';
export const METAFIELD_COMPANY_ADDRESS = 'registered-office-address';
export const METAFIELD_COMPANY_TELEPHONE = 'details-telephone';
export const METAFIELD_COMPANY_FAX = 'details-fax';
export const METAFIELD_COMPANY_EMAIL = 'details-email';
export const METAFIELD_COMPANY_PURCHASE_CONTACT = 'details-purchasing-contact';
export const METAFIELD_COMPANY_ACCOUNT_CONTACT = 'details-accounts-contact';
export const METAFIELD_TRADE_REFERENCE_COMPANY = 'references-company';
export const METAFIELD_TRADE_REFERENCE_CONTACT_NAME = 'references-contact-name';
export const METAFIELD_TRADE_REFERENCE_ADDRESS = 'references-addres';
export const METAFIELD_TRADE_REFERENCE_POSTCODE = 'references-postcode';
export const METAFIELD_TRADE_REFERENCE_TELEPHONE = 'references-telephone';
export const METAFIELD_TRADE_REFERENCE_EMAIL = 'references-email';



export const METAFIELD_TRADE_REFERENCE2_COMPANY = 'references-company-2';
export const METAFIELD_TRADE_REFERENCE2_CONTACT_NAME = 'references-contact-name-2';
export const METAFIELD_TRADE_REFERENCE2_ADDRESS = 'custom-register.references-address-2';
export const METAFIELD_TRADE_REFERENCE2_POSTCODE = 'references-postcode-2';
export const METAFIELD_TRADE_REFERENCE2_TELEPHONE = 'references-telephone-2';
export const METAFIELD_TRADE_REFERENCE2_EMAIL = 'references-email-2';

export const METAFIELD_BANK_NAME= 'bank-name';
export const METAFIELD_BANK_BRANCH= 'bank-branch';
export const METAFIELD_BANK_ACCOUNT_NAME= 'bank-account-name';
export const METAFIELD_BANK_ACCOUNT_NUMBER= 'bank-account-number';
export const METAFIELD_BANK_SORT_CODE= 'bank-sort-code';


export const METAFIELD_TRADE_ACCOUNT_STATUS= 'trade_account_status';
export const METAFIELD_TRADE_ACCOUNT_TYPE = 'trade_account_type';

export const APPROVAL_HTML = `
<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<style>
\t\t* {
\t\t\tbox-sizing: border-box;
\t\t}

\t\tbody {
\t\t\tmargin: 0;
\t\t\tpadding: 0;
\t\t}

\t\ta[x-apple-data-detectors] {
\t\t\tcolor: inherit !important;
\t\t\ttext-decoration: inherit !important;
\t\t}

\t\t#MessageViewBody a {
\t\t\tcolor: inherit;
\t\t\ttext-decoration: none;
\t\t}

\t\tp {
\t\t\tline-height: inherit
\t\t}

\t\t.desktop_hide,
\t\t.desktop_hide table {
\t\t\tmso-hide: all;
\t\t\tdisplay: none;
\t\t\tmax-height: 0px;
\t\t\toverflow: hidden;
\t\t}

\t\t.image_block img+div {
\t\t\tdisplay: none;
\t\t}

\t\t@media (max-width:700px) {
\t\t\t.social_block.desktop_hide .social-table {
\t\t\t\tdisplay: inline-block !important;
\t\t\t}

\t\t\t.mobile_hide {
\t\t\t\tdisplay: none;
\t\t\t}

\t\t\t.row-content {
\t\t\t\twidth: 100% !important;
\t\t\t}

\t\t\t.stack .column {
\t\t\t\twidth: 100%;
\t\t\t\tdisplay: block;
\t\t\t}

\t\t\t.mobile_hide {
\t\t\t\tmin-height: 0;
\t\t\t\tmax-height: 0;
\t\t\t\tmax-width: 0;
\t\t\t\toverflow: hidden;
\t\t\t\tfont-size: 0px;
\t\t\t}

\t\t\t.desktop_hide,
\t\t\t.desktop_hide table {
\t\t\t\tdisplay: table !important;
\t\t\t\tmax-height: none !important;
\t\t\t}

\t\t\t.row-1 .column-1 .block-2.image_block td.pad {
\t\t\t\tpadding: 0 60px 10px !important;
\t\t\t}

\t\t\t.row-3 .column-1 .block-1.spacer_block,
\t\t\t.row-5 .column-1 .block-1.spacer_block {
\t\t\t\theight: 20px !important;
\t\t\t}

\t\t\t.row-4 .column-1 .block-1.paragraph_block td.pad>div {
\t\t\t\ttext-align: center !important;
\t\t\t\tfont-size: 20px !important;
\t\t\t}

\t\t\t.row-4 .column-1 .block-1.paragraph_block td.pad {
\t\t\t\tpadding: 10px 15px 10px 30px !important;
\t\t\t}

\t\t\t.row-7 .column-1 .block-2.heading_block td.pad,
\t\t\t.row-7 .column-2 .block-2.heading_block td.pad,
\t\t\t.row-7 .column-3 .block-2.heading_block td.pad,
\t\t\t.row-7 .column-4 .block-2.heading_block td.pad {
\t\t\t\tpadding: 5px 5px 0 !important;
\t\t\t}

\t\t\t.row-10 .column-1 .block-1.paragraph_block td.pad>div,
\t\t\t.row-10 .column-2 .block-1.paragraph_block td.pad>div,
\t\t\t.row-10 .column-3 .block-1.paragraph_block td.pad>div,
\t\t\t.row-7 .column-1 .block-2.heading_block h1,
\t\t\t.row-7 .column-2 .block-2.heading_block h1,
\t\t\t.row-7 .column-3 .block-2.heading_block h1,
\t\t\t.row-7 .column-4 .block-2.heading_block h1 {
\t\t\t\tfont-size: 12px !important;
\t\t\t}

\t\t\t.row-6 .column-1 .block-2.heading_block td.pad {
\t\t\t\tpadding: 5px 5px 15px !important;
\t\t\t}

\t\t\t.row-6 .column-1 .block-2.heading_block h1 {
\t\t\t\tfont-size: 20px !important;
\t\t\t}

\t\t\t.row-10 .column-1 .block-1.paragraph_block td.pad,
\t\t\t.row-10 .column-2 .block-1.paragraph_block td.pad,
\t\t\t.row-10 .column-3 .block-1.paragraph_block td.pad {
\t\t\t\tpadding: 10px 5px !important;
\t\t\t}

\t\t\t.row-11 .column-1 .block-2.paragraph_block td.pad>div {
\t\t\t\tfont-size: 14px !important;
\t\t\t}

\t\t\t.row-11 .column-1 .block-2.paragraph_block td.pad {
\t\t\t\tpadding: 10px 25px !important;
\t\t\t}

\t\t\t.row-9 .column-1 {
\t\t\t\tpadding: 20px 0 0 !important;
\t\t\t}

\t\t\t.row-11 .column-1 {
\t\t\t\tpadding: 0 0 20px !important;
\t\t\t}
\t\t}
\t</style>
</head>
<body style="background-color: #d0d0f8; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d0d0f8; background-repeat: no-repeat; background-image: none; background-position: top left; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fbfbfb; color: #000000; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 251px;"><a href="https://soundboxstore.com/" style="outline:none" tabindex="-1" target="_blank"><img alt="Sound Box Store - Modern Office Sound Booth, Sound Pods, Acoustic Booth" src="http://files.soundboxstore.com/images/SBS-new-logo.png" style="display: block; height: auto; border: 0; width: 100%;" title="Sound Box Store - Modern Office Sound Booth, Sound Pods, Acoustic Booth" width="251"/></a></div>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/69991_45286/New%20Reseller/NRESELLER-2023-OK.gif'); background-repeat: no-repeat; background-size: cover;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; color: #000000; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:65px;line-height:65px;font-size:1px;"> </div>
<div class="spacer_block block-2" style="height:35px;line-height:35px;font-size:1px;"> </div>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#fbfbfb;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:33px;font-weight:700;letter-spacing:1px;line-height:150%;text-align:center;mso-line-height-alt:39.6px;">
<p style="margin: 0; margin-bottom: 2px;">Congratulations!</p>
<p style="margin: 0; margin-bottom: 2px;">You are now a reseller of</p>
<p style="margin: 0;">Soundbox store!</p>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-4" style="height:30px;line-height:30px;font-size:1px;"> </div>
<table border="0" cellpadding="10" cellspacing="0" class="button_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://soundboxstore.com/account/login?return_url=%2Fhome" style="height:42px;width:255px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#fbfbfb">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#000000; font-family:Arial, sans-serif; font-size:16px">
<![endif]--><a href="{{url}}" style="text-decoration:none;display:inline-block;color:#000000;background-color:#fbfbfb;border-radius:3px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>SET YOUR PASSWORD NOW</strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
<div class="spacer_block block-6" style="height:110px;line-height:110px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #ffffff; background-size: auto; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:50px;line-height:50px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #ffffff; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:30px;padding-left:25px;padding-right:25px;">
<div style="color:#6d8198;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:20px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:30px;">
<p style="margin: 0; margin-bottom: 12px;">Inside THE VAULT you will find CAD blocks, marketing media, pricing, assembly instructions and much more to help the marketing of Soundbox Store products and service.</p>
<p style="margin: 0;">Constantly being updated please let us know of any further requirements or services needed for a quieter life!</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #ffffff; background-size: auto; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:50px;line-height:50px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #000000; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 22px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 26.4px;"><span class="tinyMce-placeholder">Why Choose Folio Phone Pods?</span></h1>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 60px;"><img alt="Ships flat to your door" src="https://files.soundboxstore.com/images/icons_sbsw1-1.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="Ships flat to your door" width="60"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder">Ships flat to your door</span></h1>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 60px;"><img alt="Plug & play" src="https://files.soundboxstore.com/images/icons_sbsw1-2.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="Plug & play" width="60"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder">Plug & play</span></h1>
</td>
</tr>
</table>
</td>
<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 60px;"><img alt="Flexible to any space" src="https://files.soundboxstore.com/images/icons_sbsw1-3.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="Flexible to any space" width="60"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder">Flexible to any space</span></h1>
</td>
</tr>
</table>
</td>
<td class="column column-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 60px;"><img alt="Movable" src="https://files.soundboxstore.com/images/icons_sbsw1-4.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="Movable" width="60"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder">Movable</span></h1>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44; color: #000000; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 53px;"><a href="https://soundboxstore.com/" style="outline:none" tabindex="-1" target="_blank"><img alt="Sound Box Store - Modern Office Sound Booth, Sound Pods, Acoustic Booth" src="images/SBS-new-logo-icon.png" style="display: block; height: auto; border: 0; width: 100%;" title="Sound Box Store - Modern Office Sound Booth, Sound Pods, Acoustic Booth" width="53"/></a></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="148px">
<tr>
<td style="padding:0 5px 0 0px;"><a href="https://www.instagram.com/soundboxstore/" target="_blank"><img alt="Sound Box Store" height="32" src="https://files.soundboxstore.com/images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Sound Box Store" width="32"/></a></td>
<td style="padding:0 5px 0 0px;"><a href="https://www.linkedin.com/company/sound-box-store/" target="_blank"><img alt="Sound Box Store" height="32" src="https://files.soundboxstore.com/images/linkedin2x.png" style="display: block; height: auto; border: 0;" title="Sound Box Store" width="32"/></a></td>
<td style="padding:0 5px 0 0px;"><a href="https://www.pinterest.co.uk/soundboxstore/" target="_blank"><img alt="Sound Box Store" height="32" src="https://files.soundboxstore.com/images/pinterest2x.png" style="display: block; height: auto; border: 0;" title="Sound Box Store" width="32"/></a></td>
<td style="padding:0 5px 0 0px;"><a href="https://www.youtube.com/@soundboxstore9298" target="_blank"><img alt="Sound Box Store" height="32" src="https://files.soundboxstore.com/images/youtube2x.png" style="display: block; height: auto; border: 0;" title="Sound Box Store" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="5" cellspacing="0" class="divider_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #999FAB;"><span> </span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44; color: #000000; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
<div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:16.5px;">
<p style="margin: 0;"><strong>Beaconsfield Showroom</strong><br/>1st Floor, 10 Penn Rd, Beaconsfield, Berkshire, HP9 2LH<br/>Phone: +44 (0) 20 4586 3800</p>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
<div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:16.5px;">
<p style="margin: 0;"><strong>Clerkenwell Showroom</strong><br/>73 Central Street, Clerkenwell, London, EC1V 8BU</p>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:16.5px;">
<p style="margin: 0;"><strong>Spain Showroom</strong><br/>Cami Vereda Sur 46 Beniparrell, Valencia 46469<br/>Phone: +34 965 02 81 99</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44; color: #000000; width: 680px; margin: 0 auto;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="5" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #999FAB;"><span> </span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
<p style="margin: 0;">Copyright © 2008 – 2022 DWIR Limited. All rights reserved.<br/>Changed your mind? <a href="$[LI:UNSUBSCRIBE]$" rel="noopener" style="text-decoration: underline; color: #ffffff;" target="_blank">Unsubscribe</a></p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>
`
export const CONFIRMATION_HTML = `
<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<style>
\t\t* {
\t\t\tbox-sizing: border-box;
\t\t}

\t\tbody {
\t\t\tmargin: 0;
\t\t\tpadding: 0;
\t\t}

\t\ta[x-apple-data-detectors] {
\t\t\tcolor: inherit !important;
\t\t\ttext-decoration: inherit !important;
\t\t}

\t\t#MessageViewBody a {
\t\t\tcolor: inherit;
\t\t\ttext-decoration: none;
\t\t}

\t\tp {
\t\t\tline-height: inherit
\t\t}

\t\t.desktop_hide,
\t\t.desktop_hide table {
\t\t\tmso-hide: all;
\t\t\tdisplay: none;
\t\t\tmax-height: 0px;
\t\t\toverflow: hidden;
\t\t}

\t\t.image_block img+div {
\t\t\tdisplay: none;
\t\t}

\t\t@media (max-width:640px) {
\t\t\t.social_block.desktop_hide .social-table {
\t\t\t\tdisplay: inline-block !important;
\t\t\t}

\t\t\t.mobile_hide {
\t\t\t\tdisplay: none;
\t\t\t}

\t\t\t.row-content {
\t\t\t\twidth: 100% !important;
\t\t\t}

\t\t\t.stack .column {
\t\t\t\twidth: 100%;
\t\t\t\tdisplay: block;
\t\t\t}

\t\t\t.mobile_hide {
\t\t\t\tmin-height: 0;
\t\t\t\tmax-height: 0;
\t\t\t\tmax-width: 0;
\t\t\t\toverflow: hidden;
\t\t\t\tfont-size: 0px;
\t\t\t}

\t\t\t.desktop_hide,
\t\t\t.desktop_hide table {
\t\t\t\tdisplay: table !important;
\t\t\t\tmax-height: none !important;
\t\t\t}

\t\t\t.row-3 .column-1 .block-1.spacer_block,
\t\t\t.row-5 .column-1 .block-1.spacer_block {
\t\t\t\theight: 20px !important;
\t\t\t}

\t\t\t.row-1 .column-1 .block-2.image_block td.pad {
\t\t\t\tpadding: 0 60px 10px !important;
\t\t\t}

\t\t\t.row-4 .column-1 .block-1.paragraph_block td.pad>div,
\t\t\t.row-4 .column-1 .block-2.paragraph_block td.pad>div {
\t\t\t\ttext-align: center !important;
\t\t\t\tfont-size: 20px !important;
\t\t\t}

\t\t\t.row-4 .column-1 .block-1.paragraph_block td.pad,
\t\t\t.row-4 .column-1 .block-2.paragraph_block td.pad {
\t\t\t\tpadding: 10px 15px 10px 30px !important;
\t\t\t}

\t\t\t.row-6 .column-1 .block-2.heading_block td.pad {
\t\t\t\tpadding: 5px 5px 15px !important;
\t\t\t}

\t\t\t.row-6 .column-1 .block-2.heading_block h1 {
\t\t\t\tfont-size: 20px !important;
\t\t\t}

\t\t\t.row-7 .column-1 .block-2.heading_block td.pad,
\t\t\t.row-7 .column-2 .block-2.heading_block td.pad,
\t\t\t.row-7 .column-3 .block-2.heading_block td.pad,
\t\t\t.row-7 .column-4 .block-2.heading_block td.pad {
\t\t\t\tpadding: 5px 5px 0 !important;
\t\t\t}

\t\t\t.row-10 .column-1 .block-1.paragraph_block td.pad>div,
\t\t\t.row-10 .column-2 .block-1.paragraph_block td.pad>div,
\t\t\t.row-10 .column-3 .block-1.paragraph_block td.pad>div,
\t\t\t.row-7 .column-1 .block-2.heading_block h1,
\t\t\t.row-7 .column-2 .block-2.heading_block h1,
\t\t\t.row-7 .column-3 .block-2.heading_block h1,
\t\t\t.row-7 .column-4 .block-2.heading_block h1 {
\t\t\t\tfont-size: 12px !important;
\t\t\t}

\t\t\t.row-10 .column-1 .block-1.paragraph_block td.pad,
\t\t\t.row-10 .column-2 .block-1.paragraph_block td.pad,
\t\t\t.row-10 .column-3 .block-1.paragraph_block td.pad {
\t\t\t\tpadding: 10px 5px !important;
\t\t\t}

\t\t\t.row-11 .column-1 .block-2.paragraph_block td.pad>div {
\t\t\t\tfont-size: 14px !important;
\t\t\t}

\t\t\t.row-11 .column-1 .block-2.paragraph_block td.pad {
\t\t\t\tpadding: 10px 25px !important;
\t\t\t}

\t\t\t.row-9 .column-1 {
\t\t\t\tpadding: 20px 0 0 !important;
\t\t\t}

\t\t\t.row-11 .column-1 {
\t\t\t\tpadding: 0 0 20px !important;
\t\t\t}
\t\t}
\t</style>
</head>
<body style="background-color: #d0d0f8; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d0d0f8; background-repeat: no-repeat; background-image: none; background-position: top left; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fbfbfb; color: #000000; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 251px;"><a href="https://soundboxstore.com/" style="outline:none" tabindex="-1" target="_blank"><img alt="Sound Box Store - Modern Office Sound Booth, Sound Pods, Acoustic Booth" src="https://files.soundboxstore.com/images/SBS-new-logo.png" style="display: block; height: auto; border: 0; width: 100%;" title="Sound Box Store - Modern Office Sound Booth, Sound Pods, Acoustic Booth" width="251"/></a></div>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/69991_45286/New%20Reseller/NRESELLER-2023-OK.gif'); background-repeat: no-repeat; background-size: cover;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; color: #000000; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:65px;line-height:65px;font-size:1px;"> </div>
<div class="spacer_block block-2" style="height:35px;line-height:35px;font-size:1px;"> </div>
<table border="0" cellpadding="40" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#fbfbfb;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:33px;font-weight:700;letter-spacing:1px;line-height:150%;text-align:center;mso-line-height-alt:39.6px;">
<p style="margin: 0;">Hey partner thank you for requesting a reseller account, we will be back with you shortly.</p>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-4" style="height:30px;line-height:30px;font-size:1px;"> </div>
<div class="spacer_block block-5" style="height:110px;line-height:110px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #ffffff; background-size: auto; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:50px;line-height:50px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #ffffff; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:30px;padding-left:25px;padding-right:25px;">
<div style="color:#6d8198;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:21px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:31.5px;">
<p style="margin: 0;">Inside THE VAULT you will find CAD blocks, marketing media, pricing, assembly instructions and much more to help the marketing of Soundbox Store products and service.</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:30px;padding-left:25px;padding-right:25px;">
<div style="color:#6d8198;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:22.5px;">
<p style="margin: 0;">*Please note reseller accounts are for companies / persons within the industry.</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #ffffff; background-size: auto; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:50px;line-height:50px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #000000; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 22px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 26.4px;"><span class="tinyMce-placeholder">Why Choose Folio Phone Pods?</span></h1>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 60px;"><img alt="Ships flat to your door" src="https://files.soundboxstore.com/images/icons_sbsw1-1.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="Ships flat to your door" width="60"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder">Ships flat to your door</span></h1>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 60px;"><img alt="Plug & play" src="https://files.soundboxstore.com/images/icons_sbsw1-2.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="Plug & play" width="60"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder">Plug & play</span></h1>
</td>
</tr>
</table>
</td>
<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 60px;"><img alt="Flexible to any space" src="https://files.soundboxstore.com/images/icons_sbsw1-3.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="Flexible to any space" width="60"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder">Flexible to any space</span></h1>
</td>
</tr>
</table>
</td>
<td class="column column-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 60px;"><img alt="Movable" src="https://files.soundboxstore.com/images/icons_sbsw1-4.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="Movable" width="60"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:5px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: 'Banana Grotesk','Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder">Movable</span></h1>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44; color: #000000; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 53px;"><a href="https://soundboxstore.com/" style="outline:none" tabindex="-1" target="_blank"><img alt="Sound Box Store - Modern Office Sound Booth, Sound Pods, Acoustic Booth" src="https://files.soundboxstore.com/images/SBS-new-logo-icon.png" style="display: block; height: auto; border: 0; width: 100%;" title="Sound Box Store - Modern Office Sound Booth, Sound Pods, Acoustic Booth" width="53"/></a></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="148px">
<tr>
<td style="padding:0 5px 0 0px;"><a href="https://www.instagram.com/soundboxstore/" target="_blank"><img alt="Sound Box Store" height="32" src="https://files.soundboxstore.com/images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Sound Box Store" width="32"/></a></td>
<td style="padding:0 5px 0 0px;"><a href="https://www.linkedin.com/company/sound-box-store/" target="_blank"><img alt="Sound Box Store" height="32" src="https://files.soundboxstore.com/images/linkedin2x.png" style="display: block; height: auto; border: 0;" title="Sound Box Store" width="32"/></a></td>
<td style="padding:0 5px 0 0px;"><a href="https://www.pinterest.co.uk/soundboxstore/" target="_blank"><img alt="Sound Box Store" height="32" src="https://files.soundboxstore.com/images/pinterest2x.png" style="display: block; height: auto; border: 0;" title="Sound Box Store" width="32"/></a></td>
<td style="padding:0 5px 0 0px;"><a href="https://www.youtube.com/@soundboxstore9298" target="_blank"><img alt="Sound Box Store" height="32" src="https://files.soundboxstore.com/images/youtube2x.png" style="display: block; height: auto; border: 0;" title="Sound Box Store" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="5" cellspacing="0" class="divider_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #999FAB;"><span> </span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44; color: #000000; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
<div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:16.5px;">
<p style="margin: 0;"><strong>Beaconsfield Showroom</strong><br/>1st Floor, 10 Penn Rd, Beaconsfield, Berkshire, HP9 2LH<br/>Phone: +44 (0) 20 4586 3800</p>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
<div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:16.5px;">
<p style="margin: 0;"><strong>Clerkenwell Showroom</strong><br/>73 Central Street, Clerkenwell, London, EC1V 8BU</p>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:16.5px;">
<p style="margin: 0;"><strong>Spain Showroom</strong><br/>Cami Vereda Sur 46 Beniparrell, Valencia 46469<br/>Phone: +34 965 02 81 99</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #303a44; color: #000000; width: 620.00px; margin: 0 auto;" width="620.00">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="5" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #999FAB;"><span> </span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:18px;">
<p style="margin: 0;">Copyright © 2008 – 2022 DWIR Limited. All rights reserved.<br/>Changed your mind? <a href="$[LI:UNSUBSCRIBE]$" rel="noopener" style="text-decoration: underline; color: #ffffff;" target="_blank">Unsubscribe</a></p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>
`
