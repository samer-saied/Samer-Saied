import Image from "next/image";
import CardsSection from "./widgets/projects_widget";
import IntroWidget from "./widgets/intro_widget";
import SkillsWidget from "./widgets/skills_widget";
import InfoProfileWidget from "./widgets/info_profile_widget";
import IntroProfileWidget from "./widgets/intro_profile_widget";
import ContactMeWidget from "./widgets/contactme_widget";

function ProfilePage() {
  const backGroundLink =
    "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Adjust the path as necessary
  return (
    <div className="relative min-h-screen bg-gray-100">
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
        <div className="md:h-screen flex flex-col items-center justify-center md:p-4 text-center">
          {/* Initial content that sits on the first "screen" over the sticky background */}
          <div className="md:mt-30 mt-10 flex flex-col md:flex-row md:gap-4 text-center md:p-4 w-11/12">
            <InfoProfileWidget />
            <IntroProfileWidget />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <IntroWidget />
          {/* Add more content here to ensure scrolling */}
          <span className=" border-t-4 drop-shadow-md w-24"></span>
        </div>

        {/* --- */}
        {/* Additional scrolling content blocks */}
        <div className=" text-white shadow-xl">
          <CardsSection />
        </div>
        <div className=" text-white py-16 px-4 shadow-xl">
          <SkillsWidget />
        </div>
        <div className="flex flex-col justify-center items-center bg-darknight text-white min-h-screen px-4 shadow-xl ">
          <ContactMeWidget />
        </div>
        <div className="flex flex-col justify-center items-center bg-lightpurple opacity-80 text-white h-fit py-4 shadow-xl text-xs px-8 ">
          <p>Copyright © 2024 – 2025 All Rights Reserved</p>
          <p>
            No part of this website or projects which shown above may be reproduced or distributed without
            prior written permission from the copyright owner.
          </p>
          <p>
            t: +20 10 10 199 177 | samersaied02@gmail.com | Terms Of Use | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
