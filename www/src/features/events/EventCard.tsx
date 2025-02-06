import Link from "next/link";
import { ClockIcon } from "~/components/icons";
import { ArrowUpRightIcon } from "~/components/icons/ArrowUpRightIcon";
import { DocumentTextIcon } from "~/components/icons/DocumentTextIcon";
import {
  formatTimeRange,
  formatDayNameShort,
  formatDayNumber,
} from "~/lib/datetime";
import { type CalendarEvent, type CalendarName } from "~/types";

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
        <p>{formatDayNameShort(event.startDate)}</p>
        <p className="text-3xl">{formatDayNumber(event.startDate)}</p>
      </div>
      <div className="w-px bg-neutral-300"></div>
      <div className="flex grow items-center justify-between px-6 py-1">
        <div className="flex h-full flex-col justify-between gap-2">
          <h2 className="text-xl">{event.summary}</h2>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <p className="flex items-center gap-1 text-neutral-500">
              <ClockIcon />
              {event.isAllDay ? (
                <>All day event</>
              ) : (
                formatTimeRange(event.start?.dateTime, event.end?.dateTime)
              )}
            </p>
            {event.attachments && event.attachments.length > 0 ? (
              <p className="flex items-center gap-1 text-neutral-500">
                <DocumentTextIcon /> Additional details provided
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <span className="flex items-center gap-2 text-violet-600 opacity-0 transition group-hover:opacity-100">
          <ArrowUpRightIcon className="size-5" />
        </span>
      </div>
    </Link>
  );
};
