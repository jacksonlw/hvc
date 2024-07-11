import { twMerge } from "tailwind-merge";
import { Heading, type HeadingProps } from "~/components";

export const SectionTitle = (props: HeadingProps) => {
  const { className, ...rest } = props;
  return (
    <Heading
      className={twMerge("mb-6 text-2xl md:text-3xl", className)}
      as="h2"
      {...rest}
    />
  );
};
