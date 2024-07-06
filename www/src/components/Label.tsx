import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type LabelProps = HTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
};

export const Label = (props: LabelProps) => {
  const { className, ...rest } = props;
  return <label className={twMerge("mb-1 block", className)} {...rest} />;
};
