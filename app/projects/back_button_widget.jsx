"use client";
function BackButtonWidget() {
  return (
    <button
      onClick={() => {
        event.preventDefault();
        window.history.back();
      }}
      aria-label="Slide back"
      type="button"
      className="p-3 mt-5 text-white bg-darkpurple rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-midpurple"
    >
      <svg
        width="8"
        height="14"
        fill="none"
        viewBox="0 0 8 14"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-white"
      >
        <path
          d="M7 1L1 7L7 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
}

export default BackButtonWidget;
