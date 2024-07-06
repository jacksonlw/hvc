export type CalendarEvent = {
  id: string;
  name: string;
  start: CalendarEventDateTime;
  end: CalendarEventDateTime;
};

export type CalendarEventDateTime = {
  dateTime: Date;
  timeZone: string;
};
