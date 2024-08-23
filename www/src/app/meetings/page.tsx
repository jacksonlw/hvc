import { Heading } from "~/components";
import { env } from "~/env";
import { EventsTable } from "~/features/events/EventsTable";
import { listCalendarEvents } from "~/lib/calendar";

const TIME_MAX_OFFSET = 1000 * 60 * 60 * 24 * 30 * 3; // 3 months

export default async function MeetingsPage() {
  const meetings = await listCalendarEvents(
    env.CLUB_MEETINGS_GOOGLE_CALENDAR_ID,
    {
      timeMax: new Date(Date.now() + TIME_MAX_OFFSET),
    },
  );

  return (
    <div className="pb-12">
      <Heading as="h1" className="my-8 text-3xl">
        Club Meetings
      </Heading>
      <EventsTable events={meetings} calendarName="meetings" />
    </div>
  );
}
