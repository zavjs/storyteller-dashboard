import { StoryItem, StoryItemStatus } from "@/types/stories";
import { PageMiniaturePreview } from "../PageMiniaturePreview/PageMiniaturePreview";

type TableProps = {
  items: StoryItem[];
  onSort: (filter: string) => void;
};

function TableHeaderColumn({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <th
      onClick={onClick}
      className={`px-4 py-2.5 text-left ${className} ${
        onClick ? "cursor-pointer" : "cursor-not-allowed"
      }`}
    >
      {children}
    </th>
  );
}

function TableBodyColumn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={`py-4 px-5 ${className}`}>{children}</td>;
}

function EditColumn() {
  return (
    <div className="flex gap-x-5">
      <button className="btn btn-error bg-white border-error hover:bg-white h-8 py-2">
        <svg
          width="11"
          height="13"
          viewBox="0 0 11 13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.53125 10.25C6.36719 10.25 6.25 10.1328 6.25 9.96875V4.90625C6.25 4.76562 6.36719 4.625 6.53125 4.625H7.09375C7.23438 4.625 7.375 4.76562 7.375 4.90625V9.96875C7.375 10.1328 7.23438 10.25 7.09375 10.25H6.53125ZM10.375 2.375C10.5625 2.375 10.75 2.5625 10.75 2.75V3.125C10.75 3.33594 10.5625 3.5 10.375 3.5H10V11.375C10 12.0078 9.48438 12.5 8.875 12.5H2.125C1.49219 12.5 1 12.0078 1 11.375V3.5H0.625C0.414062 3.5 0.25 3.33594 0.25 3.125V2.75C0.25 2.5625 0.414062 2.375 0.625 2.375H2.54688L3.34375 1.0625C3.53125 0.757812 3.95312 0.5 4.30469 0.5H6.67188C7.02344 0.5 7.44531 0.757812 7.63281 1.0625L8.42969 2.375H10.375ZM4.25781 1.69531L3.85938 2.375H7.11719L6.71875 1.69531C6.69531 1.67188 6.625 1.625 6.60156 1.625H4.39844H4.375C4.35156 1.625 4.28125 1.67188 4.25781 1.69531ZM8.875 11.375V3.5H2.125V11.375H8.875ZM3.90625 10.25C3.74219 10.25 3.625 10.1328 3.625 9.96875V4.90625C3.625 4.76562 3.74219 4.625 3.90625 4.625H4.46875C4.60938 4.625 4.75 4.76562 4.75 4.90625V9.96875C4.75 10.1328 4.60938 10.25 4.46875 10.25H3.90625Z"
            fill="#D24747"
          />
        </svg>
      </button>
      <button className="btn btn-success font-normal text-white bg-success border-0 rounded-sm capitalize">
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5078 2.23438C13.1406 2.86719 13.1406 3.875 12.5312 4.48438L5.125 11.9375L1.63281 12.5C1.25781 12.5703 0.929688 12.2422 1 11.8672L1.5625 8.375L9.01562 0.96875C9.625 0.359375 10.6328 0.359375 11.2422 0.96875L12.5078 2.23438ZM3.8125 7.57812H4.79688V8.70312H5.92188V9.6875L9.88281 5.70312L7.79688 3.61719L3.8125 7.57812ZM2.92188 11.2578L4.63281 10.9531L5.07812 10.5312V9.54688H3.95312V8.42188H2.96875L2.54688 8.86719L2.24219 10.5781L2.92188 11.2578ZM11.8047 3.75781C12.0156 3.54688 12.0156 3.19531 11.7812 2.96094L10.5156 1.69531C10.3047 1.48438 9.95312 1.48438 9.74219 1.69531L8.59375 2.84375L10.6562 4.90625L11.8047 3.75781Z"
            fill="white"
          />
        </svg>
        Edit
      </button>
    </div>
  );
}

type BadgeType = "info" | "success" | "neutral";
type BadgeProps = {
  children: React.ReactNode;
  type: BadgeType;
};

function Badge({ children, type }: BadgeProps) {
  const statusBadgeClassesMap: Record<BadgeType, string> = {
    info: "badge-info",
    success: "badge-success",
    neutral: "badge-neutral",
  };
  const classes = statusBadgeClassesMap[type] ?? statusBadgeClassesMap.neutral;

  return (
    <span
      className={`badge text-white font-bold text-xs rounded-sm py-0.5 px-1.5 ${classes}`}
    >
      {children}
    </span>
  );
}

export function Table({ items, onSort }: TableProps) {
  const statusBadgeMap: Record<StoryItemStatus, React.ReactNode> = {
    draft: <Badge type="info">Draft</Badge>,
    scheduled: <Badge type="info">Scheduled</Badge>,
    live: <Badge type="success">Live</Badge>,
    past: <Badge type="neutral">Past</Badge>,
  };

  return (
    <table className="w-[1024px] text-sm lg:w-[calc(100%-240px)]">
      <thead className="border border-transparent border-b-[#DFE8EC]">
        <tr>
          <TableHeaderColumn
            className="text-left"
            onClick={() => onSort("title")}
          >
            Title
          </TableHeaderColumn>
          <TableHeaderColumn className="text-left">Pages</TableHeaderColumn>
          <TableHeaderColumn
            className="text-left"
            onClick={() => onSort("last-modified")}
          >
            Last Modified
          </TableHeaderColumn>
          <TableHeaderColumn onClick={() => onSort("status")}>
            Status
          </TableHeaderColumn>
          <TableHeaderColumn onClick={() => onSort("live-from")}>
            Live From
          </TableHeaderColumn>
          <TableHeaderColumn onClick={() => onSort("ends")}>
            Ends
          </TableHeaderColumn>
          <TableHeaderColumn>&nbsp;</TableHeaderColumn>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="odd:bg-white even:bg-[#f7f7f7]">
            <TableBodyColumn className="text-left">
              <h5 className="text-info ">{item.title}</h5>
              <span className="text-[#a3a3a3] font-light">
                ({item?.publishDate ? item.publishDate : "No publish date"})
              </span>
            </TableBodyColumn>
            <TableBodyColumn>
              <PageMiniaturePreview storyId={item.id} miniatures={item.pages} />
            </TableBodyColumn>
            <TableBodyColumn className="text-left text-sm text-primary">
              {item.lastModified}
            </TableBodyColumn>
            <TableBodyColumn>
              {item.status in statusBadgeMap
                ? statusBadgeMap[item.status]
                : null}
            </TableBodyColumn>
            <TableBodyColumn className="text-left text-sm text-primary">
              {item.liveFrom}
            </TableBodyColumn>
            <TableBodyColumn className="text-left text-sm text-primary">
              {item.ends}
            </TableBodyColumn>
            <TableBodyColumn className="text-left">
              <EditColumn />
            </TableBodyColumn>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
