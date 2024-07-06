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

export const formatDate = (
  start: Date,
  end: Date,
  timezone = DEFAULT_TIMEZONE,
) => {
  const sDate = dayjs(start).tz(timezone).format("MMMM D, YYYY");

  // If the start and end dates are the same, only show the start date
  if (dayjs(start).isSame(end, "day")) {
    return sDate;
  }

  // Otherwise, show the range of dates
  const eDate = dayjs(end).tz(timezone).format("MMMM D, YYYY");
  return `${sDate} - ${eDate}`;
};
