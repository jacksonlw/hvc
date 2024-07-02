"use client";
import { twMerge } from "tailwind-merge";
import { PHONE_NUMBER, SECTIONS } from "~/constants";
import { useRef } from "react";
import { useUpdateSectionOffset } from "~/hooks";
import { SectionTitle, SubSectionTitle } from "~/features/sections";
import { InfoCard, TextLink } from "~/components";
import { ReservationsFAQ } from "./ReservationsFAQ";

type ReservationsSectionProps = {
  className?: string;
};

export const ReservationsSection = (props: ReservationsSectionProps) => {
  const { className } = props;
  const ref = useRef<HTMLDivElement>(null);
  const id = SECTIONS.reserve.id;

  useUpdateSectionOffset(id, ref);

  return (
    <section className={twMerge("relative [&>p]:mb-4", className)} ref={ref}>
      <div className="absolute -top-24" id={id} />
      <SectionTitle>Reservations</SectionTitle>
      <InfoCard variant="important">
        <p>
          To make a reservation, you can call us at{" "}
          <span className="font-medium text-violet-600">{PHONE_NUMBER}</span> or
          contact us through our{" "}
          <TextLink href="#contact">contact form below</TextLink>.
        </p>
      </InfoCard>

      {/* <SubSectionTitle>Our Hall</SubSectionTitle>
      <p>
        Perfect for Wedding Receptions, Brithday Parties, Memorials or
        Weekly/Monthly Club rentals. We have tables and chairs available upon
        request. A warming kitchen with onsite and overflow parking available.
        The hall has a Maximum Capacity of 225 guest, 150 seated at tables.
      </p> */}

      <SubSectionTitle>Pricing</SubSectionTitle>

      <div className="mb-4 grid">
        <div className="bg-slate-100 p-2 text-lg">All Day</div>
        <div className="flex items-center  p-2 pl-6">
          <p className="grow text-slate-500">8:00am - 12:00am (Midnight)</p>
          <p className="font-medium">$2000/day</p>
        </div>
        <div className="bg-slate-100 p-2 text-lg">Hourly</div>
        <div className="flex items-center p-2 pl-6">
          <p className="grow text-slate-500">Sunday - Thursday</p>
          <p className="font-medium">$50/hr</p>
        </div>
        <div className="flex items-center p-2 pl-6">
          <p className="grow text-slate-500">Friday</p>
          <p className="font-medium">$150/hr</p>
        </div>
        <div className="flex items-center p-2 pl-6">
          <p className="grow text-slate-500">Saturday</p>
          <p className="font-medium">$200/hr</p>
        </div>
      </div>
      <InfoCard>
        Setup and cleanup time is included in your billable hours.
      </InfoCard>

      <SubSectionTitle>Frequently Asked Questions</SubSectionTitle>
      <ReservationsFAQ />
    </section>
  );
};
