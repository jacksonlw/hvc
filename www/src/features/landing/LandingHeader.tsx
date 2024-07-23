import { twMerge } from "tailwind-merge";
import { Button, Heading } from "~/components";
import { CalendarIcon, LocationIcon } from "../../components/icons";
import Link from "next/link";
import { CLUBHOUSE_MAP_LOCATION_URL, SECTIONS } from "~/constants";

type LandingHeaderProps = {
  className?: string;
};

export const LandingHeader = (props: LandingHeaderProps) => {
  const { className } = props;
  return (
    <div className={twMerge("flex flex-col justify-center", className)}>
      <Heading className="mb-4 text-4xl md:text-5xl">
        Hill & Valley Club
      </Heading>
      <p className="mb-8 text-lg text-gray-700 md:text-xl">
        Empowering women and enriching communities since 1910
      </p>
      <div className="flex flex-row flex-wrap gap-2">
        <Link href={`/#${SECTIONS.events.id}`}>
          <Button className="w-fit py-3">
            <CalendarIcon className="mr-2 size-6" />
            Upcoming Events
          </Button>
        </Link>

        <Link href={CLUBHOUSE_MAP_LOCATION_URL} target="_blank">
          <Button variant="outline" className="py-3">
            <LocationIcon className="mr-2 size-6" />
            1808 B Street, Hayward, CA
          </Button>
        </Link>
      </div>
    </div>
  );
};
