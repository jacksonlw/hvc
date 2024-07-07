import { google } from "googleapis";
import { env } from "~/env";

export const createGoogleAuth = () => {
  return new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/calendar.events.readonly"],
    credentials: {
      type: "service account",
      project_id: env.GOOGLE_PROJECT_ID,
      private_key_id: env.GOOGLE_SERVICE_ACCOUNT_PK_ID,
      private_key: env.GOOGLE_SERVICE_ACCOUNT_PK,
      client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      client_id: env.GOOGLE_CLIENT_ID,
    },
  });
};
