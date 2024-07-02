"use client";
import Link from "next/link";
import { type Event } from "~/types";
import { twMerge } from "tailwind-merge";
import { useUpdateSectionOffset } from "~/hooks";
import {
  ADDRESS_WITH_ZIP,
  CLUBHOUSE_MAP_LOCATION_URL,
  SECTIONS,
} from "~/constants";
import { useRef } from "react";
import { CalendarIcon } from "~/icons";
import { SectionTitle } from "~/features/sections";
import { Button, InfoCard, TextLink } from "~/components";

type EventsSectionProps = {
  className?: string;
  events: Event[];
};

export const EventsSection = (props: EventsSectionProps) => {
  const { className, events } = props;
  const ref = useRef<HTMLDivElement>(null);
  const id = SECTIONS.events.id;

  useUpdateSectionOffset(id, ref);

  return (
    <section
      className={twMerge("relative leading-relaxed", className)}
      ref={ref}
    >
      <div className="absolute -top-24" id={id} />
      <div className="mb-8 flex items-center">
        <SectionTitle className="m-0 flex grow items-center gap-2">
          <CalendarIcon className="inline size-8" />
          Upcoming Events
        </SectionTitle>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid">
        <div className="grid grid-cols-7 border-b border-slate-300 py-3 text-sm text-slate-500">
          <div className="col-span-3">Event Name</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Time</div>
        </div>
        {events.map((event, i) => {
          const isLast = i === events.length - 1;

          return (
            <Link
              key={event.id}
              href="/events/abc"
              className={twMerge(
                "group grid grid-cols-7 border-b border-slate-300 py-4 hover:text-violet-600",
                isLast && "border-transparent",
              )}
            >
              <p className="col-span-3 group-hover:underline">Bazaar</p>
              <p className="col-span-2">Aug 8, 2024</p>
              <p className="col-span-2">10:00pm - 3:00pm</p>
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
