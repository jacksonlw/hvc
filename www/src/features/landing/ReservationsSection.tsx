"use client";
import { twMerge } from "tailwind-merge";
import { IMAGES, PHONE_NUMBER, SECTIONS } from "~/constants";
import { useRef } from "react";
import { useUpdateSectionOffset } from "~/hooks";
import { SectionTitle, SubSectionTitle } from "~/features/content";
import { InfoCard, TextLink } from "~/components";
import { ReservationsFAQ } from "./ReservationsFAQ";
import Image from "next/image";

type ReservationsSectionProps = {
  className?: string;
};

export const ReservationsSection = (props: ReservationsSectionProps) => {
  const { className } = props;
  const ref = useRef<HTMLDivElement>(null);
  const id = SECTIONS.reserve.id;

  useUpdateSectionOffset(id, ref);

  return (
    <section
      className={twMerge(
        "relative grid grid-cols-1 gap-x-8 lg:grid-cols-2 xl:gap-x-16 [&>p]:mb-4",
        className,
      )}
      ref={ref}
    >
      <div className="absolute -top-24" id={id} />
      <div>
        <SectionTitle>Reserve Our Hall</SectionTitle>
        <InfoCard variant="important">
          <p>
            To make a reservation, you can call us at{" "}
            <span className="text-violet-600">{PHONE_NUMBER}</span> or use our{" "}
            <TextLink href={`/#${SECTIONS.contact.id}`}>
              contact form below
            </TextLink>
          </p>
        </InfoCard>

        <div className="mt-8 block lg:hidden">
          <Image
            src={IMAGES.clubhouse}
            width={1920}
            height={1080}
            alt="Portrait of club members"
            className="aspect-video rounded-3xl border-4 border-white object-cover object-top"
          />
        </div>

        {/* <SubSectionTitle>Our Hall</SubSectionTitle>
      <p>
        Perfect for Wedding Receptions, Brithday Parties, Memorials or
        Weekly/Monthly Club rentals. We have tables and chairs available upon
        request. A warming kitchen with onsite and overflow parking available.
        The hall has a Maximum Capacity of 225 guest, 150 seated at tables.
      </p> */}

        <SubSectionTitle>Pricing</SubSectionTitle>

        <div className="mb-4 grid">
          <div className="bg-gray-100 p-2 text-lg">All Day</div>
          <div className="flex items-center  p-2 pl-6">
            <p className="grow text-gray-500">8:00am - 12:00am (Midnight)</p>
            <p className="font-medium">$2000</p>
          </div>
          <div className="bg-gray-100 p-2 text-lg">Hourly</div>
          <div className="flex items-center p-2 pl-6">
            <p className="grow text-gray-500">Sunday - Thursday</p>
            <p className="font-medium">$50/hr</p>
          </div>
          <div className="flex items-center p-2 pl-6">
            <p className="grow text-gray-500">Friday</p>
            <p className="font-medium">$150/hr</p>
          </div>
          <div className="flex items-center p-2 pl-6">
            <p className="grow text-gray-500">Saturday</p>
            <p className="font-medium">$200/hr</p>
          </div>
        </div>
        <InfoCard>
          Setup and cleanup time is included in your billable hours.
        </InfoCard>

        <SubSectionTitle>Frequently Asked Questions</SubSectionTitle>
        <ReservationsFAQ />
      </div>
      <div className="hidden lg:block">
        <Image
          src={IMAGES.clubhouse}
          width={1920}
          height={1080}
          alt="Portrait of club members"
          className="aspect-video rounded-3xl border-4 border-white object-cover object-top"
        />
      </div>
    </section>
  );
};
