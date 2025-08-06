"use client";
import { motion } from "framer-motion";

function IntroProfileWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0, duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full p-4 mb-6 rounded-lg shadow bg-gradient-to-b from-transparent md:w-2/3 to-darknight sm:inline-block"
    >
        <div className="flex items-start text-left ">
          <div className="">
            <p className="flex flex-col ">
              <span className="text-white font-bold text-4xl">
                Crafting High-Performance
              </span>
              <span className="text-white font-bold text-5xl">
                Mobile & Web Experiences
              </span>
            </p>
            <div className="flex items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 1792 1792"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 1792 1792"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 1792 1792"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 1792 1792"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 1792 1792"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3 ml-6">
          <p className=" text-left mt-2 font-light text-white">
            With 5 years of experience in mobile development, I specialize in
            building robust and scalable cross-platform applications using
            Flutter.
          </p>
          <p className=" text-left mt-2 font-light text-white">
            And With Good experience of MERN stack website development.
          </p>
          <p className=" text-left mt-2 font-light text-white">
            My passion lies in solving challenging technical problems and
            delivering exceptional user experiences.
          </p>
        </div>
    </motion.div>
  );
}

export default IntroProfileWidget;
