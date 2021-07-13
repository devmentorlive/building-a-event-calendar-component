import { differenceInDays, parseISO, addDays } from "date-fns";

export function getEvents() {
  return require("./fake.json")
    .map((event, i) => {
      const timestamp = parseISO(event.startsAt);
      const delta = differenceInDays(timestamp, new Date());
      return {
        ...event,
        startsAt: addDays(timestamp, Math.abs(delta)).toISOString(),
      };
    })
    .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt));
}

export default function (req, res) {
  res.status(200).json(getEvents());
}
