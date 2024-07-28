import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type EmbedPDFProps = HTMLAttributes<HTMLEmbedElement> & {
  url: string;
};

export const EmbedPDF = (props: EmbedPDFProps) => {
  const { className, url, ...rest } = props;

  return (
    <embed
      src={url}
      className={twMerge(
        "h-full w-full rounded-lg border-2 border-gray-300 lg:border-8",
        className,
      )}
      {...rest}
    />
  );
};
