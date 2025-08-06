import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardWidget = ({ project }) => {
  return (
    <div
      key={project.id}
      className="group border border-gray-950 m-auto overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:border-cutomyellow shadow-lg hover:shadow-2xl hover:shadow-cutomyellow/30 cursor-pointer h-fit bg-gradient-to-br from-darkpurple via-gray-900 to-darkblue "
    >
      <Link href={`projects/${project.id}`} className="block">
        {/* Image */}
        {project.image && (
          <div className="overflow-hidden h-72">
            <Image
              width={500}
              height={500}
              alt={project.title + " photo"}
              src={project.image}
              className="object-fit w-full h-72 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        {/* Data */}
        <div className="h-60 flex flex-col justify-center px-5 py-3">
          <p className="text-2xl font-semibold text-white group-hover:text-cutomyellow transition-colors duration-200">
            {project.title}
          </p>
          <p className="font-medium text-cutomyellow text-md mb-1">
            {project.section}
          </p>
          <p className="font-light text-gray-300 text-md line-clamp-2 mb-2">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center mt-2 gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs py-1.5 px-3 text-gray bg-mainpurple rounded-2xl shadow group-hover:bg-white group-hover:text-darknight transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardWidget;