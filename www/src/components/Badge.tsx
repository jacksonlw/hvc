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
        "inline-block rounded-md bg-violet-100 px-3 py-1.5 font-medium text-violet-600",
        className,
      )}
    >
      {props.children}
    </span>
  );
};
