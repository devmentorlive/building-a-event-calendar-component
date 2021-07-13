import { format, addMinutes, parseISO } from "date-fns";

export default function EventCard({ startsAt, duration, guestName, type }) {
  return (
    <div className="flex items-center py-4 space-x-8">
      <div>
        {format(parseISO(startsAt), "hh:mm aaa")} -{" "}
        {format(addMinutes(parseISO(startsAt), duration), "hh:mm aaa")}
      </div>
      <div className="flex-grow">
        <div>
          <span className="font-bold">{guestName} </span>
          <span className="text-gray-300">with you</span>
        </div>
        <div>
          Event type: <span className="font-bold">{type}</span>
        </div>
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
  );
}
