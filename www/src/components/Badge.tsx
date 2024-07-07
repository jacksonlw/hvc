import { twMerge } from "tailwind-merge";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export const Badge = (props: BadgeProps) => {
  const { className } = props;

  return (
    <span
      className={twMerge(
        "inline-block rounded-lg bg-violet-100 p-2 text-sm font-medium uppercase text-violet-600",
        className,
      )}
    >
      {props.children}
    </span>
  );
};
