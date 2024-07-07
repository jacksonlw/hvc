import { notFound } from "next/navigation";
import { Heading } from "~/components";
import { env } from "~/env";
import { EmbedPDF } from "~/features/embed";
import { BackButton } from "~/features/navigation";
import { ArrowLeftIcon } from "~/icons/ArrowLeft";
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
    <div className="grid min-h-[calc(100dvh-theme(spacing.navOffset))] grid-cols-4">
      <div className="sticky top-0 self-start pt-6">
        <BackButton
          variant="outline"
          className="-ml-3 mb-8 border-none text-black hover:bg-transparent hover:text-violet-600"
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
        </div>
      </div>
      {event.attachmentFileId ? (
        <EmbedPDF
          className="col-span-3 h-full py-6"
          url={`https://drive.google.com/file/d/${event.attachmentFileId}/preview`}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
