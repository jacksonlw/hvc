"use server";

import Mailjet from "node-mailjet";
import { env } from "~/env";

export const sendMail = async (
  name: string,
  email: string,
  message: string,
) => {
  // TODO: Implement validation
  const mailjet = new Mailjet({
    apiKey: env.MAILJET_API_KEY,
    apiSecret: env.MAILJET_SECRET_KEY,
  });

  try {
    const res = await mailjet
      .post("send", {
        version: "v3.1",
      })
      .request({
        Messages: [
          {
            From: {
              Email: env.MAIL_FROM,
              Name: "Web Contact Form",
            },
            ReplyTo: {
              Email: email,
              Name: name,
            },
            To: [
              {
                Email: env.MAIL_TO,
              },
            ],
            Subject: "New Message From the Website",
            TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          },
        ],
      });

    if (res.response.status !== 200) {
      console.error(res.response);
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
