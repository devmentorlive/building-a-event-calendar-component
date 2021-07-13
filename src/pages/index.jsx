import { getEvents } from "@/api/events";
import EventList from "@/features/events/list";

export default function Home({ events }) {
  return (
    <div className="mt-8 w-2/3 mx-auto">
      <EventList events={events} />
    </div>
  );
}

export function getServerSideProps({ req }) {
  return {
    props: {
      events: getEvents(),
    },
  };
}
