type EventPageProps = {
  params: {
    id: string;
  };
};

export default function EventPage(props: EventPageProps) {
  const { params } = props;

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
