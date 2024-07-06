import { env } from "~/env";
import {
  AboutUsSection,
  EventsSection,
  LandingHeader,
  ReservationsSection,
  SupportingContent,
} from "~/features/landing";
import { readCalendar } from "~/lib/calendar";

export default async function HomePage() {
  const events = await readCalendar(env.GOOGLE_EVENTS_CALENDAR_ID);

  return (
    <>
      <div className="mb-16 grid grid-cols-2 gap-6">
        <div>
          <LandingHeader className="min-h-dvh pb-14" />
          <AboutUsSection className="mb-32" />
          <EventsSection className="mb-32" events={events} />
          <ReservationsSection />
        </div>
        <div>
          <div className="sticky top-14 flex min-h-[calc(100dvh-3.5rem)] items-center">
            <SupportingContent />
          </div>
        </div>
      </div>
    </>
  );
}
