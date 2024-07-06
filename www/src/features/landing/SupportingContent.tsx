"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useAtom } from "jotai";
import { type ReactNode } from "react";
import { IMAGES, SECTIONS } from "~/constants";
import { sectionOffsetsAtom } from "~/store/sectionOffsetsAtom";
import Image from "next/image";

type FadingContentProps = {
  offset: number;
  nextOffset: number;
  children?: ReactNode;
  className?: string;
};

const FadingContent = (props: FadingContentProps) => {
  const { offset, nextOffset, children, className } = props;

  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [offset - 150, offset, nextOffset - 150, nextOffset],
    [0, 1, 1, 0],
  );
  return (
    <motion.div
      className="absolute right-0 top-1/2 w-4/5 -translate-y-1/2"
      style={{ opacity }}
    >
      {children}
    </motion.div>
  );
};

export const SupportingContent = () => {
  const [sectionOffsets] = useAtom(sectionOffsetsAtom);
  const {
    [SECTIONS.about.id]: aboutOffset = 0,
    [SECTIONS.events.id]: eventsOffset = 0,
    [SECTIONS.reserve.id]: reserveOffset = 0,
    [SECTIONS.contact.id]: contactOffset = 0,
  } = sectionOffsets;

  return (
    <>
      <FadingContent offset={0} nextOffset={aboutOffset}>
        <Image
          src={IMAGES.homeBackground}
          width={1920}
          height={1080}
          alt="Portrait of Hayward, CA"
          className="aspect-square rounded-full border-4 border-white object-cover object-top ring-4 ring-violet-600"
        />
      </FadingContent>
      <FadingContent offset={aboutOffset} nextOffset={eventsOffset}>
        <div className="flex flex-col gap-8">
          <Image
            src={IMAGES.members}
            width={1920}
            height={1080}
            alt="Portrait of Hayward, CA"
            className="aspect-video rounded-xl border-4 border-white object-cover object-top ring-4 ring-gray-300"
          />
          <Image
            src={IMAGES.clubhouse}
            width={1920}
            height={1080}
            alt="Portrait of Hayward, CA"
            className="aspect-video rounded-xl border-4 border-white object-cover object-top ring-4 ring-gray-300"
          />
        </div>
      </FadingContent>
      <FadingContent offset={eventsOffset} nextOffset={reserveOffset}>
        <Image
          src={IMAGES.homeBackground}
          width={1920}
          height={1080}
          alt="Portrait of Hayward, CA"
          className="aspect-square rounded-full border-4 border-white object-cover object-top ring-4 ring-violet-600"
        />
      </FadingContent>
      <FadingContent offset={reserveOffset} nextOffset={Infinity}>
        <Image
          src={IMAGES.homeBackground}
          width={1920}
          height={1080}
          alt="Portrait of Hayward, CA"
          className="aspect-square rounded-full border-4 border-white object-cover object-top ring-4 ring-violet-600"
        />
      </FadingContent>
    </>
  );
};
