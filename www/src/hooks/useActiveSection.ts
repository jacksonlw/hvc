import { useMotionValueEvent, useScroll } from "framer-motion";
import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { sectionOffsetsAtom } from "~/store/sectionOffsetsAtom";

export const useActiveSection = () => {
  const [sectionOffsets] = useAtom(sectionOffsetsAtom);
  const { scrollY } = useScroll();
  const [activeSectionID, setActiveSectionID] = useState<string | null>(null);

  const updateActiveSection = useCallback(
    (y: number) => {
      const offsetsArr = Object.keys(sectionOffsets).map((key) => {
        return {
          id: key,
          value: sectionOffsets[key]!,
        };
      });
      offsetsArr.sort((a, b) => a.value - b.value);
      offsetsArr.forEach((o, i) => {
        const nextOffset = offsetsArr[i + 1];
        if (i === 0 && y < o.value) setActiveSectionID(null);
        if (y > o.value) {
          if (!nextOffset) {
            setActiveSectionID(o.id);
          } else if (y < nextOffset.value) {
            setActiveSectionID(o.id);
          }
        }
      });
    },
    [sectionOffsets, setActiveSectionID],
  );

  useEffect(() => {
    updateActiveSection(scrollY.get());
  }, [updateActiveSection, scrollY]);

  useMotionValueEvent(scrollY, "change", (y) => {
    updateActiveSection(y);
  });

  return activeSectionID;
};
