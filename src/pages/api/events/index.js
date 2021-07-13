import { differenceInDays, parseISO, addDays } from "date-fns";

export function getEvents() {
  const events = require("./fake.json");
  const delta = differenceInDays(new Date(), parseISO(events[0].startsAt));

  return events
    .map((event, i) => {
      return {
        ...event,
        startsAt: addDays(parseISO(event.startsAt), delta).toISOString(),
      };
    })
    .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt));
}

export default function (req, res) {
  res.status(200).json(getEvents());
}
