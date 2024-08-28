import { notFound } from "next/navigation";
import { Heading } from "~/components";
import { CALENDARS } from "~/constants/calendar";
import { EventsTable } from "~/features/events/EventsTable";
import { listCalendarEvents } from "~/lib/calendar";
import { type CalendarName } from "~/types";

const TIME_MAX_OFFSET = 1000 * 60 * 60 * 24 * 30 * 3; // 3 months

type CalendarPageProps = {
  params: {
    calendarName: CalendarName;
  };
};

export default async function CalendarPage(props: CalendarPageProps) {
  const { params } = props;
  const { calendarName } = params;
  const calendarId = CALENDARS[calendarName];
  const title = calendarName === "events" ? "Events" : "Club Meetings";

  const meetings = await listCalendarEvents(calendarId, {
    timeMax: new Date(Date.now() + TIME_MAX_OFFSET),
  });

  if (!meetings) {
    return notFound();
  }

  return (
    <>
      <Heading as="h1" className="my-8 text-3xl">
        {title}
      </Heading>
      <EventsTable
        events={meetings}
        calendarName={calendarName}
        className="pb-12"
      />
    </>
  );
}
