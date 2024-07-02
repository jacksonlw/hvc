import Image from "next/image";
import {
  AboutUsSection,
  EventsSection,
  LandingHeader,
  ReservationsSection,
} from "~/features/landing";
import { IMAGES } from "~/constants";

export default function HomePage() {
  return (
    <>
      <div className="mb-16 grid grid-cols-2 gap-6">
        <div>
          <LandingHeader className="min-h-dvh" />
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
          <div className="sticky top-0 flex min-h-dvh items-center">
            <div className="flex grow items-center justify-center">
              <Image
                src={IMAGES.homeBackground}
                width={1920}
                height={1080}
                alt="Portrait of Hayward, CA"
                className="aspect-square w-3/4 rounded-full border-4 border-white object-cover object-top ring-4 ring-violet-600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
