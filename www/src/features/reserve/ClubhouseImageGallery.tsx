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
        "group flex items-center justify-center gap-1 p-2 font-medium",
        className,
      )}
      {...rest}
    >
      <Icon
        className={twMerge(
          "size-7 group-hover:text-violet-600",
          textPosition === "left" && "order-2",
        )}
      />
      <p className={twMerge("group-hover:text-violet-600")}>{children}</p>
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
      <div className="flex items-center">
        <GalleryNavigationButton
          Icon={ChevronLeftIcon}
          onClick={() => void handlePrevious()}
        >
          Previous
        </GalleryNavigationButton>
        <div className="flex grow justify-center">
          {CLUBHOUSE_IMAGE_URLS.map((image, i) => (
            <button
              key={image}
              onClick={() => setActiveIndex(i)}
              className={twMerge("group px-1.5 py-2")}
            >
              <div
                className={twMerge(
                  "size-3 rounded-full bg-gray-400",
                  i === activeIndex && "!bg-violet-600",
                )}
              />
            </button>
          ))}
        </div>
        <GalleryNavigationButton
          Icon={ChevronRightIcon}
          onClick={() => void handleNext()}
          textPosition="left"
        >
          Next
        </GalleryNavigationButton>
      </div>
    </div>
  );
};
