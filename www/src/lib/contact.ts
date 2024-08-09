"use server";
import Mailjet from "node-mailjet";
import { CONTACT_SUBJECTS } from "~/constants";
import { env } from "~/env";
import { type ServerActionResponse } from "~/types";
import { isValidEmail } from "./validate";
import { generateRandomString } from "./crypto";

export const sendMail = async (
  name: string,
  subject: string,
  email: string,
  message: string,
): Promise<ServerActionResponse> => {
  const validationRes = validateContactForm(name, subject, email, message);
  if (!validationRes.success) {
    return validationRes;
  }

  const mailjet = new Mailjet({
    apiKey: env.MAILJET_API_KEY,
    apiSecret: env.MAILJET_SECRET_KEY,
  });

  const subjectLabel = CONTACT_SUBJECTS.find((s) => s.value === subject)!.label;
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
            Subject: `[${subjectLabel}] New Message from ${name} #${generateRandomString(6)}`,
            TextPart: `Name: ${name}\nSubject: ${subjectLabel}\nEmail: ${email}\n\n${message}`,
          },
        ],
      });

    if (res.response.status !== 200) {
      return {
        success: false,
        message: "An error occurred while sending the email",
      };
    }

    return {
      success: true,
      message: "Your message has been sent!",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while sending the email",
    };
  }
};

const validateContactForm = (
  name: string,
  subject: string,
  email: string,
  message: string,
): ServerActionResponse => {
  if (!name.trim() || !subject.trim() || !email.trim() || !message.trim()) {
    return {
      success: false,
      message: "You must fill out all fields",
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Invalid email address",
    };
  }

  if (!CONTACT_SUBJECTS.some((s) => s.value === subject)) {
    return {
      success: false,
      message: "Invalid subject",
    };
  }

  return {
    success: true,
    message: "Success",
  };
};
