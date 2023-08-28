type PaginationProps = {
  currentPage?: number;
  total?: number;
};

export function Pagination({ currentPage, total }: PaginationProps) {
  return (
    <div>
      <div>
        <label>
          Page
          <input name="page" defaultValue={currentPage} />
        </label>
        <span>of </span>
        <label>{total}</label>
      </div>
    </div>
  );
}
