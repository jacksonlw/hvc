import { twMerge } from "tailwind-merge";

export type BaseIconProps = React.SVGAttributes<SVGElement>;

export const BaseIcon = (props: BaseIconProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={twMerge("size-5 stroke-current stroke-[2]", className)}
      {...rest}
    ></svg>
  );
};
