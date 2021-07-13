import { useState } from "react";
import { format, addMinutes, parseISO } from "date-fns";

export default function EventCard({
  startsAt,
  duration,
  guestName,
  email,
  timezone,
  type,
  joinUrl,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-gray-100 ${open ? "bg-blue-50" : ""}`}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`p-4 flex items-center py-4 space-x-8 ${
          open ? "bg-blue-100" : ""
        }`}>
        <div>
          {format(parseISO(startsAt), "hh:mm aaa")} -{" "}
          {format(addMinutes(parseISO(startsAt), duration), "hh:mm aaa")}
        </div>
        <div className="flex-grow">
          <div>
            <span className="font-medium">{guestName} </span>
            <span className="text-gray-400 font-thin">with you</span>
          </div>
          <div>
            Event type: <span className="font-medium">{type}</span>
          </div>
        </div>
        <div className="flex text-gray-500 flex items-center space-x-2">
          <span className="text-sm">Details</span>
          <div>
            {open ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-gray-500"
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
            )}
          </div>
        </div>
      </div>
      {open && (
        <div className="p-4 flex space-x-12 items-center border-t">
          <div className="space-y-2">
            <button className="flex items-center justify-center bg-white border text-gray-700 border-gray-400 rounded-full py-2 px-8 w-full shadow-sm">
              <span className="mr-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>{" "}
              Reschedule
            </button>
            <button className="flex items-center justify-center  bg-white border text-gray-700 border-gray-400 rounded-full py-2 px-8 w-full shadow-sm">
              <span className="mr-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </span>{" "}
              Cancel
            </button>
          </div>
          <div className=" pt-6 flex-grow space-y-4">
            <div>
              <label className="font-medium block uppercase text-sm">
                Email
              </label>
              <span className="font-light">{email}</span>
            </div>

            <div>
              <label className="font-medium block uppercase text-sm">
                Timezone
              </label>
              <span className="font-light">{timezone}</span>
            </div>

            <div>
              <label className="font-medium block uppercase text-sm">
                Meeting join url
              </label>
              <span className="font-light">{joinUrl}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
