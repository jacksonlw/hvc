"use client";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components";
import { Label } from "~/components/Label";
import { TextField } from "~/components/TextField";
import { SubSectionTitle } from "~/features/content";

type ContactFormProps = {
  className?: string;
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

  return (
    <div
      className={twMerge(
        "grid max-w-[600px] gap-4 rounded-xl border border-gray-400 p-8",
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
      <div className="mt-2 flex justify-end">
        <Button>Send Message</Button>
      </div>
    </div>
  );
};
