import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type TextLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
  };

export const TextLink = (props: TextLinkProps) => {
  const { className, ...rest } = props;
  return (
    <Link
      className={twMerge(
        "text-violet-600 underline hover:text-violet-500 active:text-violet-400",
        className,
      )}
      {...rest}
    />
  );
};
