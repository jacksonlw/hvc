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

  const formattedDate = formatDate(
    event.start.dateTime,
    event.end.dateTime,
    event.start.timeZone,
  );
  const formattedTimeRange = formatTimeRange(
    event.start.dateTime,
    event.end.dateTime,
    event.start.timeZone,
  );

  return (
    <div className="grid min-h-[calc(100dvh-theme(spacing.navOffset))] grid-cols-4 gap-6">
      <div className="sticky top-navOffset self-start py-6">
        <BackButton
          variant="outline"
          className="-ml-4 mb-8 border-none text-black hover:text-violet-600"
        >
          <ArrowLeftIcon className="mr-2 transition-[stroke]" />
          Go Back
        </BackButton>

        <div className="grid gap-4">
          <div>
            <p className="mb-1 text-sm text-gray-500">Event</p>
            <Heading className="text-xl">{event.name}</Heading>
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
      <div className="col-span-3 py-6">
        {event.attachmentFileId ? (
          <EmbedPDF
            className="h-full w-full"
            url={`https://drive.google.com/file/d/${event.attachmentFileId}/preview`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-xl border border-gray-300 bg-gray-100">
            <p className="font-heading text-xl text-gray-600">
              No additional details are provided for this event
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
