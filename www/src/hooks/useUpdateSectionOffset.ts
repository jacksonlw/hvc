import { useAtom } from "jotai";
import { useEffect, type RefObject } from "react";
import { sectionOffsetsAtom } from "~/store/sectionOffsetsAtom";

export const useUpdateSectionOffset = (
  sectionID: string,
  sectionRef: RefObject<HTMLDivElement>,
) => {
  const [, setSectionOffsets] = useAtom(sectionOffsetsAtom);

  useEffect(() => {
    const offsetTop = sectionRef.current?.offsetTop ?? 0;

    setSectionOffsets((prev) => ({
      ...prev,
      [sectionID]: offsetTop - 250,
    }));
  }, [sectionID, setSectionOffsets, sectionRef]);
};
