import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const DEFAULT_TIMEZONE = "America/Los_Angeles";

type DateConfig = Date | string | undefined | null;

export const formatTimeRange = (
  start: DateConfig,
  end: DateConfig,
  timeZone = DEFAULT_TIMEZONE,
) => {
  const startTime = dayjs(start).tz(timeZone).format("h:mma");
  const endTime = dayjs(end).tz(timeZone).format("h:mma");

  return `${startTime} - ${endTime}`;
};

export const formatDate = (date: DateConfig, timezone = DEFAULT_TIMEZONE) => {
  return dayjs(date).tz(timezone).format("MMMM D, YYYY");
};

export const formatMonthShort = (
  date: DateConfig,
  timezone = DEFAULT_TIMEZONE,
) => {
  return dayjs(date).tz(timezone).format("MMM");
};

export const formatMonth = (date: DateConfig, timezone = DEFAULT_TIMEZONE) => {
  return dayjs(date).tz(timezone).format("MMMM");
};

export const formatDayNameShort = (
  date: DateConfig,
  timezone = DEFAULT_TIMEZONE,
) => {
  return dayjs(date).tz(timezone).format("ddd");
};

export const formatDayNumber = (
  date: DateConfig,
  timezone = DEFAULT_TIMEZONE,
) => {
  return dayjs(date).tz(timezone).format("DD");
};
