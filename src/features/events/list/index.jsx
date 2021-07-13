import { useState } from "react";
import {
  format,
  isBefore,
  isSameDay,
  parseISO,
  isAfter,
  subDays,
} from "date-fns";

import EventCard from "./event";
import Tabs from "./tabs";

function eventsByDay(events, day) {
  return events.filter((event) => isSameDay(parseISO(event.startsAt), day));
}

export default function EventList({ events }) {
  const [filter, setFilter] = useState("today");

  return (
    <div className="shadow-xl">
      <div className="rounded-t-md flex p-6 space-x-6  border-t border-l border-r border-b border-gray-300 bg-gray-50 ">
        <Tabs filter={filter} setFilter={setFilter} />
      </div>

      <div className="border-l border-r border-gray-300">
        {events
          .map((event) => new Date(event.startsAt))
          .filter(
            (day) =>
              (filter === "upcoming" && isAfter(day, new Date())) ||
              (filter === "today" && isSameDay(new Date(), day)) ||
              (filter === "past" && isBefore(day, subDays(new Date(), 1))) ||
              filter === "all"
          )

          .map((day) => {
            const daysEvents = eventsByDay(events, day);
            return (
              <div className="bg-gray-200 ">
                <div className="p-4 border-t border-l border-r flex items-center">
                  <div className="w-1/3 font-bold text-gray-800">
                    {format(day, "EEEE, do MMMM")}{" "}
                  </div>

                  <div className="text-gray-500 font-thin ml-4">
                    {daysEvents.length < 1 ? (
                      <>Nothing scheduled</>
                    ) : (
                      <>({daysEvents.length}) events scheduled</>
                    )}
                  </div>
                  {isSameDay(new Date(), day) && (
                    <div className="uppercase text-blue-600 ml-4">Today</div>
                  )}
                </div>
                <div className="border-t border-l border-r">
                  {daysEvents.length > 0 && (
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
              </div>
            );
          })}
      </div>
    </div>
  );
}
