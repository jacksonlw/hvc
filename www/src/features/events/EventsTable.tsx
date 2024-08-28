import { type CalendarName, type CalendarEvent } from "~/types";
import { EventCard } from "./EventCard";
import { getMonth } from "~/lib/datetime";
import { twMerge } from "tailwind-merge";

type EventsTableProps = {
  calendarName: CalendarName;
  events: CalendarEvent[];
  className?: string;
};

export const EventsTable = (props: EventsTableProps) => {
  const { events, calendarName, className } = props;

  return (
    <div className={twMerge("grid gap-3", className)}>
      {events.map((event, i) => {
        const prevEvent = events[i - 1];

        const eventMonth = getMonth(event.start.dateTime, event.start.timeZone);

        let addMonthLabel = true;
        if (prevEvent) {
          const prevMonth = getMonth(
            prevEvent.start.dateTime,
            prevEvent.start.timeZone,
          );
          addMonthLabel = prevMonth !== eventMonth;
        } else {
          const currentMonth = getMonth(new Date(), event.start.timeZone);
          addMonthLabel = eventMonth !== currentMonth;
        }

        return (
          <>
            {addMonthLabel && (
              <span
                key={event.id + "-month"}
                className={twMerge("text-lg", i !== 0 && "mt-4")}
              >
                {getMonth(event.start.dateTime, event.start.timeZone)}
              </span>
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
