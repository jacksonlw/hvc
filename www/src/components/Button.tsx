import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { SpinningLoader } from "./loaders";

type ButtonVariant = "solid" | "outline";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  isLoading?: boolean;
};

const button = cva("", {
  variants: {
    variant: {
      solid: ["bg-violet-600", "text-white", "border-violet-600"],
      outline: ["bg-transparent", "text-violet-600", "border-violet-600"],
    },
    isLoading: {
      true: ["cursor-not-allowed"],
      false: ["cursor-pointer"],
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      isLoading: false,
      className: [
        "hover:bg-violet-700",
        "hover:border-violet-700",
        "active:bg-violet-500",
      ],
    },
    {
      variant: "outline",
      isLoading: false,
      className: [
        "hover:bg-violet-100",
        "hover:border-violet-600",
        "active:bg-violet-200",
      ],
    },
  ],
  defaultVariants: {
    variant: "solid",
    isLoading: false,
  },
});

const loader = cva("", {
  variants: {
    variant: {
      solid: ["fill-white"],
      outline: ["fill-violet-600"],
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export const Button = (props: ButtonProps) => {
  const { className, variant, children, isLoading, ...rest } = props;

  return (
    <button
      className={twMerge(
        "relative flex items-center justify-center rounded-xl border border-b-2 px-4 py-2 font-medium transition-colors duration-100",
        button({ variant, isLoading }),
        isLoading ? "text-opacity-0" : "",
        className,
      )}
      {...rest}
    >
      {children}
      {isLoading ? (
        <SpinningLoader
          className={twMerge(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            loader({ variant }),
          )}
        />
      ) : (
        <></>
      )}
    </button>
  );
};
