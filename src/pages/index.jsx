import { getEvents } from "@/api/events";
import EventList from "@/features/events/list";

export default function Home({ events }) {
  return (
    <div className="mt-16 w-2/3 mx-auto">
      <h1 className="text-4xl my-4 text-white">
        An Event Calendar using React, Next, and Tailwind
      </h1>
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
