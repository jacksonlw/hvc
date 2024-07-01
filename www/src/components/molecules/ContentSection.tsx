import { twMerge } from "tailwind-merge";

type ContentSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const ContentSection = (props: ContentSectionProps) => {
  const { children, className } = props;
  return (
    <section className={twMerge("[&>p]:mb-4", className)}>{children}</section>
  );
};
