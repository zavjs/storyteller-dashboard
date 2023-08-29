type SearchBarProps = {
  onSearch: React.ChangeEventHandler<HTMLInputElement>
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex border border-px border-[#bbbcc2] rounded cursor-pointer lg:w-[376px]">
      <input
        id="stories-search"
        name="search"
        className="outline-0 w-32 py-2 pl-3 pr-2 rounded lg:w-[376px]"
        placeholder="Search"
        onChange={onSearch}
      />
      <label
        htmlFor="stories-search"
        className="flex items-center justify-center py-1 h-10 w-10 bg-neutral rounded-r-sm"
      >
        <span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4062 11.4922C12.5234 11.6094 12.5234 11.7969 12.4062 11.8906L11.8672 12.4297C11.7734 12.5469 11.5859 12.5469 11.4688 12.4297L8.63281 9.59375C8.58594 9.52344 8.5625 9.45312 8.5625 9.38281V9.07812C7.69531 9.80469 6.59375 10.25 5.375 10.25C2.67969 10.25 0.5 8.07031 0.5 5.375C0.5 2.70312 2.67969 0.5 5.375 0.5C8.04688 0.5 10.25 2.70312 10.25 5.375C10.25 6.59375 9.78125 7.71875 9.05469 8.5625H9.35938C9.42969 8.5625 9.5 8.60938 9.57031 8.65625L12.4062 11.4922ZM5.375 9.125C7.4375 9.125 9.125 7.46094 9.125 5.375C9.125 3.3125 7.4375 1.625 5.375 1.625C3.28906 1.625 1.625 3.3125 1.625 5.375C1.625 7.46094 3.28906 9.125 5.375 9.125Z"
              fill="white"
            />
          </svg>
        </span>
      </label>
    </div>
  );
}
