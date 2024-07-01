import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const ArrowUpRightIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </BaseIcon>
);
