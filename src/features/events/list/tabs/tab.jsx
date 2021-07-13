export default function Tab({ onClick, label, active = false, classNames }) {
  return (
    <div>
      <div>
        <a onClick={onClick}>{label}</a>
      </div>
      <div
        className={`${classNames.base} ${
          active ? classNames.active : classNames.inactive
        }`}
      />
    </div>
  );
}
