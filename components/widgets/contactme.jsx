import React from "react";

export default function contactMeWidget() {
  return (
    <div
      id="contact_section"
      className="flex flex-col justify-center items-center p-10 bg-gray-800"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-normal text-3xl">
          Please feel free to contact me
        </h1>
        {/* <h1 className="text-white font-light text-xl">
        
        </h1> */}
        <h1 className="text-white font-light text-xl text-center">
        if you have any questions or would like to discuss my qualifications further.
        </h1>
      </div>
      <form className="flex w-full max-w-sm space-x-3">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800 border border-white">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 ">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-span-2 ">
              <div className=" relative ">
                <input
                  type="telephone"
                  id="contact-form-phone"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder="phone"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  id="msg"
                  placeholder="Enter your message..."
                  name="msg"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4  bg-cutomyellow hover:bg-cutomOrange focus:ring-cutomOrange focus:ring-offset-cutomyellow text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
