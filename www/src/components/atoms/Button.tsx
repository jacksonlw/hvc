import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

type ButtonVariant = "solid" | "outline";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const button = cva("", {
  variants: {
    variant: {
      solid: ["bg-violet-600", "hover:bg-violet-700", "text-white"],
      outline: [
        "bg-transparent",
        "hover:bg-violet-600",
        "hover:text-white",
        "text-violet-600",
        "border",
        "border-b-2",
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
        button({ variant }),
        "flex items-center justify-center rounded-lg px-4 py-3 transition-colors duration-100",
        className,
      )}
      {...rest}
    />
  );
};
