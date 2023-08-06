import React from "react";
import faqData from "../../data/faq-data";

export default function faqWidget() {
  return (
    <div id="faq_section">
      <div className="mx-auto w-full bg-cutomMidBlue lg:px-28 px-8 py-10 ">
        <h2 className="mb-12 text-3xl font-extrabold leading-9 text-white border-b-2 border-white">
          FAQs
        </h2>
        <ul className="flex xl:flex-wrap lg:flex-row flex-col items-start justify-center lg:gap-8 px-5">
          {faqData.map((faqElement) => {
            return (
              <li key={faqElement.q} className="lg:w-2/5 w-full">
                <p className="text-lg font-medium leading-6 pt-4 text-cutomDartBlue">
                  {faqElement.q}
                </p>
                <div className="mt-2">
                  {faqElement["a"].map((answerElement) => {
                    return (
                      <div key={answerElement} className="flex flex-row">
                        <p className="text-base leading-6 text-white px-2">-</p>
                        <p className="text-base leading-6 text-white">
                          {answerElement}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
