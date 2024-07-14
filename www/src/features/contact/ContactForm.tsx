"use client";
import { useCallback, useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, TextField, Label, Select } from "~/components";
import { SubSectionTitle } from "~/features/content";
import { PaperAirplaneIcon } from "~/components/icons";
import { sendMail } from "~/lib/contact";
import { ContactStatusMessage } from "./ContactStatusMessage";
import { CONTACT_SUBJECTS } from "~/constants";

type ContactFormProps = {
  className?: string;
};

export const ContactForm = (props: ContactFormProps) => {
  const { className } = props;

  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [nameValue, setNameValue] = useState("Jackson Lawrence ");
  const [emailValue, setEmailValue] = useState("jlawrence1787@gmail.com");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const validateValues = useCallback(() => {
    if (
      !nameValue.trim() ||
      !emailValue.trim() ||
      !subjectValue.trim() ||
      !messageValue.trim()
    ) {
      return false;
    }

    return true;
  }, [nameValue, emailValue, subjectValue, messageValue]);

  const resetValues = useCallback(() => {
    setNameValue("");
    setEmailValue("");
    setSubjectValue("");
    setMessageValue("");
  }, [setNameValue, setEmailValue, setSubjectValue, setMessageValue]);

  const handleSubmit = useCallback(async () => {
    const isValid = validateValues();
    if (!isValid) {
      setIsSuccess(false);
      setStatusMessage("You must fill out all fields");
      return;
    }

    setIsLoading(true);
    setIsSuccess(null);

    const res = await sendMail(
      nameValue,
      subjectValue,
      emailValue,
      messageValue,
    );

    setStatusMessage(res.message);
    setIsLoading(false);
    setIsSuccess(res.success);

    if (res.success) {
      resetValues();
    }
  }, [resetValues, nameValue, subjectValue, emailValue, messageValue]);

  return (
    <form
      className={twMerge(
        "grid gap-4 rounded-xl border border-gray-400 p-8",
        className,
      )}
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit();
      }}
      noValidate
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
        <Label htmlFor={subjectId}>Subject</Label>
        <Select
          id={subjectId}
          value={subjectValue}
          onChange={(value) => {
            setSubjectValue(value);
          }}
          items={CONTACT_SUBJECTS}
          placeholder="Select a subject"
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
        <div className="grow">
          {isSuccess !== null ? (
            <ContactStatusMessage
              isSuccess={isSuccess}
              message={statusMessage}
            />
          ) : (
            <></>
          )}
        </div>
        <Button isLoading={isLoading}>
          <PaperAirplaneIcon className="mr-2 -rotate-45" />
          Send Message
        </Button>
      </div>
    </form>
  );
};
