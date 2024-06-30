import { Badge } from "../atoms";
import { ContentSection } from "../molecules";

export const AboutUsSection = () => {
  return (
    <ContentSection
      badgeTitle="About Us"
      className="text-xl [&>p]:leading-relaxed"
    >
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

      <Badge className="my-8">Our History</Badge>

      <p>
        Hill and Valley was established when Mrs. J. Allen Park brought together
        women in the Hayward, Castro Valley, San Lorenzo, Fremont, Newark areas
        with the idea of forming a Federated Women&apos;s Club. Mrs. Park was
        certain that women could accomplish much in the Federation structure.
        Federation had been started in the eastern part of the country in the
        1800&apos;s when women tried to better themselves, their families and
        their communities.
      </p>

      <p>
        A group of 250 members began the Hill & Valley Women&apos;s club in 1910
        becoming a part of the Alameda and State Federations. Deciding dues,
        meeting places, officers, elections and by-laws were all approved in
        March 1910. They became a part of the National Federation in 1912.
        Strobridge, Gading, Ruus, Smaley, Harder, Oakes, Winton, Walpert, Garin
        and Moreau were some of the first members of Hill & Valley Club.
      </p>

      <p>
        Over the years Hill and Valley gave support to National and Regional
        areas of concern: Red Cross, League of Nations, child labor laws, the
        blind individual&apos;s white cane, Redwood Grove in Humboldt County,
        and much support was given to city government, education, outreach and
        conservation.
      </p>

      <p>
        In the early years, Mrs. Park&apos;s home was used for committee
        meetings. Hayward historical landmark buildings were made available to
        the club for meager rent. It was soon decided that a building fund would
        be started for a clubhouse. Building was postponed until 1952 because of
        WWII. The cottage was added in 1963.
      </p>
    </ContentSection>
  );
};
