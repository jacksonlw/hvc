import { notFound } from "next/navigation";
import { Heading, TextLink } from "~/components";
import { ADDRESS_WITH_ZIP, CLUBHOUSE_MAP_LOCATION_URL } from "~/constants";
import { env } from "~/env";
import { EmbedPDF } from "~/features/embed";
import { BackButton } from "~/features/navigation";
import { ArrowLeftIcon } from "~/components/icons";
import { getEvent } from "~/lib/calendar";
import { formatDate, formatTimeRange } from "~/lib/datetime";

type EventPageProps = {
  params: {
    id: string;
  };
};

export default async function EventPage(props: EventPageProps) {
  const { params } = props;
  const eventId = params.id;
  const event = await getEvent(env.GOOGLE_EVENTS_CALENDAR_ID, eventId);

  if (!event) {
    return notFound();
  }

  const formattedDate = formatDate(event.start.dateTime, event.start.timeZone);
  const formattedTimeRange = formatTimeRange(
    event.start.dateTime,
    event.end.dateTime,
    event.start.timeZone,
  );

  return (
    <div className="flex min-h-[calc(100svh-theme(spacing.navOffset))] flex-col gap-6 xl:grid xl:grid-cols-4">
      <div className="top-navOffset flex items-start gap-8 self-start pt-4 xl:sticky xl:flex-col xl:pb-4">
        <BackButton
          variant="outline"
          className="-ml-4 hidden border-none !bg-transparent text-black transition-none hover:text-violet-600 active:text-violet-400 lg:flex"
        >
          <ArrowLeftIcon className="mr-2" />
          Go Back
        </BackButton>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-1">
          <div>
            <p className="mb-1 text-sm text-gray-500">Event</p>
            <Heading className="text-base lg:text-xl">{event.name}</Heading>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Date</p>
            <p>{formattedDate}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Time</p>
            <p>{formattedTimeRange}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Location</p>
            <TextLink href={CLUBHOUSE_MAP_LOCATION_URL} target="_blank">
              {ADDRESS_WITH_ZIP}
            </TextLink>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col pb-4 xl:col-span-3 xl:pt-4">
        {event.attachmentFileId ? (
          <EmbedPDF
            className="grow"
            url={`https://drive.google.com/file/d/${event.attachmentFileId}/preview`}
          />
        ) : (
          <div className="flex grow items-center justify-center rounded-xl border border-gray-300 bg-gray-100 p-4">
            <p className="text-center font-heading text-gray-600 md:text-xl">
              No additional details are provided for this event
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
