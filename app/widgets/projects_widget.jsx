import React from "react";
import CardWidget from "./cardWidget";
import projects from "@/lib/data/projects-data";

const ProjectsWidget = () => {
  return (
    <>
      <div id="projects_section" className="mx-auto w-full bg-darknight opacity-90 pb-8 ">
        <div className="mx-auto container">
          <h2 className="md:text-5xl text-4xl text-left font-bold pt-8 px-8 text-white">
            Projects
          </h2>
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 md:gap-10 gap-2 mx-auto md:p-8 p-4">
            {/* Map through projects and render CardWidget for each project */}
            {projects.map((project) => (
              <CardWidget key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsWidget;
