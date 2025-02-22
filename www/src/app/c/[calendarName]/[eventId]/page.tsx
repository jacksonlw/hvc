import { notFound } from "next/navigation";
import { Heading, TextLink } from "~/components";
import { ADDRESS_WITH_ZIP, CLUBHOUSE_MAP_LOCATION_URL } from "~/constants";
import { EmbedPDF } from "~/features/embed";
import { BackButton } from "~/features/navigation";
import { ArrowLeftIcon } from "~/components/icons";
import { getCalendarEvent } from "~/lib/calendar";
import { formatDate, formatTimeRange } from "~/lib/datetime";
import { CALENDARS } from "~/constants/calendar";

type EventPageProps = {
  params: {
    calendarName: "events" | "meetings";
    eventId: string;
  };
};

export default async function EventPage(props: EventPageProps) {
  const { params } = props;
  const { calendarName, eventId } = params;
  const calendarId = CALENDARS[calendarName];

  const event = await getCalendarEvent(calendarId, eventId);
  if (!event) {
    return notFound();
  }

  const formattedDate = formatDate(event.startDate);
  const formattedTimeRange = formatTimeRange(
    event.start?.dateTime,
    event.end?.dateTime,
  );
  const firstAttachmentId = event.attachments?.at(0)?.fileId;

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
            <p className="mb-1 text-sm text-gray-600">Event</p>
            <Heading className="text-base lg:text-xl">{event.summary}</Heading>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Date</p>
            <p>{formattedDate}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Time</p>
            <p>{event.isAllDay ? <>All day event</> : formattedTimeRange}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Location</p>
            <TextLink href={CLUBHOUSE_MAP_LOCATION_URL} target="_blank">
              {ADDRESS_WITH_ZIP}
            </TextLink>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col pb-4 xl:col-span-3 xl:pt-4">
        {firstAttachmentId ? (
          <EmbedPDF
            className="grow"
            url={`https://drive.google.com/file/d/${firstAttachmentId}/preview`}
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
