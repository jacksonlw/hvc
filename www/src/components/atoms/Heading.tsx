import { twMerge } from "tailwind-merge";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = (props: HeadingProps) => {
  const { as = "h1", className, ...rest } = props;

  const Component = as;
  return (
    <Component
      className={twMerge("font-heading text-xl", className)}
      {...rest}
    />
  );
};
