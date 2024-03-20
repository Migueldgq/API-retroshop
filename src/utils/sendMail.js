import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from "../../env.js";
import localforage from "localforage";

const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

const createDynamicHTML = (text, link) => {
  return `<div style="background-image: url(https://scontent.fmad6-1.fna.fbcdn.net/v/t39.30808-6/426168357_122110965890200056_9007901339209577468_n.png?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=yINBA_G2TR0AX_bhiFA&_nc_ht=scontent.fmad6-1.fna&oh=00_AfBbETLEaqP-yhuAz1SwUsQHIa8mqiBxHiVIuX_r28vDxw&oe=65CE3089); background-size: contain ; background-repeat: no-repeat;
  padding: 20px;
   width: 1200px; 
  height: 600px; 
  display: flex !important; 
  justify-content: center !important;
   align-items: center !important; 
   flex-direction: column !important;
    color: black; 
    font-weight: bold;
     font-size: 2rem;">
  
  <p>${text}</p>
  <a href="${link}">Enlace</a>
</div>`;
};

const sendMail = async (email, subject, link, html) => {
  const mailOptions = {
    from: SMTP_USER,
    to: email,
    subject,
    html: html(link),
  };

  console.log('este es el html en sendmail', html);
  await transport.sendMail(mailOptions);
};

export default sendMail;
