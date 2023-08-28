type AddButtonProps = {
  children: React.ReactNode;
};

export function AddButton({ children }: AddButtonProps) {
  return (
    <div className="lg:order-3">
      <button className="btn btn-success rounded-sm py-1.5 px-4 min-h-0 h-[42px] text-white text-base capitalize font-normal">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 5C11.75 5 12 5.25 12 5.5V6.5C12 6.78125 11.75 7 11.5 7H7V11.5C7 11.7812 6.75 12 6.5 12H5.5C5.21875 12 5 11.7812 5 11.5V7H0.5C0.21875 7 0 6.78125 0 6.5V5.5C0 5.25 0.21875 5 0.5 5H5V0.5C5 0.25 5.21875 0 5.5 0H6.5C6.75 0 7 0.25 7 0.5V5H11.5Z"
            fill="white"
          />
        </svg>
        {children}
      </button>
    </div>
  );
}
