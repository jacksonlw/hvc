import { twMerge } from "tailwind-merge";
import { Heading, type HeadingProps } from "~/components";

export const SubSectionTitle = (props: HeadingProps) => {
  const { className, ...rest } = props;

  return (
    <Heading
      as="h3"
      className={twMerge("mb-4 mt-8 text-xl md:text-2xl", className)}
      {...rest}
    />
  );
};
