import { getEvents } from "@/api/events";

export default function Home({ events }) {
  return <div>{JSON.stringify(events)}</div>;
}

export function getServerSideProps({ req }) {
  return {
    props: {
      events: getEvents(),
    },
  };
}
