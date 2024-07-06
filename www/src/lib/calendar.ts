import { type calendar_v3, google } from "googleapis";
import { env } from "~/env";
import { type CalendarEvent } from "~/types";

export const readCalendar = async (calendarId: string) => {
  const auth = new google.auth.GoogleAuth({
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

  const cal = google.calendar({
    version: "v3",
    auth,
  });

  const res = await cal.events.list({
    calendarId,
    maxResults: 10,
    timeMin: new Date().toISOString(),
    orderBy: "startTime",
    singleEvents: true,
  });

  const events = res.data.items
    ?.map(convertEvent)
    .filter(Boolean) as CalendarEvent[];

  return events;
};

const convertEvent = (e: calendar_v3.Schema$Event) => {
  if (
    !(
      e.id &&
      e.summary &&
      e.start?.dateTime &&
      e.end?.dateTime &&
      e.start?.timeZone &&
      e.end?.timeZone
    )
  ) {
    return null;
  }

  return {
    id: e.id,
    name: e.summary,
    start: {
      dateTime: new Date(e.start?.dateTime),
      timeZone: e.start?.timeZone,
    },
    end: {
      dateTime: new Date(e.end?.dateTime),
      timeZone: e.end?.timeZone,
    },
  } as CalendarEvent;
};
