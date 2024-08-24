import Link from "next/link";
import { ClockIcon } from "~/components/icons";
import { formatTimeRange, getDayNameShort, getDayNumber } from "~/lib/datetime";
import { type CalendarEvent } from "~/types";

type EventCardProps = {
  calendarName: string;
  event: CalendarEvent;
  className?: string;
};

export const EventCard = (props: EventCardProps) => {
  const { event, calendarName } = props;

  return (
    <Link
      href={`/c/${calendarName}/${event.id}`}
      className="flex rounded-lg border border-neutral-300 py-3 transition hover:border-violet-600 hover:bg-violet-50"
    >
      <div className="flex w-24 flex-col items-center justify-center py-1">
        <p>{getDayNameShort(event.start.dateTime, event.start.timeZone)}</p>
        <p className="text-3xl">
          {getDayNumber(event.start.dateTime, event.start.timeZone)}
        </p>
      </div>
      <div className="w-px bg-neutral-300"></div>
      <div className="flex flex-col justify-between px-6 py-1">
        <h2 className="mr-6 grow text-xl font-medium">{event.name}</h2>
        <p className="flex items-center gap-2 text-neutral-500">
          <ClockIcon />
          {formatTimeRange(
            event.start.dateTime,
            event.end.dateTime,
            event.start.timeZone,
          )}
        </p>
      </div>
    </Link>
  );
};
