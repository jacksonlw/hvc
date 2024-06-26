import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AboutUsSection } from "~/components/organisms";
import { images } from "~/constants";

const navLinks = [
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
];

export default function HomePage() {
  return (
    <main className="container mx-auto min-h-dvh">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-3">
          <div className="flex min-h-dvh flex-col justify-center">
            <h1 className="mb-2 text-5xl font-semibold text-gray-900">
              Hill & Valley Club
            </h1>
            <p className="mb-24 text-xl text-gray-500">Hayward, CA</p>
            <AboutUsSection />
          </div>
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
              {navLinks.map(({ name, href }, i) => (
                <Link
                  key={name}
                  href={href}
                  className={twMerge(
                    "flex items-center justify-end py-2 text-lg text-gray-500 hover:text-gray-900",
                    i === 0 && "text-violet-600 hover:text-violet-800",
                  )}
                >
                  <div
                    className={twMerge(
                      "mr-2 hidden h-[2px] w-4 bg-current",
                      i === 0 && "block",
                    )}
                  />
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
