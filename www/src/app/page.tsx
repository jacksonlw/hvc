import { env } from "~/env";
import {
  AboutUsSection,
  EventsSection,
  LandingHeader,
  ReservationsSection,
} from "~/features/landing";
import { readCalendar } from "~/lib/calendar";
import Image from "next/image";
import { IMAGES } from "~/constants";
import { ContactUsSection } from "~/features/landing/ContactSection";
import { ContactForm } from "~/features/contact/ContactForm";

export default async function HomePage() {
  const events = await readCalendar(env.GOOGLE_EVENTS_CALENDAR_ID);

  return (
    <>
      <div className="mb-32 grid grid-cols-2 gap-x-12 gap-y-32">
        <LandingHeader className="pb-navOffset min-h-[calc(100dvh-theme(spacing.navOffset))]" />
        <div className="pb-navOffset flex items-center justify-end">
          <Image
            src={IMAGES.homeBackground}
            width={1920}
            height={1080}
            alt="Portrait of Hayward, CA"
            className="relative aspect-square rounded-full border-8 border-violet-200 object-cover object-top ring-8 ring-violet-500"
          />
        </div>
        <AboutUsSection className="mb-32" />
        <div className="">
          <Image
            src={IMAGES.members}
            width={1920}
            height={1080}
            alt="Portrait of club members"
            className="aspect-video rounded-3xl border-4 border-white object-cover object-top"
          />
        </div>
        <EventsSection className="col-span-full mb-32" events={events} />
        <ReservationsSection />
        <div className="">
          <Image
            src={IMAGES.clubhouse}
            width={1920}
            height={1080}
            alt="Portrait of club members"
            className="aspect-video rounded-3xl border-4 border-white object-cover object-top"
          />
        </div>
        <ContactUsSection className="min-h-[70dvh]" />
        <div className="flex justify-end">
          <ContactForm className="h-fit w-[90%]" />
        </div>
      </div>
    </>
  );
}
