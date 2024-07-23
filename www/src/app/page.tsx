import { env } from "~/env";
import {
  AboutUsSection,
  EventsSection,
  LandingHeader,
} from "~/features/landing";
import { listTenEvents } from "~/lib/calendar";
import Image from "next/image";
import { IMAGE_URLS } from "~/constants";
import { ContactSection, ContactForm } from "~/features/contact";
import { ReserveSection } from "~/features/reserve";

export default async function HomePage() {
  const events = await listTenEvents(env.GOOGLE_EVENTS_CALENDAR_ID);

  return (
    <div className="mb-16 grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2 xl:gap-x-16">
      <LandingHeader className="min-h-[calc(100svh-theme(spacing.navOffset))] pb-navOffset" />
      <div className="hidden items-center justify-end pb-navOffset lg:flex">
        <Image
          src={IMAGE_URLS.homeBackground}
          width={1920}
          height={1080}
          alt="Portrait of Hayward, CA"
          className="relative aspect-square rounded-full border-8 border-violet-200 object-cover object-top ring-8 ring-violet-500"
        />
      </div>
      <AboutUsSection />
      <div className="">
        <Image
          src={IMAGE_URLS.members}
          width={1920}
          height={1080}
          alt="Portrait of club members"
          className="aspect-video rounded-3xl border-4 border-white object-cover object-top"
        />
      </div>
      <EventsSection className="col-span-full" events={events} />
      <ReserveSection className="col-span-full" />
      <ContactSection className="lg:min-h-[80svh]" />
      <div className="flex">
        <ContactForm className="h-fit w-full" />
      </div>
    </div>
  );
}

export const revalidate = 3600;
