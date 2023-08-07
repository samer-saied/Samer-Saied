import Link from "next/link";
import React from "react";

const CardWidget = ({ project }) => {
  return (
    <div
      key={project.id}
      className="m-auto overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-110 hover:shadow-xl cursor-pointer h-fit"
    >
      <Link href={`/projects/${project.id}`} className="">
        {/* {project.video && (
          <div className="flex flex-col justify-center items-center bg-white h-60">
            <video autoPlay={true} muted loop height="240">
              <source src="video/tal3a_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )} */}
        {project.image && (
          <img
            alt={project.title + " photo"}
            src={project.image}
            className="object-fill w-full h-60"
          />
        )}{" "}
        <div className="h-60 flex flex-col justify-center px-5 py-1 lg:py-3 bg-gray-100">
          <p className="text-xl font-medium text-gray-800">
            {project.title}
          </p>
          <p className="font-normal text-cutomyellow text-md">
            {project.section}
          </p>
          <p className="font-light text-gray-700 text-md line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center mt-2 justify-starts">
            {project.tags?.map((tag) => (
              <div
                key={tag}
                className="text-xs m-1 py-1.5 px-1 lg:px-2  text-cutomDartBlue bg-white rounded-2xl shadow-md"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardWidget;
