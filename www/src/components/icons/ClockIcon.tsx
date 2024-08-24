import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const ClockIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </BaseIcon>
);
