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
  return dayjs(date).tz(timezone).format("MMMM D, YYYY");
};

export const getMonthShort = (date: Date, timezone = DEFAULT_TIMEZONE) => {
  return dayjs(date).tz(timezone).format("MMM");
};

export const getMonth = (date: Date, timezone = DEFAULT_TIMEZONE) => {
  return dayjs(date).tz(timezone).format("MMMM");
};

export const getDayNameShort = (date: Date, timezone = DEFAULT_TIMEZONE) => {
  return dayjs(date).tz(timezone).format("ddd");
};

export const getDayNumber = (date: Date, timezone = DEFAULT_TIMEZONE) => {
  return dayjs(date).tz(timezone).format("DD");
};
