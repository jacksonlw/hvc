import { type InputHTMLAttributes, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  HTMLAttributes<HTMLTextAreaElement> & {
    multiline?: boolean;
  };

export const TextField = (props: TextFieldProps) => {
  const { className, multiline, ...rest } = props;
  const Component = multiline ? "textarea" : "input";

  return (
    <Component
      type="text"
      className={twMerge(
        "focus:bg-violet-25 w-full rounded-xl border border-gray-400 bg-gray-50 p-2.5 transition-[border-color,background-color] placeholder:text-gray-500 focus:border-violet-600 focus:outline-none focus:placeholder:text-gray-500",
        multiline && "h-32 resize-none",
        className,
      )}
      {...rest}
    />
  );
};
