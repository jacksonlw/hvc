"use client";
import { useAtom } from "jotai";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { sectionOffsetsAtom } from "~/store/sectionOffsetsAtom";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { type Section } from "~/types";

type NavigationProps = {
  sections: Section[];
  className?: string;
};

export const Navigation = (props: NavigationProps) => {
  const { sections = [], className } = props;

  const [sectionOffsets] = useAtom(sectionOffsetsAtom);

  const { scrollY } = useScroll();

  const [activeSectionID, setActiveSectionID] = useState<string | null>(null);

  const updateActiveSection = useCallback(
    (y: number) => {
      const offsetsArr = Object.keys(sectionOffsets).map((key) => {
        return { id: key, value: sectionOffsets[key]! };
      });

      offsetsArr.sort((a, b) => a.value - b.value);

      offsetsArr.forEach((o, i) => {
        const buf = 250;
        const nextOffset = offsetsArr[i + 1];

        if (i === 0 && y < o.value - buf) setActiveSectionID(null);

        if (y > o.value - buf) {
          if (!nextOffset) {
            setActiveSectionID(o.id);
          } else if (y < nextOffset.value - buf) {
            setActiveSectionID(o.id);
          }
        }
      });
    },
    [sectionOffsets, setActiveSectionID],
  );

  useEffect(() => {
    updateActiveSection(scrollY.get());
  }, [updateActiveSection, scrollY]);

  useMotionValueEvent(scrollY, "change", (y) => {
    updateActiveSection(y);
  });

  return (
    <nav className={twMerge("flex flex-col justify-center", className)}>
      {sections.map(({ title, id }) => {
        const isActive = activeSectionID === id;
        return (
          <Link
            key={id}
            href={`#${id}`}
            className={twMerge(
              "flex items-center justify-start py-2 text-lg text-gray-600 hover:text-gray-900",
              isActive && "text-violet-600 hover:text-violet-600",
            )}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};
