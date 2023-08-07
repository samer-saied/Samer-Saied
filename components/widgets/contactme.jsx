import React, { useState } from "react";

export default function ContactMeWidget() {
  const [IsSended, setIsSended] = useState(false);
  const [IsLoading, setLoading] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();
    if (
      event.target.name.value == "" ||
      event.target.phone.value == "" ||
      event.target.body.value == ""
    ) {
      alert("You are Smart Man, but i catched You")
      return
    } else {
      setLoading(true);
      fetch("/api/msg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: event.target.name.value,
          phone: event.target.phone.value,
          body: event.target.body.value,
        }),
      }).then(async (response) => {
        const data = await response.json();
        if (data["result"] != undefined) {
          setLoading(false);
          setIsSended(true);
        } else {
          setLoading(false);
          setIsSended(false);
          alert(`Error sending message ${JSON.stringify(data)}`);
        }
      });
    }
  };

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
          if you have any questions or would like to discuss my qualifications
          further.
        </h1>
      </div>
      <form onSubmit={handleSumbit} className="flex w-full max-w-sm space-x-3">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 rounded-lg shadow bg-gray-800 border border-white">
          <div className="mb-4 text-2xl font-light text-center text-white">
            {!IsLoading && !IsSended && "Contact Me"}
            {IsLoading && !IsSended && "Sending..."}
            {!IsLoading && IsSended && "Thank You"}
            {!IsLoading && IsSended && <br></br>}
            {!IsLoading && IsSended && "Message Sent successfully."}
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            {!IsLoading && !IsSended && (
              <>
                <div className="col-span-2 ">
                  <div className=" relative ">
                    <input
                      required={true}
                      type="text"
                      id="name"
                      name="name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-span-2 ">
                  <div className=" relative ">
                    <input
                      required={true}
                      type="telephone"
                      id="phone"
                      name="phone"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      placeholder="phone"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="name">
                    <textarea
                      required={true}
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      id="body"
                      placeholder="Enter your message..."
                      name="body"
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
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
