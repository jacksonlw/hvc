"use client";
import * as RSelect from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "./icons";
import { useMemo } from "react";

export type SelectItem = {
  label: string;
  value: string;
};

type SelectProps = {
  id?: string;
  placeholder?: string;
  items: SelectItem[];
  value?: string;
  onChange: (value: string) => void;
  triggerClassName?: string;
};

export const Select = (props: SelectProps) => {
  const { id, placeholder, triggerClassName, items, value, onChange } = props;
  const activeItem = useMemo(
    () => items.find((item) => item.value === value),
    [items, value],
  );

  return (
    <RSelect.Root defaultValue="empty" value={value} onValueChange={onChange}>
      <RSelect.Trigger
        id={id}
        className={twMerge(
          "flex w-full items-center justify-between rounded-xl border border-gray-400 bg-gray-50 p-2.5 ring-violet-300 transition-[border-color,background-color] hover:border-gray-600 focus:border-violet-600 focus:bg-violet-25 focus:outline-none focus:ring-2 data-[state=open]:border-violet-600 data-[state=open]:bg-violet-25 data-[state=open]:ring-2",
          triggerClassName,
        )}
      >
        <span
          className={twMerge(
            "pointer-events-none",
            !activeItem && "text-gray-500",
          )}
        >
          {activeItem?.label ?? placeholder}
        </span>
        <ChevronDownIcon />
      </RSelect.Trigger>
      <RSelect.Portal>
        <RSelect.Content
          position="popper"
          sideOffset={4}
          className="rounded-lg border border-gray-400 bg-white shadow-lg"
        >
          <RSelect.Viewport className="py-1">
            <RSelect.Group>
              {items.map(({ value, label }) => (
                <RSelect.Item
                  key={value}
                  value={value}
                  className="cursor-pointer px-4 py-2.5 outline-none data-[highlighted]:bg-violet-100 data-[highlighted]:text-violet-600"
                >
                  <RSelect.ItemText>{label}</RSelect.ItemText>
                </RSelect.Item>
              ))}
            </RSelect.Group>
          </RSelect.Viewport>
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  );
};
