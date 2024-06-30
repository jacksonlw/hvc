import Image from "next/image";
import { Button, Heading } from "~/components/atoms";
import { ArrowDownIcon } from "~/components/icons";
import { LocationIcon } from "~/components/icons/LocationIcon";
import { AboutUsSection } from "~/components/organisms";
import { Navigation } from "~/components/organisms/Navigation";
import { images } from "~/constants";

export default function HomePage() {
  return (
    <main className="container mx-auto min-h-dvh">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-3">
          <div className="flex min-h-dvh flex-col justify-center">
            <Heading className="mb-4 text-5xl">Hill & Valley Club</Heading>
            <p className="mb-8 text-xl text-gray-700">
              Empowering women and enriching communities in Hayward, CA since
              1910
            </p>
            <div className="flex gap-2">
              <Button className="w-fit">
                Reserve space for an event
                <ArrowDownIcon className="ml-2" />
              </Button>
              <Button variant="outline">
                <LocationIcon className="mr-2" />
                1808 B Street, Hayward, CA 94541
              </Button>
            </div>
          </div>
          <AboutUsSection />
          <div className="h-[6000px]"></div>
        </div>
        <div className="col-span-4">
          <div className="sticky top-0 flex min-h-dvh items-center">
            <div className="flex grow items-center justify-center">
              <Image
                src={images.homeBackground}
                width={1920}
                height={1080}
                alt="Portrait of Hayward, CA"
                className="aspect-square w-3/4 rounded-full border-4 border-white object-cover object-top ring-4 ring-violet-600"
              />
            </div>
            <div className="grid w-32 ">
              <Navigation
                links={[
                  {
                    name: "About Us",
                    href: "#about",
                  },
                  {
                    name: "Reservations",
                    href: "#reservations",
                  },
                  {
                    name: "Events",
                    href: "#events",
                  },
                  {
                    name: "Contact",
                    href: "#contact",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
