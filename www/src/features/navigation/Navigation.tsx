"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { type Section } from "~/types";
import { useActiveSection } from "~/hooks";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Heading } from "~/components";
import { NavigationMenu } from "./NavigationMenu";

type NavigationProps = {
  sections: Section[];
  className?: string;
};

export const Navigation = (props: NavigationProps) => {
  const { sections = [], className } = props;
  const activeSectionID = useActiveSection();
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(scrollY.get() > 0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setHasScrolled(y > 0);
  });

  return (
    <nav
      className={twMerge(
        "fixed left-0 top-0 z-10 h-navOffset w-full border-b border-white bg-white transition-[border-color,shadow]",
        hasScrolled && "border-gray-300",
        className,
      )}
    >
      <div className="container flex h-full items-center gap-1">
        <div className={twMerge("h-full w-14 transition-[width] duration-200")}>
          <Link
            href="/#"
            className="group flex h-full items-center"
            aria-label="Home"
          >
            <Heading className={twMerge("group-hover:text-violet-600")}>
              H&V
            </Heading>
          </Link>
        </div>
        {sections.map(({ title, id }) => {
          const isActive = activeSectionID === id;
          return (
            <Link
              key={id}
              href={`/#${id}`}
              className={twMerge(
                "relative hidden h-full items-center justify-center px-3 transition-[color] first:-ml-3 hover:text-violet-600 sm:flex",
                isActive && "text-violet-600 hover:text-violet-600",
              )}
            >
              {title}
              <div
                className={twMerge(
                  "absolute bottom-0 left-0 h-[2px] w-full bg-white transition-colors",
                  isActive && "bg-violet-600",
                )}
              />
            </Link>
          );
        })}
        <div className="grow" />
        <div className="block sm:hidden">
          <NavigationMenu sections={sections} />
        </div>
      </div>
    </nav>
  );
};
