import * as Accordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";
import { PlusIcon } from "~/icons";
import { RESERVATIONS_FAQ } from "~/constants";

type ReservationsFAQProps = {
  className?: string;
};

export const ReservationsFAQ = (props: ReservationsFAQProps) => {
  const { className } = props;
  return (
    <Accordion.Root
      className={twMerge("", className)}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {RESERVATIONS_FAQ.map((item, i) => {
        const { question, answer } = item;

        return (
          <Accordion.Item
            key={item.question}
            className="border-b border-slate-300 last:border-b-0"
            value={item.question}
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center py-3 text-start">
                <p className="grow group-hover:text-violet-600">{question}</p>
                <PlusIcon className="origin-center stroke-black transition-[transform] duration-200 group-hover:stroke-violet-600 group-data-[state=open]:rotate-45" />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="select-none overflow-hidden data-[state=closed]:animate-radixAccordionSlideUp data-[state=open]:animate-radixAccordionSlideDown">
              <div className="pb-3 text-slate-500">{answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};
