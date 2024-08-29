import {
  type InputHTMLAttributes,
  type HTMLAttributes,
  forwardRef,
  type ForwardedRef,
} from "react";
import { twMerge } from "tailwind-merge";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  HTMLAttributes<HTMLTextAreaElement> & {
    multiline?: boolean;
  };

export const TextField = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  TextFieldProps
>(function TextField(props, forwardedRef) {
  const { className, multiline, ...rest } = props;

  const mergedClasses = twMerge(
    "w-full rounded-xl border border-gray-400 bg-gray-50 p-2.5 ring-violet-300 transition-[border-color,background-color] placeholder:text-gray-500 hover:border-gray-600 focus:border-violet-600 focus:bg-violet-25 focus:outline-none focus:ring-2 focus:placeholder:text-gray-500",
    multiline && "h-32 resize-none",
    className,
  );

  if (multiline) {
    return (
      <textarea
        ref={forwardedRef as ForwardedRef<HTMLTextAreaElement>}
        className={mergedClasses}
        {...rest}
      />
    );
  }

  return (
    <input
      ref={forwardedRef as ForwardedRef<HTMLInputElement>}
      type="text"
      className={mergedClasses}
      {...rest}
    />
  );
});
