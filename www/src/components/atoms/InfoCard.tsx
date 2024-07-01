import { cva } from "class-variance-authority";
import {
  type BaseIconProps,
  InformationCircleIcon,
  ExclamationCircleIcon,
} from "../icons";
import { twMerge } from "tailwind-merge";

type InfoCardVariant = "info" | "important";

type InfoCardProps = {
  variant: InfoCardVariant;
  className?: string;
  children?: React.ReactNode;
};

const iconStyles = cva("", {
  variants: {
    variant: {
      info: ["stroke-gray-500"],
      important: ["stroke-violet-600"],
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const containerStyles = cva("", {
  variants: {
    variant: {
      info: ["border-gray-300"],
      important: ["border-violet-600"],
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const iconByVariant: Record<
  InfoCardVariant,
  (props: BaseIconProps) => JSX.Element
> = {
  info: InformationCircleIcon,
  important: ExclamationCircleIcon,
};

export const InfoCard = (props: InfoCardProps) => {
  const { variant, className, children } = props;
  const Icon = iconByVariant[variant];
  return (
    <div
      className={twMerge(
        containerStyles({ variant }),
        "flex items-center gap-3 rounded-lg border p-3",
      )}
    >
      <div className="shirnk-0">
        <Icon className={twMerge(iconStyles({ variant }), "size-6")} />
      </div>

      {children}
    </div>
  );
};
