import React, { useRef } from "react";
import NavBar from "../../components/widgets/navbar";
import StartSection from "../../components/sections/startSection";
import FooterSection from "../../components/sections/footerSection";
import CardsWidget from "../../components/sections/cardsSection";
import FaqWidget from "../../components/sections/faqSection";
import ContactMeWidget from "../../components/widgets/contactme";
import Head from "next/head";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const App = () => {
  const tawkMessengerRef = useRef();

  // const handleMinimize= () => {
  //     tawkMessengerRef.current.minimize();
  // };

  return (
    <>
      <Head>
        <title>Samer Saied</title>
        <meta name="description" content="Samer Saied Resume" />
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="theme-color" content="#1F2937" />

      </Head>
      <NavBar />
      <StartSection />
      <CardsWidget />
      <FaqWidget />
      <ContactMeWidget />
      <FooterSection />
      <TawkMessengerReact
                propertyId="64fbb51eb2d3e13950eec827"
                widgetId="1h9rjmvn7"
                ref={tawkMessengerRef}/>
    </>
  );
};
export default App;
