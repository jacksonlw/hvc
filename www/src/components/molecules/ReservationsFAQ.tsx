import * as Accordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";
import { RESERVATIONS_FAQ } from "~/constants";
import { PlusIcon } from "../icons";

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
        const isLast = i === RESERVATIONS_FAQ.length - 1;

        return (
          <Accordion.Item
            key={item.question}
            className="border-b border-gray-300 last:border-b-0"
            value={item.question}
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center py-3 text-start">
                <p className="grow transition-[color] duration-200 group-hover:text-violet-600">
                  {question}
                </p>
                <PlusIcon className="origin-center stroke-black transition-[transform,color] duration-200 group-hover:stroke-violet-600 group-data-[state=open]:rotate-45" />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="data-[state=open]:animate-radixAccordionSlideDown data-[state=closed]:animate-radixAccordionSlideUp select-none overflow-hidden">
              <div className="pb-3 text-gray-600">{answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};
