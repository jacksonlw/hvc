"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { XMarkIcon } from "~/components/icons";
import { Bars3Icon } from "~/components/icons/Bars3Icon";
import { type Section } from "~/types";

type NavigationMenuProps = {
  triggerClassName?: string;
  sections: Section[];
};

export const NavigationMenu = (props: NavigationMenuProps) => {
  const { triggerClassName, sections } = props;
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={twMerge(
          "group -mr-3 flex h-full items-center px-3",
          triggerClassName,
        )}
        aria-label="Navigation Menu"
      >
        <Bars3Icon className="size-8 group-hover:text-violet-600 group-active:text-violet-400" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="fixed left-0 top-0 z-20 h-svh w-dvw bg-white">
          <div className="container flex h-navOffset items-center justify-end">
            <Dialog.Close className="group -mr-3 flex h-full items-center px-3">
              <XMarkIcon className="size-8 group-hover:text-violet-600 group-active:text-violet-400" />
            </Dialog.Close>
          </div>
          <div className="container flex flex-col items-end gap-2">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`/#${section.id}`}
                className="block py-3 font-heading text-2xl hover:text-violet-600 active:text-violet-400"
                onClick={() => setOpen(false)}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
