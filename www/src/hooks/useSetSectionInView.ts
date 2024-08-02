"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useAtom } from "jotai";
import { useCallback, useEffect, type RefObject } from "react";
import { sectionInViewAtom } from "~/store/sectionInView";

export const useSetSectionInView = (
  sectionId: string,
  sectionRef: RefObject<HTMLDivElement>,
) => {
  const [, setSectionInView] = useAtom(sectionInViewAtom);
  const { scrollY } = useScroll();

  const updateSectionInView = useCallback(() => {
    const rect = sectionRef.current?.getBoundingClientRect();
    const isActive = rect && rect.top < window.innerHeight / 3;

    setSectionInView((state) => ({
      ...state,
      [sectionId]: isActive,
    }));
  }, [sectionRef, setSectionInView, sectionId]);

  useEffect(() => {
    updateSectionInView();
    return () => {
      setSectionInView((state) => ({
        ...state,
        [sectionId]: false,
      }));
    };
  }, [updateSectionInView, setSectionInView, sectionId]);

  useMotionValueEvent(scrollY, "change", () => {
    updateSectionInView();
  });
};
