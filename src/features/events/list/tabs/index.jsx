import Tab from "./tab";

export default function Tabs({ filter, setFilter }) {
  const classNames = {
    base: "w-0 border-t-4 transition-all",
    active: "w-full border-blue-400",
    inactive: "border-transparent",
  };
  return (
    <>
      <Tab
        onClick={() => setFilter("today")}
        active={filter === "today"}
        label="Today"
        classNames={classNames}
      />
      <Tab
        onClick={() => setFilter("upcoming")}
        active={filter === "upcoming"}
        label="Upcoming"
        classNames={classNames}
      />
      <Tab
        onClick={() => setFilter("past")}
        active={filter === "past"}
        label="Past"
        classNames={classNames}
      />
      <Tab
        onClick={() => setFilter("all")}
        active={filter === "all"}
        label="All"
        classNames={classNames}
      />
    </>
  );
}
