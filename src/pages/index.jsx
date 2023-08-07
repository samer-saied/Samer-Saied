import React from "react";
import NavBar from "../../components/widgets/navbar";
import StartSection from "../../components/sections/startSection";
import FooterSection from "../../components/sections/footerSection";
import CardsWidget from "../../components/sections/cardsSection";
import FaqWidget from "../../components/sections/faqSection";
import ContactMeWidget from "../../components/widgets/contactme";
import Head from "next/head";

const App = () => {
  return (
    <>
      <Head>
        <title>Samer Saied</title>
        <meta name="description" content="Samer Saied Resume" />
      </Head>
      <NavBar />
      <StartSection />
      <CardsWidget />
      <FaqWidget />
      <ContactMeWidget />
      <FooterSection />
    </>
  );
};
export default App;
