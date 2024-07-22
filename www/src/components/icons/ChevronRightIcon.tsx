import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const ChevronRightIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </BaseIcon>
);
