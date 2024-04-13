
import { EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server.js';

export const actions = {
  sendEmail: async ({ request }) => {
    try {
      const formData = await request.formData();

      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const customerEmail = formData.get("email");
      const message = formData.get("message");
      const city = formData.get("city");
      const state = formData.get("state");
      const zip = formData.get("zip");

      let html = `<pre>
      <p>Customer Name: ${firstName} ${lastName}</p>
      <p>Customer Email: ${customerEmail}</p>
      <p>Customer Location: ${city} ${state} ${zip}
      <p>${message}</p>
      </pre>`;

      const email = {
        from: EMAIL,
        to: EMAIL,
        subject: "Message from SnackMaster Website",
        text: message,
        html: html,
      }

      // @ts-ignore
      const sendEmail = async (email) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(email, (err, info) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
      };

      await sendEmail(email);

      return {
        success: "Email is sent",
      };
    } catch (error) {
      console.error(error);
    }
  }
};