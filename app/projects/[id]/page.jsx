import Image from "next/image";
import projectsData from "@/lib/data/projects-data"; // Adjust the import path as necessary
import CarsoulWidget from "./carsoul_widget";
import ButtonWidget from "./button_widget";
import BackButtonWidget from "../back_button_widget";

export default async function SingleProject({ params }) {
  const { id } = await params;
  console.log(id);
  const project = projectsData[+id - 1];

  const backGroundLink =
    "https://images.unsplash.com/photo-1742679697291-affd3365ebe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Adjust the path as necessary
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-y-auto">
      {/* Sticky Background Image - Using Next.js Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src={backGroundLink}
          alt="Sticky Background"
          fill // This makes the image fill its parent container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          priority // Prioritize loading for LCP
          className="object-cover blur-xs" // Ensure the image covers the entire div without distortion
        />
        {/* Overlay for darkening the background image and improving text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Scrolling Content Section */}
      {/* This div will scroll on top of the fixed background and overlay */}
      <div className="relative z-10 bg-transparent text-white">
        {/* Adjusted padding and transparent background */}
        {/* Initial content that sits on the first "screen" over the sticky background */}
        <div className=" bg-black/30 backdrop-blur-md rounded-2xl md:w-9/12 md:mx-auto mx-4 shadow-lg m-5">
          <div key={project.id} className=" w-11/12 mx-auto pt-10">
            <div className="flex flex-row items-start justify-center ">
              <BackButtonWidget />
              <div className="flex flex-col items-start md:items-center justify-center w-11/12 px-3">
                {/*=========================== TITLE - TYPE SECTION ===========================*/}
                <p className=" md:text-5xl text-3xl md:mt-2 font-bold">{project.title}</p>
                <p className="font-normal text-white text-lg py-2">
                  {project.section}
                </p>
              </div>
            </div>
            {/*=========================== IMAGE - VIDEO SECTION ===========================*/}
            {project.icon == null && (
              <Image
                key={project.icon}
                alt={project.title + " photo"}
                src={project.image}
                width={300}
                height={300}
                className="object-fill w-full h-full"
              />
            )}{" "}
            {/*=========================== Slider SECTION ===========================*/}
            {project.shotScreens != null && (
              <CarsoulWidget shots={project.shotScreens} />
            )}
            {/*=========================== DETAILS SECTION ===========================*/}
            <div className=" flex flex-col justify-center mt-10">
              <div className="border border-gray-700 rounded-md p-5 shadow-sm mb-2">
                <h1 className=" font-bold text-xl">Description</h1>
                <p className="font-light md:text-xl text-md p-2 whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              <div className="border border-gray-700 rounded-md p-5 shadow-sm mb-2">
                <h1 className=" font-bold text-xl">Technology</h1>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="font-light text-md p-2"
                >
                  {project.technology}
                </p>
              </div>

              <div className="border border-gray-700 rounded-md p-5 shadow-sm mb-2">
                <h1 className=" font-bold text-xl">Tags</h1>
                <div className="flex flex-wrap items-center justify-starts p-2">
                  {project.tags?.map((tag) => (
                    <div
                      key={tag}
                      className="text-xs m-1 py-1.5 px-1 lg:px-2  text-darkpurple bg-white rounded-2xl shadow-md"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-700 rounded-md p-5 shadow-sm mb-5">
                <div className="flex flex-col">
                  <h1 className=" font-bold text-xl">Links</h1>
                  <div className="flex lg:flex-row flex-col justify-evenly items-center mb-5">
                    {project.links?.map((link, index) => (
                      <ButtonWidget key={index} link={link} index={index} />
                    ))}
                    {project.links.length == 0 && (
                      <h1 className=" font-bold text-white text-xl">
                        Contact Me
                      </h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-lightpurple opacity-80 text-white h-fit py-4 shadow-xl text-xs px-8 ">
        <p>Copyright © 2024 – 2025 All Rights Reserved</p>
        <p>
          No part of this website or projects which shown above may be
          reproduced or distributed without prior written permission from the
          copyright owner.
        </p>
        <p>
          t: +20 10 10 199 177 | samersaied02@gmail.com | Terms Of Use | Privacy
          Policy
        </p>
      </div>
    </div>
  );
}
