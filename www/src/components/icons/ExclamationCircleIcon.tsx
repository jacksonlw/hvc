import { BaseIcon, type BaseIconProps } from "./BaseIcon";

export const ExclamationCircleIcon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    />
  </BaseIcon>
);
