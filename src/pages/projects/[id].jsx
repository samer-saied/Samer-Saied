import React from "react";
import NavBar from "../../../components/widgets/navbar";
import FooterSection from "../../../components/sections/footerSection";
import Link from "next/link";
import projectsData from "../../../data/projects-data";
import Image from "next/image";

const { useState } = React;

export default function SingleProject({ projextNo }) {
  console.log(projextNo);
  const project = projectsData[+projextNo - 1];

  return (
    <>
      <NavBar></NavBar>
      <div key={project.id} className="lg:w-9/12 w-11/12 h-fit mx-auto pt-5">
        {project.video && (
          <div className="flex flex-col justify-center items-center bg-white h-full">
            <video autoPlay={true} muted loop height="240">
              <source src="/video/tal3a_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {project.image && (
          <Image
            alt={project.title + " photo"}
            src={project.image}
            className="object-fill w-full h-full"
          />
        )}{" "}
        <div className="h-60 flex flex-col justify-center px-5 py-1 lg:w-9/12 mx-auto">
          <p className="text-3xl font-medium text-gray-800">{project.title}</p>
          <p className="font-normal text-cutomyellow text-lg py-2">
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
      </div>
      <FooterSection></FooterSection>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(props) {
  console.log(props.query.id);
  // Fetch data from external API
  const projextNo = props.query.id;

  // Pass data to the page via props
  return { props: { projextNo } };
}
