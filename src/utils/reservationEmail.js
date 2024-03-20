import sendMail from "./sendMail.js";
import { IPV4 } from "../../env.js";

const reservationEmail = async (email, reservationId, productId) => {
  //console.log("product id en reservationimeil", productId);
  const ruta = `/products/productSeller/?id=${productId}`;
  const link = `http://${IPV4}:5173/confirmacion/${reservationId}/${email}/${encodeURIComponent(
    ruta
  )}`;

  const customHtml = (link) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
    <style type="text/css">
    table {
    border-collapse: separate;
    table-layout: fixed;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt
    }
    table td {
    border-collapse: collapse
    }
    .ExternalClass {
    width: 100%
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
    line-height: 100%
    }
    body, a, li, p, h1, h2, h3 {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    }
    html {
    -webkit-text-size-adjust: none !important
    }
    body, #innerTable {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
    }
    #innerTable img+div {
    display: none;
    display: none !important
    }
    img {
    Margin: 0;
    padding: 0;
    -ms-interpolation-mode: bicubic
    }
    h1, h2, h3, p, a {
    line-height: 1;
    overflow-wrap: normal;
    white-space: normal;
    word-break: break-word
    }
    a {
    text-decoration: none
    }
    h1, h2, h3, p {
    min-width: 100%!important;
    width: 100%!important;
    max-width: 100%!important;
    display: inline-block!important;
    border: 0;
    padding: 0;
    margin: 0
    }
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important
    }
    a[href^="mailto"],
    a[href^="tel"],
    a[href^="sms"] {
    color: inherit;
    text-decoration: none
    }
    img,p{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}
    </style>
    <style type="text/css">
    @media (min-width: 481px) {
    .hd { display: none!important }
    }
    </style>
    <style type="text/css">
    @media (max-width: 480px) {
    .hm { display: none!important }
    }
    </style>
    <style type="text/css">
    [style*="Albert Sans"] {font-family: 'Albert Sans', BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif !important;} [style*="Inter Tight"] {font-family: 'Inter Tight', BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif !important;}
    @media only screen and (min-width: 481px) {img,p{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.t3,.t4{mso-line-height-alt:60px!important;line-height:60px!important;display:block!important}.t9{border-radius:8px!important;overflow:hidden!important;padding:60px!important}.t11{padding:60px!important;border-radius:8px!important;overflow:hidden!important;width:480px!important}.t15,.t37,.t47,.t57{width:600px!important}}
    </style>
    <style type="text/css" media="screen and (min-width:481px)">.moz-text-html img,.moz-text-html p{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html .t3,.moz-text-html .t4{mso-line-height-alt:60px!important;line-height:60px!important;display:block!important}.moz-text-html .t9{border-radius:8px!important;overflow:hidden!important;padding:60px!important}.moz-text-html .t11{padding:60px!important;border-radius:8px!important;overflow:hidden!important;width:480px!important}.moz-text-html .t15,.moz-text-html .t37,.moz-text-html .t47,.moz-text-html .t57{width:600px!important}</style>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;800&amp;family=Inter+Tight:wght@900&amp;display=swap" rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
    <style type="text/css">
    img,p{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}div.t3,div.t4{mso-line-height-alt:60px !important;line-height:60px !important;display:block !important}td.t9{border-radius:8px !important;overflow:hidden !important;padding:60px !important}td.t11{padding:60px !important;border-radius:8px !important;overflow:hidden !important;width:600px !important}td.t15,td.t37,td.t47,td.t57{width:600px !important}
    </style>
    <![endif]-->
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    <body class="t0" style="min-width:100%;Margin:0px;padding:0px;background-color:#F4F4F4;"><div class="t1" style="background-color:#F4F4F4;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t2" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F4F4F4;" valign="top" align="center">
    <!--[if mso]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
    <v:fill color="#F4F4F4"/>
    </v:background>
    <![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t3" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;</div></td></tr><tr><td>
    <table class="t10" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t11" style="background-color:#FFFFFF;width:400px;padding:40px 40px 40px 40px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t11" style="background-color:#FFFFFF;width:480px;padding:40px 40px 40px 40px;"><![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
    <table class="t14" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t15" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t15" style="width:480px;"><![endif]-->
    <h1 class="t21" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:41px;font-weight:800;font-style:normal;font-size:39px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Propuesta de compra</h1></td>
    </tr></table>
    </td></tr><tr><td><div class="t13" style="mso-line-height-rule:exactly;mso-line-height-alt:16px;line-height:16px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t46" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t47" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t47" style="width:480px;"><![endif]-->
    <p class="t53" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">¡Felicidades un usuario se ha interesado por tu producto! Pincha en el enlace para indicar en la ficha del producto la hora y el lugar de la entrega.</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t22" style="mso-line-height-rule:exactly;mso-line-height-alt:35px;line-height:35px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t24" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
    <!--[if !mso]><!--><td class="t25" style="background-color:#92003C;overflow:hidden;width:179px;text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:6px;border-radius:40px 40px 40px 40px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t25" style="background-color:#92003C;overflow:hidden;width:179px;text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:6px;border-radius:40px 40px 40px 40px;"><![endif]-->
    <a class="t31" href=${link} style="display:block;margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Inter Tight';line-height:34px;font-weight:900;font-style:normal;font-size:13px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:6px;" target="_blank">administrar reserva</a></td>
    </tr></table>
    </td></tr><tr><td><div class="t34" style="mso-line-height-rule:exactly;mso-line-height-alt:35px;line-height:35px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t36" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t37" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t37" style="width:480px;"><![endif]-->
    <p class="t43" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Una vez que el comprador reciba su producto estará habilitado para valorar el producto, gracias por utilizar nuestro servicio</p></td>
    </tr></table>
    </td></tr><tr><td><div class="t54" style="mso-line-height-rule:exactly;mso-line-height-alt:35px;line-height:35px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
    <table class="t56" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
    <!--[if !mso]><!--><td class="t57" style="width:480px;">
    <!--<![endif]-->
    <!--[if mso]><td class="t57" style="width:480px;"><![endif]-->
    <p class="t63" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Retroshop 2024 ©</p></td>
    </tr></table>
    </td></tr></table></td>
    </tr></table>
    </td></tr><tr><td><div class="t4" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;</div></td></tr></table></td></tr></table></div></body>
    </html>`;
  };

  await sendMail(email, "Propuesta de compra", link, customHtml);
};

export default reservationEmail;
