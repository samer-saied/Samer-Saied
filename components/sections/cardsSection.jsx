import React from "react";
import CardWidget from "../widgets/cardWidget";
import projects from "../../data/projects-data";

const CardsSection = () => {
  return (
    <>
      <div className="mx-auto w-full bg-gray-50 lg:px-28 px-8 py-10">
        <h2 className="container mb-12 text-3xl font-extrabold leading-9 text-cutomDartBlue border-b-2 border-cutomDartBlue">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10 container mx-auto lg:px-10 px-5">
          {projects.map((project) => (
            <CardWidget key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsSection;
