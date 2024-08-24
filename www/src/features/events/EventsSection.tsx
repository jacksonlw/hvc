"use client";
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
import { Button, InfoCard, TextLink } from "~/components";
import { type CalendarEvent } from "~/types";
import { EventsTable } from "./EventsTable";
import Link from "next/link";

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
        <Link href="/c/events" onClick={() => window.scrollTo(0, 0)}>
          <Button>View All</Button>
        </Link>
      </div>

      <div className="grid">
        <EventsTable events={events} calendarName="events" />
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
