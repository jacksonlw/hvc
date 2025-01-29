import { type calendar_v3 } from "googleapis";

export type CalendarName = "events" | "meetings";

export interface CalendarEvent extends calendar_v3.Schema$Event {
  calendarId: string;
  startDate: string;
  endDate: string;
  isAllDay: boolean;
}
