"use client";
import { TextLink } from "~/components";

type FooterProps = {
  className?: string;
};

export const Footer = (props: FooterProps) => {
  return (
    <footer className="border-t border-gray-300 py-6">
      <div className="container flex items-center gap-4">
        <p className="grow">
          Hill & Valley Club &copy; {new Date().getFullYear()}
        </p>
        <TextLink href="/c/meetings">Club Meetings</TextLink>
      </div>
    </footer>
  );
};
