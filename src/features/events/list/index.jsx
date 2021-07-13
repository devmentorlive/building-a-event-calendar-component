import {
  format,
  addDays,
  subDays,
  isBefore,
  isSameDay,
  parseISO,
} from "date-fns";

import EventCard from "./event";

function dateRange(from, to) {
  const days = [from];
  function last(days) {
    return days[days.length - 1];
  }
  while (isBefore(last(days), subDays(to, 1))) {
    days.push(addDays(last(days), 1));
  }
  return days;
}

function eventsByDay(events, day) {
  return events.filter((event) => isSameDay(parseISO(event.startsAt), day));
}

export default function EventList({ events }) {
  return (
    <div className="shadow-xl">
      <div className="rounded-t-md flex p-6 space-x-6  border-t border-l border-r">
        <div>Handle</div>
        <div>Pending</div>
        <div>Past</div>
        <div>Date range</div>
      </div>

      <div>
        {dateRange(new Date(), addDays(new Date(), 7)).map((day) => {
          const daysEvents = eventsByDay(events, day);
          return (
            <>
              <div className="p-4 border-t border-l border-r">
                {format(day, "EEEE, do MMMM")}
              </div>
              <div className="p-4  border-t border-l border-r">
                {daysEvents.length < 1 ? (
                  <>Nothing scheduled</>
                ) : (
                  <>
                    {daysEvents.map((appointment, i) => (
                      <div
                        className={` ${
                          i < daysEvents.length - 1 ? "border-b" : ""
                        }`}>
                        <EventCard {...appointment} />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
