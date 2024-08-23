import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { formatDate, formatTimeRange } from "~/lib/datetime";
import { type CalendarEvent } from "~/types";

type EventsTableProps = {
  calendarName: string;
  events: CalendarEvent[];
};

export const EventsTable = (props: EventsTableProps) => {
  const { events, calendarName } = props;

  return (
    <div>
      <div className="grid grid-cols-7 border-b border-gray-300 px-2 py-3 text-sm text-gray-500">
        <div className="col-span-3">Event Name</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-2">Time</div>
      </div>
      {events.length === 0 ? (
        <div className="pb-6 pt-8 text-center text-lg">
          No upcoming events currently scheduled
        </div>
      ) : (
        <></>
      )}
      {events.map((event, i) => {
        const { id, name, start, end } = event;
        const isLast = i === events.length - 1;
        const formattedDate = formatDate(start.dateTime, start.timeZone);
        const formattedTime = formatTimeRange(
          start.dateTime,
          end.dateTime,
          start.timeZone,
        );

        return (
          <Link
            key={id}
            href={`/c/${calendarName}/${id}`}
            className={twMerge(
              "group grid grid-cols-7 border-b border-gray-300 px-2 py-4 hover:bg-violet-100",
              isLast && "border-transparent",
            )}
          >
            <p className="col-span-3 font-medium group-hover:text-violet-600 group-hover:underline md:text-lg">
              {name}
            </p>
            <p className="col-span-2 text-sm sm:text-base">{formattedDate}</p>
            <p className="col-span-2 text-sm sm:text-base">{formattedTime}</p>
          </Link>
        );
      })}
    </div>
  );
};
