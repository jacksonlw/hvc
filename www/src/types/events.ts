export type CalendarEvent = {
  id: string;
  calendarId: string;
  name: string;
  start: CalendarEventDateTime;
  end: CalendarEventDateTime;

  attachmentFileId?: string;
};

export type CalendarEventDateTime = {
  dateTime: Date;
  timeZone: string;
};
