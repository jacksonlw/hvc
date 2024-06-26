import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const ChevronDownIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </BaseIcon>
);
