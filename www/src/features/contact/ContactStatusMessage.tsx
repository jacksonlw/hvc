import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { CheckCircleIcon, XCircleIcon } from "~/components/icons";

type ContactStatusMessageProps = {
  isSuccess: boolean | null;
  message: string;
};

const messageStyle = cva("", {
  variants: {
    isSuccess: {
      true: ["text-green-600"],
      false: ["text-red-600"],
    },
  },
});

export const ContactStatusMessage = (props: ContactStatusMessageProps) => {
  const { isSuccess, message } = props;

  const Icon = isSuccess ? CheckCircleIcon : XCircleIcon;

  return (
    <p
      className={twMerge(
        "flex grow items-center gap-2 font-medium outline-none",
        messageStyle({ isSuccess }),
      )}
    >
      <Icon className="size-6" />
      {message}
    </p>
  );
};
