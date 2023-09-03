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
      <div key={project.id} className="lg:w-6/12 w-11/12 mx-auto pt-5">
        {/*=========================== TITLE - TYPE SECTION ===========================*/}
        <p className=" text-4xl mt-5 font-medium text-gray-800">
          {project.title}
        </p>
        <p className="font-normal text-cutomyellow text-lg py-2">
          {project.section}
        </p>
        {/*=========================== IMAGE - VIDEO SECTION ===========================*/}
        {/* {project.video && (
          <div className="flex flex-col justify-center items-center bg-white h-full">
            <video autoPlay={true} muted loop height="240">
              <source src="/video/tal3a_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )} */}
        {project.image && (
          <Image
            alt={project.title + " photo"}
            src={project.image}
            width={600}
            height={600}
            className="object-fill w-full h-full"
          />
        )}{" "}
        {/*=========================== DETAILS SECTION ===========================*/}
        <div className=" flex flex-col justify-center mt-10">
          <div className="border border-gray-200 rounded-md p-5 shadow-sm mb-2">
            <h1 className=" font-bold text-gray-700 text-xl">Description</h1>
            <p className="font-light text-gray-700 text-xl p-2 whitespace-pre-line">
              {project.description}
            </p>
          </div>

          <div className="border border-gray-200 rounded-md p-5 shadow-sm mb-2">
            <h1 className=" font-bold text-gray-700 text-xl">Technology</h1>
            <p style={{whiteSpace: 'pre-line'}} className="font-light text-gray-700 text-md p-2">
              {project.technology}
            </p>
          </div>

          <div className="border border-gray-200 rounded-md p-5 shadow-sm mb-2">
            <h1 className=" font-bold text-gray-700 text-xl">Tags</h1>
            <div className="flex flex-wrap items-center justify-starts p-2">
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

          <div className="border border-gray-200 rounded-md p-5 shadow-sm mb-5">
            <div className="flex flex-col">
              <h1 className=" font-bold text-gray-700 text-xl">Links</h1>
              <div className="flex lg:flex-row flex-col justify-evenly items-center mb-5">
                {project.links?.map((link) => (
                  <div key={link}>
                    {link.name == "Github" && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          window.open(`${link.url}`, "_blank");
                        }}
                        type="button"
                        className="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl"
                      >
                        <div className="mr-3">
                          <svg viewBox="0 0 120 130" width="30">
                            <path
                              fill="currentColor"
                              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                              transform="scale(7)"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs">Check Code on</div>
                          <div className="-mt-1 font-sans text-xl font-semibold">
                            GitHub
                          </div>
                        </div>
                      </button>
                    )}
                    {link.name == "Website" && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          window.open(`${link.url}`, "_blank");
                        }}
                        type="button"
                        className="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl"
                      >
                        <div className="mr-3">
                          <svg viewBox="2 -20 120 150" width="40">
                            <path
                              fill="white"
                              transform="scale(5)"

                              d="M10,4.784C7.12,4.784,4.784,7.12,4.784,10c0,2.881,2.335,5.216,5.216,5.216c2.881,0,5.216-2.335,5.216-5.216C15.216,7.12,12.881,4.784,10,4.784 M10,5.653c1.034,0,1.983,0.362,2.729,0.966c-0.705,0.566-1.475,1.056-2.303,1.442C9.94,7.257,9.356,6.52,8.702,5.852C9.111,5.723,9.548,5.653,10,5.653 M7.837,6.233c0.672,0.649,1.271,1.375,1.767,2.173c-1.205,0.451-2.503,0.709-3.863,0.72C5.994,7.888,6.775,6.844,7.837,6.233 M5.653,10c1.549,0,3.03-0.292,4.392-0.821c0.146,0.282,0.283,0.568,0.405,0.863c-1.5,0.563-2.761,1.603-3.616,2.93C6.104,12.194,5.653,11.151,5.653,10 M10,14.347c-0.934,0-1.796-0.298-2.504-0.798c0.753-1.221,1.892-2.179,3.253-2.691c0.338,1.04,0.527,2.145,0.547,3.292C10.887,14.277,10.452,14.347,10,14.347 M12.147,13.776c-0.051-1.102-0.238-2.166-0.562-3.172c0.47-0.107,0.956-0.169,1.458-0.169c0.434,0,0.852,0.059,1.261,0.141C14.122,11.949,13.302,13.118,12.147,13.776 M13.043,9.565c-0.606,0-1.193,0.082-1.757,0.22c-0.131-0.324-0.276-0.64-0.434-0.95c0.903-0.427,1.74-0.969,2.505-1.595c0.558,0.677,0.909,1.527,0.974,2.456C13.912,9.62,13.485,9.565,13.043,9.565 M10,0.438c-5.281,0-9.562,4.281-9.562,9.562S4.719,19.562,10,19.562c5.281,0,9.562-4.281,9.562-9.562S15.281,0.438,10,0.438 M10,18.693c-4.801,0-8.693-3.892-8.693-8.693c0-4.801,3.892-8.693,8.693-8.693c4.802,0,8.693,3.892,8.693,8.693C18.693,14.802,14.802,18.693,10,18.693"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs">Visit</div>
                          <div className="-mt-1 font-sans text-xl font-semibold">
                            Website
                          </div>
                        </div>
                      </button>
                    )}
                    {link.name == "PlayStore" && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          window.open(`${link.url}`, "_blank");
                        }}
                        type="button"
                        className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14"
                      >
                        <div className="mr-3">
                          <svg viewBox="30 336.7 120.9 129.2" width="30">
                            <path
                              fill="#FFD400"
                              d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                            ></path>
                            <path
                              fill="#FF3333"
                              d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                            ></path>
                            <path
                              fill="#48FF48"
                              d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                            ></path>
                            <path
                              fill="#3BCCFF"
                              d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs">GET IT ON</div>
                          <div className="-mt-1 font-sans text-xl font-semibold">
                            Google Play
                          </div>
                        </div>
                      </button>
                    )}
                    {link.name == "appleStore" && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          window.open(`${link.url}`, "_blank");
                        }}
                        type="button"
                        className="flex items-center justify-center w-48 mt-3 text-black bg-transparent border border-black h-14 rounded-xl"
                      >
                        <div className="mr-3">
                          <svg viewBox="0 0 384 512" width="30">
                            <path
                              fill="currentColor"
                              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs">Download on the</div>
                          <div className="-mt-1 font-sans text-2xl font-semibold">
                            App Store
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
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
