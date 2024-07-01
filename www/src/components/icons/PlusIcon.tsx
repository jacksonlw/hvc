import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const PlusIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </BaseIcon>
);
