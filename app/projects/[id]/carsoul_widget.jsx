import Image from "next/image";

function CarsoulWidget({ shots }) {
  return (
    <div className="relative flex items-center justify-center w-full dark:text-gray-900">
      <button
        aria-label="Slide back"
        type="button"
        className="absolute left-0 z-30 p-2 ml-10 text-white bg-darkpurple rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-midpurple"
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
      <div className="flex items-center justify-start w-full h-full gap-2 py-4 mx-auto overflow-auto lg:gap-4">
        {shots.map((shot, index) => (
          <div
            key={index}
            className="relative flex shrink-0 sm:w-auto"
          >
            <Image
              key={index}
              className=" dark:bg-gray-500 min-h-96 w-full rounded-lg shadow-lg object-cover"
              src={shot}
              quality={100}
              priority={true}
              width={300}
              height={400}
              alt="Image shot"
            />
          </div>
        ))}
      </div>
      <button
        aria-label="Slide forward"
        id="next"
        className="absolute right-0 z-30 p-2 mr-10 text-white bg-darkpurple rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-midpurple"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default CarsoulWidget;
