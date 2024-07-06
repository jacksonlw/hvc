import {
  AboutUsSection,
  EventsSection,
  LandingHeader,
  ReservationsSection,
  SupportingContent,
} from "~/features/landing";

export default function HomePage() {
  return (
    <>
      <div className="mb-16 grid grid-cols-2 gap-6">
        <div>
          <LandingHeader className="min-h-dvh pb-14" />
          <AboutUsSection className="mb-32" />
          <EventsSection
            className="mb-32"
            events={[
              {
                id: "1",
                name: "Test Event",
              },
              {
                id: "2",
                name: "Test Event",
              },
              {
                id: "3",
                name: "Test Event",
              },
              {
                id: "4",
                name: "Test Event",
              },
              {
                id: "5",
                name: "Test Event",
              },
            ]}
          />
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
