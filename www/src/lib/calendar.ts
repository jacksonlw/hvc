import { type calendar_v3, google } from "googleapis";
import { createGoogleAuth } from "./google";
import { type CalendarEvent } from "~/types";
import { formatDate } from "./datetime";

type ListEventsOptions = Partial<{
  limit: number;
  timeMin: Date;
  timeMax: Date;
  eventId: number;
}>;

const validResEvent = (resEvent: calendar_v3.Schema$Event) => {
  const startDate = resEvent.start?.dateTime ?? resEvent.start?.date;
  const endDate = resEvent.end?.dateTime ?? resEvent.end?.date;

  return !!resEvent.id && !!resEvent.summary && !!startDate && !!endDate;
};

const convertResToEvent = (
  calendarId: string,
  resEvent: calendar_v3.Schema$Event,
): CalendarEvent | null => {
  if (!calendarId || !validResEvent(resEvent)) {
    return null;
  }

  const startDate = resEvent.start?.dateTime ?? resEvent.start?.date;
  const endDate = resEvent.end?.dateTime ?? resEvent.end?.date;
  if (!startDate || !endDate) {
    return null;
  }

  const event: CalendarEvent = {
    calendarId,
    startDate,
    endDate,
    isAllDay: !!resEvent.start?.date && !!resEvent.end?.date,
    ...resEvent,
  };
  return event;
};

export const isSameDayEvent = (event: CalendarEvent): boolean => {
  return (
    !!event.startDate &&
    !!event.endDate &&
    formatDate(event.startDate) === formatDate(event.endDate)
  );
};

export const getEvent = async (
  calendarId: string,
  eventId: string,
): Promise<CalendarEvent | null> => {
  const auth = createGoogleAuth();
  const cal = google.calendar({
    version: "v3",
    auth,
  });

  const res = await cal.events.get({
    calendarId,
    eventId,
  });

  const event = convertResToEvent(calendarId, res.data);
  if (!event || !isSameDayEvent(event)) {
    return null;
  }

  return event;
};

export const listCalendarEvents = async (
  calendarId: string,
  options: ListEventsOptions,
): Promise<CalendarEvent[]> => {
  const auth = createGoogleAuth();
  const cal = google.calendar({
    version: "v3",
    auth,
  });

  const res = await cal.events.list({
    calendarId,
    orderBy: "startTime",
    singleEvents: true,
    maxResults: options.limit,
    timeMin: options.timeMin?.toISOString() ?? new Date().toISOString(),
    timeMax: options.timeMax?.toISOString(),
  });

  if (!res.data.items) {
    return [];
  }

  const events = res.data.items
    .map((event) => convertResToEvent(calendarId, event))
    .filter((event) => event !== null)
    .filter(isSameDayEvent);

  return events;
};
