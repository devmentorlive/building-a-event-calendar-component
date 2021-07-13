const {
  differenceInDays,
  parseISO,
  addDays,
  subDays,
  format,
} = require("date-fns");

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function fakeEvent(startsAt) {
  const timezones = ["America/Mexico_City", "America/Los_Angeles"];
  const names = ["Emily", "Hilda", "Erika", "Justin", "Ryan", "Danny", "Phil"];
  const adjectives = ["Awesome", "Amazing", "Smarts", "Clever", "Fantastic"];
  const tlds = ["com", "co.uk", "com.mx", "org", "net"];
  const types = ["mentorship", "consulting"];
  const durations = [60, 120];

  const name = sample(names);
  const ajective = sample(adjectives);
  const duration = sample(durations);
  return {
    guestName: `${name} ${ajective}`,
    email: `${name.toLowerCase()}@${ajective.toLowerCase()}.${sample(tlds)}`,
    type: sample(types),
    startsAt: `${format(startsAt, "yyyy-MM-dd")}T12:00:00.000Z`,
    timezone: "",
    duration: duration,
    joinUrl: "https://zoom.to/hx6sdg3nsg",
  };
}

function fakeEvents(n = 10) {
  const startsAt = subDays(new Date(), 2);
  const events = [];
  for (let i = 0; i < n; i++) {
    events.push(fakeEvent(addDays(startsAt, i)));
  }

  return events;
}

(() => {
  const fs = require("fs");
  fs.writeFile(
    "./src/pages/api/events/fake.json",
    JSON.stringify(fakeEvents(20)),
    () => {}
  );
})();
