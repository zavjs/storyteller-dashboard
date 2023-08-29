import { ChangeEventHandler } from "react";

type StatusSelectProps = {
  onSelect: ChangeEventHandler<HTMLSelectElement>
}

export function StatusSelect({ onSelect }: StatusSelectProps) {
  return (
    <select
      name="status"
      className="select border-px border-[#bbbcc2] rounded w-full max-w-xs font-normal text-sm w-40 h-9 min-h-[42px] lg:w-[200px]"
      defaultValue="All statuses"
      onChange={onSelect}
    >
      <option disabled>All statuses</option>
      <option>Draft</option>
      <option>Scheduled</option>
      <option>Live</option>
      <option>Past</option>
    </select>
  );
}
