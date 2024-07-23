"use client";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";
import { useUpdateSectionOffset } from "~/hooks";
import { PHONE_NUMBER, PHONE_NUMBER_LINK, SECTIONS } from "~/constants";
import { ContactForm } from "./ContactForm";
import { SectionTitle } from "../content";
import { TextLink } from "~/components";

type ContactSectionProps = {
  className?: string;
};

export const ContactSection = (props: ContactSectionProps) => {
  const { className } = props;
  const ref = useRef<HTMLDivElement>(null);
  const id = SECTIONS.contact.id;

  useUpdateSectionOffset(id, ref);

  return (
    <section
      className={twMerge(
        "relative grid grid-cols-1 gap-x-8 leading-relaxed lg:grid-cols-2 xl:gap-x-16",
        className,
      )}
      ref={ref}
    >
      <div className="absolute -top-24" id={id} />
      <div className="col-span-full">
        <SectionTitle>Contact Us</SectionTitle>
      </div>

      <div className="mb-8 lg:mb-0 [&>p]:mb-4">
        <p>
          Contact us regarding any questions about becoming a member, reserving
          our hall, or any other inquiries you may have.
        </p>

        <p>
          You can also reach us by phone at{" "}
          <TextLink href={PHONE_NUMBER_LINK} className="text-violet-600">
            {PHONE_NUMBER}
          </TextLink>
        </p>
      </div>
      <ContactForm className="h-fit w-full" />
    </section>
  );
};
