"use client";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
import { useUpdateSectionOffset } from "~/hooks";
import { PHONE_NUMBER, SECTIONS } from "~/constants";
import { SectionTitle } from "~/features/content";

type ContactUsSectionProps = {
  className?: string;
};

export const ContactUsSection = (props: ContactUsSectionProps) => {
  const { className } = props;
  const ref = useRef<HTMLDivElement>(null);
  const id = SECTIONS.contact.id;
  const [subjectValue, setSubjectValue] = useState("");

  useUpdateSectionOffset(id, ref);

  return (
    <section
      className={twMerge("relative leading-relaxed [&>p]:mb-4", className)}
      ref={ref}
    >
      <div className="absolute -top-24" id={id} />
      <SectionTitle>Contact Us</SectionTitle>

      <p>
        Contact us regarding any questions about becoming a member, reserving
        our hall, or any other inquiries you may have.
      </p>

      <p>
        You can also reach us by phone at{" "}
        <span className="text-violet-600">{PHONE_NUMBER}</span>
      </p>
    </section>
  );
};
