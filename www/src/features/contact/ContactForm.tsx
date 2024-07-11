"use client";
import { useCallback, useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, TextField, Label } from "~/components";
import { SubSectionTitle } from "~/features/content";
import { PaperAirplaneIcon, XCircleIcon } from "~/components/icons";
import { sendMail } from "~/lib/mail";
import { CheckCircleIcon } from "~/components/icons/CheckCircleIcon";

type ContactFormProps = {
  className?: string;
};

const displayMessage = (isSuccess: boolean | null) => {
  const commonClassName =
    "grow outline-none flex items-center gap-2 font-medium";

  switch (isSuccess) {
    case true:
      return (
        <p className={twMerge(commonClassName, "text-green-600")}>
          <CheckCircleIcon className="size-6" />
          Successfully sent your message
        </p>
      );
    case false:
      return (
        <p className={twMerge(commonClassName, "text-red-600")}>
          <XCircleIcon className="size-6" />
          Failed to send your message
        </p>
      );
    default:
      return <></>;
  }
};

export const ContactForm = (props: ContactFormProps) => {
  const { className } = props;

  const nameId = useId();
  const emailId = useId();
  const interestId = useId();
  const messageId = useId();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [interestValue, setInterestValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    setIsSuccess(null);

    const success = await sendMail(nameValue, emailValue, messageValue);

    setIsLoading(false);
    setIsSuccess(success);

    if (success) {
      resetValues();
    }
  }, [nameValue, emailValue, messageValue]);

  const resetValues = () => {
    setNameValue("");
    setEmailValue("");
    setInterestValue("");
    setMessageValue("");
  };

  return (
    <div
      className={twMerge(
        "grid gap-4 rounded-xl border border-gray-400 p-8",
        className,
      )}
    >
      <SubSectionTitle className="my-0 mb-2 text-xl">
        Send Us a Message
      </SubSectionTitle>
      <div>
        <Label htmlFor={nameId}>Name</Label>
        <TextField
          id={nameId}
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.currentTarget.value);
          }}
          placeholder="Jane Doe"
        />
      </div>
      <div>
        <Label htmlFor={emailId}>Email</Label>
        <TextField
          id={emailId}
          type="text"
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.currentTarget.value);
          }}
          placeholder="janedoe@example.com"
        />
      </div>
      <div>
        <Label htmlFor={messageId}>Message</Label>
        <TextField
          id={messageId}
          type="text"
          multiline
          value={messageValue}
          onChange={(e) => {
            setMessageValue(e.currentTarget.value);
          }}
          placeholder="Enter your message"
        />
      </div>
      <div className="mt-2 flex items-center">
        <div className="grow">{displayMessage(isSuccess)}</div>

        <Button
          onClick={() => {
            void handleSubmit();
          }}
          isLoading={isLoading}
        >
          <PaperAirplaneIcon className="mr-2 -rotate-45" />
          Send Message
        </Button>
      </div>
    </div>
  );
};
