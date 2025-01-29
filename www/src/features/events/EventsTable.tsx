import { type CalendarEvent, type CalendarName } from "~/types";
import { EventCard } from "./EventCard";
import { formatMonth } from "~/lib/datetime";
import { twMerge } from "tailwind-merge";
import { Badge } from "~/components";

type EventsTableProps = {
  calendarName: CalendarName;
  events: CalendarEvent[];
  className?: string;
};

export const EventsTable = (props: EventsTableProps) => {
  const { events, calendarName, className } = props;

  return (
    <div className={twMerge("grid gap-4", className)}>
      {events.map((event, i) => {
        const eventMonth = formatMonth(event.startDate);

        let prevMonth = formatMonth(new Date()); // default current month
        const prevEvent = events[i - 1];
        if (prevEvent) {
          prevMonth = formatMonth(prevEvent.startDate); // use previous event month
        }

        const addMonthLabel = eventMonth !== prevMonth;
        return (
          <>
            {addMonthLabel ? (
              <Badge className="mt-2 w-fit">{eventMonth}</Badge>
            ) : (
              <></>
            )}
            <EventCard
              key={event.id}
              event={event}
              calendarName={calendarName}
            />
          </>
        );
      })}
    </div>
  );
};
