import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

type ButtonVariant = "solid" | "outline";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const button = cva("", {
  variants: {
    variant: {
      solid: [
        "bg-violet-600",
        "hover:bg-violet-700",
        "text-white",
        "border-violet-800",
      ],
      outline: [
        "bg-transparent",
        "hover:bg-violet-100",
        "hover:text-violet-700",
        "text-violet-600",
        "border-violet-600",
      ],
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export const Button = (props: ButtonProps) => {
  const { className, variant, ...rest } = props;

  return (
    <button
      className={twMerge(
        "flex items-center justify-center rounded-xl border border-b-2 px-4 py-2.5 font-medium transition-colors duration-100",
        button({ variant }),
        className,
      )}
      {...rest}
    />
  );
};
