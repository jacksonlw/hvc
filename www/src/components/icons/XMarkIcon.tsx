import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const XMarkIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </BaseIcon>
);
