type PaginationProps = {
  currentPage?: number;
};

export function Pagination({ currentPage }: PaginationProps) {
  return (
    <div className="p-4 flex items-center justify-between text-sm gap-x-4 w-[380px] mr-0 ml-auto">
      <div className="flex gap-x-1.5 items-center">
        <label htmlFor="pageNo">Page</label>
        <input
          id="pageNo"
          name="page"
          defaultValue={currentPage}
          className="outline-0 h-9 w-16 px-2 border border-px border-[#bbbcc2] rounded"
        />
        <span>of </span>
        <select
          className="select py-2 min-h-fit leading-none pl-4 pr-3 font-normal h-9 outline-0 border border-px border-[#bbbcc2] rounded w-[110px]"
          defaultValue="20 rows"
        >
          <option>10 rows</option>
          <option>20 rows</option>
          <option>30 rows</option>
        </select>
      </div>
      <div className="flex">
        <button className="border-l border-t border-b border-px border-[#bbbcc2] rounded-l w-9 h-9 inline-flex items-center justify-center">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.3125 6.80469C4.19531 6.89844 4.03125 6.89844 3.91406 6.80469L0.820312 3.71094C0.726562 3.59375 0.726562 3.42969 0.820312 3.3125L3.91406 0.21875C4.03125 0.125 4.19531 0.125 4.3125 0.21875L4.78125 0.6875C4.875 0.804688 4.875 0.96875 4.75781 1.08594L2.88281 2.89062H10.9688C11.1094 2.89062 11.25 3.03125 11.25 3.17188V3.82812C11.25 3.99219 11.1094 4.10938 10.9688 4.10938H2.88281L4.75781 5.9375C4.875 6.05469 4.875 6.21875 4.78125 6.33594L4.3125 6.80469Z"
              fill="#171A25"
            />
          </svg>
        </button>
        <button className="border border-px border-[#bbbcc2] rounded-r w-9 h-9 inline-flex items-center justify-center">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66406 0.21875C7.78125 0.125 7.94531 0.125 8.0625 0.21875L11.1562 3.3125C11.25 3.42969 11.25 3.59375 11.1562 3.71094L8.0625 6.80469C7.94531 6.89844 7.78125 6.89844 7.66406 6.80469L7.19531 6.33594C7.10156 6.21875 7.10156 6.05469 7.21875 5.9375L9.09375 4.10938H1.03125C0.867188 4.10938 0.75 3.99219 0.75 3.82812V3.17188C0.75 3.03125 0.867188 2.89062 1.03125 2.89062H9.09375L7.21875 1.08594C7.10156 0.96875 7.10156 0.804688 7.19531 0.6875L7.66406 0.21875Z"
              fill="#171A25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
