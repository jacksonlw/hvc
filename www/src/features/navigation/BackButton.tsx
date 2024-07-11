"use client";
import { Button, type ButtonProps } from "~/components";

export const BackButton = (props: ButtonProps) => {
  return (
    <Button
      onClick={() => {
        window.history.back();
      }}
      {...props}
    />
  );
};
