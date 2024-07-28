"use client";
import Image from "next/image";
import { useState, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  type BaseIconProps,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "~/components/icons";
import { IMAGE_URLS } from "~/constants";

const CLUBHOUSE_IMAGE_URLS = [
  IMAGE_URLS.clubhouseOutsideFront,
  IMAGE_URLS.clubhouseEntrance,
  IMAGE_URLS.clubhouseInside,
] satisfies readonly string[];
type ClubhouseImageGalleryProps = {
  className?: string;
};

type GalleryNavigationButtonProps = HTMLAttributes<HTMLButtonElement> & {
  Icon: React.ComponentType<BaseIconProps>;
  textPosition?: "left" | "right";
};

const GalleryNavigationButton = (props: GalleryNavigationButtonProps) => {
  const { className, children, textPosition = "right", Icon, ...rest } = props;
  return (
    <button
      className={twMerge(
        "group -mx-2 flex items-center justify-center gap-1 p-2 font-medium hover:text-violet-600 active:text-violet-500",
        className,
      )}
      {...rest}
    >
      <Icon
        className={twMerge("size-6", textPosition === "left" && "order-2")}
      />
      <p>{children}</p>
    </button>
  );
};

export const ClubhouseImageGallery = (props: ClubhouseImageGalleryProps) => {
  const { className } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CLUBHOUSE_IMAGE_URLS.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev <= 0 ? CLUBHOUSE_IMAGE_URLS.length - 1 : prev - 1,
    );
  };

  return (
    <div className={twMerge("grid gap-4", className)}>
      <div className="flex items-center gap-4">
        <div className="relative aspect-video grow">
          {CLUBHOUSE_IMAGE_URLS.map((url, i) => (
            <Image
              key={url}
              src={url}
              width={1920}
              height={1080}
              alt="Clubhouse"
              className={twMerge(
                "absolute left-0 top-0 size-full rounded-3xl border-4 border-gray-300 object-cover object-top transition-opacity",
                i === activeIndex ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <GalleryNavigationButton
            Icon={ChevronLeftIcon}
            onClick={() => void handlePrevious()}
          >
            Previous
          </GalleryNavigationButton>
        </div>
        <div className="flex grow justify-center">
          {CLUBHOUSE_IMAGE_URLS.map((image, i) => (
            <button
              key={image}
              onClick={() => setActiveIndex(i)}
              className={twMerge("group px-2 py-3")}
            >
              <div
                className={twMerge(
                  "size-2 rounded-full bg-gray-400 group-hover:bg-gray-600 group-active:bg-gray-600 sm:size-2.5",
                  i === activeIndex && "!bg-violet-600",
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex justify-end">
          <GalleryNavigationButton
            Icon={ChevronRightIcon}
            onClick={() => void handleNext()}
            textPosition="left"
          >
            Next
          </GalleryNavigationButton>
        </div>
      </div>
    </div>
  );
};
