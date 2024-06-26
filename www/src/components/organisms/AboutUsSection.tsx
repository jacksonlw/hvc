import { ContentSection } from "../molecules";

export const AboutUsSection = () => {
  return (
    <ContentSection badgeTitle="About Us" className="text-xl">
      <p>
        The Hill & Valley Club is a non-profit organization that was formed in
        1910. We are a member of the General Federation of Women&apos;s Clubs
        and the California Federation of Women&apos;s Club.
      </p>
      <p>
        We work each year to raise money for various charities in the community
        as well as funding several scholarships for our local high schools and
        the Chabot College graduating nurses.
      </p>
      <p>
        For more information about becoming a member call{" "}
        <span className="break whitespace-nowrap break-keep font-medium text-violet-600">
          (510) 421-0082
        </span>
      </p>
    </ContentSection>
  );
};
