import React from 'react'

const   startSection = () => {
    return (

        <div className="w-full bg-cutomDartBlue overflow-hidden flex lg:flex-row flex-col-reverse justify-center items-center lg:px-24">
            {/*----------------------- Details -----------------------*/}
            <div className="text-start lg:w-7/12 w-full mx-auto py-12 pl-10 z-20">
                {/*----------------------- Name -----------------------*/}
                <h1 className="text-3xl font-thin text-white sm:text-4xl">
                    Hi, I&#x27;m
                </h1>
                <h2 className="text-4xl font-extrabold text-white sm:text-4xl">
                     Samer Saied,

                </h2>
                <h2 className="text-2xl font-extrabold text-white sm:text-xl">

                    {/*----------------------- Title -----------------------*/}
                    <div className='p-4'>
                        <span className="block text-cutomyellow">
                            Software Developer
                        </span>
                        {/* <span className="block text-cutomyellow">
                            Flutter Mobile Developer
                        </span> */}
                        {/*  <span className="block text-cutomyellow">
                            Senior of C.S at banking field
                        </span> */}
                    </div>
                </h2>
                <p className="text-xl mt-4 text-gray-400 w-11/12 lg:w-full">
                MERN stack and Flutter developer with 5+ years of experience. I'm passionate about building high-quality, user-friendly web and mobile applications. I'm also a strong communicator and team player.                </p>
                <div className="flex flex-row">
                    <div className="mt-12  rounded-md shadow">
                        <button type="button" className="py-4 px-24  bg-cutomyellow hover:bg-cutomOrange focus:ring-cutomOrange focus:ring-offset-cutomyellow text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
            {/*----------------------- Image Section-----------------------*/}
            <div className="lg:w-5/12 w-full relative h-64 overflow-hidden flex items-center justify-center ">
                <div className="w-14 h-14 rounded-full absolute right-20 top-0 bg-cutomMidBlue opacity-5 z-10">
                </div>
                <div className="w-40 h-40 rounded-full absolute left-20 top-0 bg-cutomMidBlue opacity-5 z-10">
                </div>
                <div className="w-96 h-96 rounded-full absolute top-0 bg-cutomMidBlue opacity-5 z-50">
                </div>
                <div className="z-100 absolute top-0 w-96">
                    <img alt="profil" src="/images/samersaied.png" className="mx-auto object-fill" />
                    <div className="h-2 w-full absolute bottom-0 bg-white z-100"></div>
                </div>

            </div>
        </div>
    )
}

export default startSection
