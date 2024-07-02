"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { type Section } from "~/types";
import { useActiveSection } from "~/hooks";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Heading } from "~/components";

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
        "group z-10 border-b border-white bg-white transition-[border-color,shadow]",
        hasScrolled && "border-slate-300",
        className,
      )}
    >
      <div className="container flex h-full items-center gap-1">
        <div
          className={twMerge(
            "w-0 transition-[width] duration-200",
            hasScrolled && "w-14",
          )}
        >
          <Heading
            className={twMerge(
              "pointer-events-none -translate-x-4 opacity-0 transition-[opacity,transform] duration-200",
              hasScrolled && "pointer-events-auto translate-x-0 opacity-100",
            )}
          >
            H&V
          </Heading>
        </div>
        {sections.map(({ title, id }) => {
          const isActive = activeSectionID === id;
          return (
            <Link
              key={id}
              href={`#${id}`}
              className={twMerge(
                "relative flex h-full items-center justify-center px-3 text-slate-500 first:-ml-3 hover:text-slate-900",
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
      </div>
    </nav>
  );
};
