import { type calendar_v3, google } from "googleapis";
import { createGoogleAuth } from "./google";
import { type CalendarEvent } from "~/types";
import { formatDate } from "./datetime";
import dayjs from "dayjs";

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

/**
 * Checks if the calendar event starts and ends on the same day.
 *
 * @param event the event to check.
 * @returns true if the is a same day event; otherwise false.
 */
export const isSameDayEvent = (event: CalendarEvent): boolean => {
  return (
    !!event.startDate &&
    !!event.endDate &&
    formatDate(event.startDate) === formatDate(event.endDate)
  );
};

export const splitMultiDayEvent = (event: CalendarEvent): CalendarEvent[] => {
  const events: CalendarEvent[] = [];
  const start = dayjs(event.startDate);
  let end = dayjs(event.endDate);
  end = end.subtract(1, "second");

  const n = end.diff(start, "day");
  for (let i = 0; i <= n; i++) {
    const date = start.add(i, "day");
    const newEvent: CalendarEvent = {
      ...event,
      startDate: date.toDate(),
      endDate: date.toDate(),
    };
    events.push(newEvent);
  }

  return events;
};

/**
 * Get a single google calendar event.
 *
 * @param calendarId the google calendar id which has the event.
 * @param eventId the google calendar event id.
 * @returns the calendar event or null if none exists.
 */
export const getCalendarEvent = async (
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
  if (!event) {
    return null;
  }

  return event;
};

/**
 * Lists google calendar events from the specified calendar with options.
 * @param calendarId the google calendar id to list events from.
 * @param options options for filtering listed calendar events.
 * @returns list of calendar events; or empty list if there are no events.
 */
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
    .flatMap(splitMultiDayEvent);

  return events;
};
