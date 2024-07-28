import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const DEFAULT_TIMEZONE = "America/Los_Angeles";

export const formatTimeRange = (
  start: Date,
  end: Date,
  timezone = DEFAULT_TIMEZONE,
) => {
  const sTime = dayjs(start).tz(timezone).format("h:mma");
  const eTime = dayjs(end).tz(timezone).format("h:mma");

  return `${sTime} - ${eTime}`;
};

export const formatDate = (date: Date, timezone = DEFAULT_TIMEZONE) => {
  console.log(timezone);
  return dayjs(date).tz(timezone).format("MMMM D, YYYY");
};
