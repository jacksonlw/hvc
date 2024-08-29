import Link from "next/link";
import { ClockIcon } from "~/components/icons";
import { ArrowUpRightIcon } from "~/components/icons/ArrowUpRightIcon";
import { formatTimeRange, getDayNameShort, getDayNumber } from "~/lib/datetime";
import { type CalendarName, type CalendarEvent } from "~/types";

type EventCardProps = {
  calendarName: CalendarName;
  event: CalendarEvent;
  className?: string;
};

export const EventCard = (props: EventCardProps) => {
  const { event, calendarName } = props;

  return (
    <Link
      href={`/c/${calendarName}/${event.id}`}
      className="group flex rounded-lg border border-neutral-300 py-3 transition hover:border-violet-600 hover:bg-violet-50"
      aria-label="View event details"
    >
      <div className="flex w-24 flex-col items-center justify-center py-1">
        <p>{getDayNameShort(event.start.dateTime, event.start.timeZone)}</p>
        <p className="text-3xl">
          {getDayNumber(event.start.dateTime, event.start.timeZone)}
        </p>
      </div>
      <div className="w-px bg-neutral-300"></div>
      <div className="flex grow items-center justify-between px-6 py-1">
        <div className="flex h-full flex-col justify-between">
          <h2 className="mr-6 text-xl font-medium">{event.name}</h2>
          <p className="flex items-center gap-2 text-neutral-500">
            <ClockIcon />
            {formatTimeRange(
              event.start.dateTime,
              event.end.dateTime,
              event.start.timeZone,
            )}
          </p>
        </div>
        <span className="flex items-center gap-2 text-violet-600 opacity-0 transition group-hover:opacity-100">
          See more
          <ArrowUpRightIcon className="size-5" />
        </span>
      </div>
    </Link>
  );
};
