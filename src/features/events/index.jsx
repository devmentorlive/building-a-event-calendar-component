import {
  format,
  addDays,
  subDays,
  addMinutes,
  isBefore,
  isSameDay,
  parseISO,
} from "date-fns";

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

export default function EventsList({ events }) {
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
                    {daysEvents.map(
                      ({ startsAt, duration, guestName, type }, i) => (
                        <div
                          className={` ${
                            i < daysEvents.length - 1 ? "border-b" : ""
                          }`}>
                          <div className="flex items-center py-4 space-x-8">
                            <div>
                              {format(parseISO(startsAt), "hh:mm aaa")} -{" "}
                              {format(
                                addMinutes(parseISO(startsAt), duration),
                                "hh:mm aaa"
                              )}
                            </div>
                            <div className="flex-grow">
                              <span className="font-bold">{guestName} </span>
                              <span className="text-gray-300">with you</span>
                            </div>
                            <div>
                              Event type:{" "}
                              <span className="font-bold">{type}</span>
                            </div>
                            <div className="flex">
                              Details
                              <div>
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
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
