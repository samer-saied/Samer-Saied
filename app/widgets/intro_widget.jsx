"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const headings = ["Imagine", "Create", "Launch"];

export default function IntroWidget() {
  const [current, setCurrent] = useState(0);
  const refs = [useRef(null), useRef(null), useRef(null)];
  const inView = useInView(refs[current], { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView && current < headings.length - 1) {
      const timer = setTimeout(() => setCurrent(current + 1), 1000); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [inView, current]);

  const variants = {
    hidden: { opacity: 0, x: -160 },
    hiddenReverse: { opacity: 0, x: 160 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col items-center justify-start text-center p-8 w-full min-h-screen">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-xl md:text-4xl mx-auto text-gray-300 leading-relaxed text-center mt-16 md:px-8 px-2"
      >
        We bring your imagination to life through <br /> stunning websites and powerful mobile applications.
      </motion.p>
      <div className="flex flex-row justify-center items-center md:pt-32 pt-16 md:gap-6 gap-3 pr-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl">
          JUST
        </h1>
        <motion.h1
          key={current}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-6xl md:text-6xl font-extrabold mb-4 w-12 text-white text-shadow-md text-shadow-darknight"
        >
          {current + 1}
        </motion.h1>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl">
          STEPS
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:items-start items-center w-full md:mt-16 mt-8 gap-8">
        {headings.map((text, idx) =>
          idx <= current ? (
            <motion.h1
              key={text}
              ref={refs[idx]}
              initial={idx % 2 ? "hiddenReverse" : "hidden"}
              animate="visible"
              variants={variants}
              className="text-4xl md:text-6xl font-extrabold capitalize md:mb-4 mb-1 text-shadow-lg text-shadow-darknight md:w-2/6"
            >
              {text}
            </motion.h1>
          ) : null
        )}
      </div>
    </div>
  );
}
