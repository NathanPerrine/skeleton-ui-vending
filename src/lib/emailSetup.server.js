import nodemailer from "nodemailer"
// import { EMAIL_ADDRESS, EMAIL_PASSWORD } from '$env/static/private'
import { env } from '$env/dynamic/private'

const EMAIL_ADDRESS = env.EMAIL_ADDRESS;
const EMAIL_PASSWORD = env.EMAIL_PASSWORD;

let transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_ADDRESS,
    pass: EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;