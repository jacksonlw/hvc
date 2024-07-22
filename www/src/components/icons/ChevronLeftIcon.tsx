import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const ChevronLeftIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </BaseIcon>
);
