import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const ArrowLeftIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </BaseIcon>
);
