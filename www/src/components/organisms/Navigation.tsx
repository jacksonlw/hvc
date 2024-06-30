import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { type NavigationLink } from "~/types";

const navLinks = [];

type NavigationProps = {
  links: NavigationLink[];
};

export const Navigation = (props: NavigationProps) => {
  const { links = [] } = props;
  return (
    <div>
      {links.map(({ name, href }, i) => (
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
  );
};
