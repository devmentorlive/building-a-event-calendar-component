export function getEvents() {
  return require("./fake.json");
}

export default function (req, res) {
  res.status(200).json(getEvents());
}
