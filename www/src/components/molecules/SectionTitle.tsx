import { twMerge } from "tailwind-merge";
import { Heading, type HeadingProps } from "../atoms";

export const SectionTitle = (props: HeadingProps) => {
  const { className, ...rest } = props;
  return (
    <Heading
      className={twMerge("mb-6 text-3xl", className)}
      as="h2"
      {...rest}
    />
  );
};
