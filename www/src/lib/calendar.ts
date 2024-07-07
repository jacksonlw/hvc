import { type calendar_v3, google } from "googleapis";
import { type CalendarEvent } from "~/types";
import { createGoogleAuth } from "./google";

export const getEvent = async (calendarId: string, eventId: string) => {
  const auth = createGoogleAuth();

  const cal = google.calendar({
    version: "v3",
    auth,
  });

  const res = await cal.events.get({
    calendarId,
    eventId,
  });

  return convertResToEvent(res.data);
};

export const listTenEvents = async (calendarId: string) => {
  const auth = createGoogleAuth();

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
    ?.map(convertResToEvent)
    .filter(Boolean) as CalendarEvent[];

  return events;
};

const convertResToEvent = (resEvent: calendar_v3.Schema$Event) => {
  if (
    !(
      resEvent.id &&
      resEvent.summary &&
      resEvent.start?.dateTime &&
      resEvent.end?.dateTime &&
      resEvent.start?.timeZone &&
      resEvent.end?.timeZone
    )
  ) {
    return null;
  }

  const firstAttachment = resEvent.attachments?.[0];

  return {
    id: resEvent.id,
    name: resEvent.summary,
    start: {
      dateTime: new Date(resEvent.start?.dateTime),
      timeZone: resEvent.start?.timeZone,
    },
    end: {
      dateTime: new Date(resEvent.end?.dateTime),
      timeZone: resEvent.end?.timeZone,
    },
    attachmentFileId: firstAttachment?.fileId,
  } as CalendarEvent;
};
