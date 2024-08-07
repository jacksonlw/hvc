"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useSetSectionInView } from "~/hooks";
import {
  ADDRESS_WITH_ZIP,
  CLUBHOUSE_MAP_LOCATION_URL,
  SECTIONS,
} from "~/constants";
import { useRef } from "react";
import { CalendarIcon } from "~/components/icons";
import { SectionTitle } from "~/features/sections";
import { InfoCard, TextLink } from "~/components";
import { type CalendarEvent } from "~/types";
import { formatDate, formatTimeRange } from "~/lib/datetime";

type EventsSectionProps = {
  className?: string;
  events: CalendarEvent[];
};

export const EventsSection = (props: EventsSectionProps) => {
  const { className, events } = props;
  const ref = useRef<HTMLDivElement>(null);
  const id = SECTIONS.events.id;

  useSetSectionInView(id, ref);

  return (
    <section
      className={twMerge("relative leading-relaxed", className)}
      ref={ref}
    >
      <div className="absolute -top-24" id={id} />
      <div className="mb-8 flex items-center">
        <SectionTitle className="m-0 flex grow items-center gap-2">
          <CalendarIcon className="inline size-7 md:size-8" />
          Upcoming Events
        </SectionTitle>
        {/* <Button>View All</Button> */}
      </div>

      <div className="grid">
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
              href={`/events/${id}`}
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
        <InfoCard className="mt-8">
          <p>
            All events are located in our hall at{" "}
            <TextLink href={CLUBHOUSE_MAP_LOCATION_URL} target="_blank">
              {ADDRESS_WITH_ZIP}
            </TextLink>
          </p>
        </InfoCard>
      </div>
    </section>
  );
};
