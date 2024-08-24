import { env } from "~/env";

export const CALENDARS = {
  events: env.EVENTS_GOOGLE_CALENDAR_ID,
  meetings: env.CLUB_MEETINGS_GOOGLE_CALENDAR_ID,
};
