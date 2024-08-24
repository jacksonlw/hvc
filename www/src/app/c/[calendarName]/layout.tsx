import { notFound } from "next/navigation";

type CalendarLayoutProps = {
  params: {
    calendarName: string;
  };
  children: React.ReactNode;
};

export default function CalendarLayout(props: CalendarLayoutProps) {
  const { params, children } = props;

  console.log(params.calendarName);

  // Validate calendarName
  if (params.calendarName !== "events" && params.calendarName !== "meetings") {
    return notFound();
  }

  return children;
}
