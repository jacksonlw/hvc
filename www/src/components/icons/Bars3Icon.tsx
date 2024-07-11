import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const Bars3Icon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </BaseIcon>
);
