import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type EmbedPDFProps = HTMLAttributes<HTMLDivElement> & {
  url: string;
};

export const EmbedPDF = (props: EmbedPDFProps) => {
  const { className, url, ...rest } = props;

  return (
    <div className={twMerge("", className)} {...rest}>
      <embed
        src={url}
        className="h-full w-full rounded-lg border-8 border-gray-300"
      />
    </div>
  );
};
