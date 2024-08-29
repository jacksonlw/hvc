import { type CalendarName, type CalendarEvent } from "~/types";
import { EventCard } from "./EventCard";
import { getMonth } from "~/lib/datetime";
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

        if (addMonthLabel) {
          return (
            <div
              key={event.id}
              className={twMerge("flex flex-col gap-4", i !== 0 && "mt-4")}
            >
              <Badge className="w-fit">
                {getMonth(event.start.dateTime, event.start.timeZone)}
              </Badge>
              <EventCard event={event} calendarName={calendarName} />
            </div>
          );
        }

        return (
          <EventCard key={event.id} event={event} calendarName={calendarName} />
        );
      })}
    </div>
  );
};
