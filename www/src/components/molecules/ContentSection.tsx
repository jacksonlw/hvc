import { twMerge } from "tailwind-merge";
import { Badge } from "../atoms";

type ContentSectionProps = {
  children: React.ReactNode;
  badgeTitle?: string;
  className?: string;
};

export const ContentSection = (props: ContentSectionProps) => {
  const { badgeTitle, children, className } = props;
  return (
    <section className={twMerge("[&>p]:mb-6", className)}>
      {badgeTitle ? <Badge className="mb-8">{badgeTitle}</Badge> : <></>}
      {children}
    </section>
  );
};
