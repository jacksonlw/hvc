"use client";
import { TextLink } from "~/components";

type FooterProps = {
  className?: string;
};

export const Footer = (props: FooterProps) => {
  return (
    <footer className="border-t border-gray-300 py-6">
      <div className="container flex items-center">
        <p className="grow">
          Hill & Valley Club &copy; {new Date().getFullYear()}
        </p>
        <TextLink href="/meetings#" scroll={false}>
          Club Meetings
        </TextLink>
      </div>
    </footer>
  );
};
