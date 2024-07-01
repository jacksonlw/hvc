"use client";
import Link from "next/link";
import { SectionTitle } from "../../molecules/SectionTitle";
import { type Event } from "~/types";
import { twMerge } from "tailwind-merge";
import { Button } from "../../atoms";
import { useUpdateSectionOffset } from "~/hooks";
import { SECTIONS } from "~/constants";
import { useRef } from "react";

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
      <div className="absolute -top-16" id={id} />
      <div className="mb-8 flex items-center">
        <SectionTitle className="m-0 grow">Upcoming Events</SectionTitle>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid">
        <div className="grid grid-cols-7 border-b border-gray-300 px-1 py-3 text-sm text-gray-600">
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
                "group grid grid-cols-7 border-b border-gray-300 px-1 py-4 transition-[background-color] hover:bg-violet-600/10 hover:text-violet-600 [&>p]:transition-[color]",
                isLast && "border-transparent",
              )}
            >
              <p className="col-span-3">Bazaar</p>
              <p className="col-span-2">Aug 8, 2024</p>
              <p className="col-span-2">10:00pm - 3:00pm</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
