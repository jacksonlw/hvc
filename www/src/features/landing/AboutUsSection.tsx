"use client";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";
import { useUpdateSectionOffset } from "~/hooks";
import { PHONE_NUMBER, SECTIONS } from "~/constants";
import { SectionTitle, SubSectionTitle } from "~/features/content";
import { InfoCard, TextLink } from "~/components";
import * as Accordion from "@radix-ui/react-accordion";
import { PlusIcon } from "~/icons";

type AboutUsSectionProps = {
  className?: string;
};

export const AboutUsSection = (props: AboutUsSectionProps) => {
  const { className } = props;
  const ref = useRef<HTMLDivElement>(null);
  const id = SECTIONS.about.id;

  useUpdateSectionOffset(id, ref);

  return (
    <section
      className={twMerge("relative leading-relaxed [&>p]:mb-4", className)}
      ref={ref}
    >
      <div className="absolute -top-24" id={id} />
      <SectionTitle>About Us</SectionTitle>

      <p>
        The Hill & Valley Club is a non-profit organization that was formed in
        1910. We are a member of the General Federation of Women&apos;s Clubs
        and the California Federation of Women&apos;s Club.
      </p>
      <p>
        We work each year to raise money for various charities in the community
        as well as funding several scholarships for our local high schools and
        the Chabot College graduating nurses.
      </p>

      <InfoCard variant="important">
        <p>
          Interseted in becoming a member? Call us at{" "}
          <span className="text-violet-600">{PHONE_NUMBER}</span> or use our{" "}
          <TextLink href={`/#${SECTIONS.contact.id}`}>
            contact form below
          </TextLink>
        </p>
      </InfoCard>

      <SubSectionTitle>History</SubSectionTitle>

      <p className="!mb-2">
        Hill and Valley was established when Mrs. J. Allen Park brought together
        women in the Hayward, Castro Valley, San Lorenzo, Fremont, Newark areas
        with the idea of forming a Federated Women&apos;s Club. Mrs. Park was
        certain that women could accomplish much in the Federation structure.
        Federation had been started in the eastern part of the country in the
        1800&apos;s when women tried to better themselves, their families and
        their communities.
      </p>

      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="history">
          <Accordion.Header>
            <Accordion.Trigger className="group -ml-2 flex items-center gap-1 p-2 text-violet-600 underline hover:text-violet-500">
              <p className="group-data-[sate=open]:content-[Close]">
                Read more
              </p>
              <PlusIcon className="stroke-2 transition-[transform] duration-200 group-data-[state=open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="[&>p]:mb-4">
            <p>
              A group of 250 members began the Hill & Valley Women&apos;s club
              in 1910 becoming a part of the Alameda and State Federations.
              Deciding dues, meeting places, officers, elections and by-laws
              were all approved in March 1910. They became a part of the
              National Federation in 1912. Strobridge, Gading, Ruus, Smaley,
              Harder, Oakes, Winton, Walpert, Garin and Moreau were some of the
              first members of Hill & Valley Club.
            </p>

            <p>
              Over the years Hill and Valley gave support to National and
              Regional areas of concern: Red Cross, League of Nations, child
              labor laws, the blind individual&apos;s white cane, Redwood Grove
              in Humboldt County, and much support was given to city government,
              education, outreach and conservation.
            </p>

            <p>
              In the early years, Mrs. Park&apos;s home was used for committee
              meetings. Hayward historical landmark buildings were made
              available to the club for meager rent. It was soon decided that a
              building fund would be started for a clubhouse. Building was
              postponed until 1952 because of WWII. The cottage was added in
              1963.
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
};
