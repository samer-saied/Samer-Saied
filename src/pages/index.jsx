
import React from 'react';
import NavBar from '../../components/widgets/navbar'
import StartSection from '../../components/sections/startSection';
import FooterSection from '../../components/sections/footerSection';
import CardsWidget from '../../components/sections/cardsSection'
import FaqWidget from '../../components/sections/faqSection'
import  ContactMeWidget from '../../components/widgets/contactme';

const { useState } = React;
const App = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <NavBar></NavBar>
      <StartSection></StartSection>
      <CardsWidget />
      <FaqWidget />
      <ContactMeWidget></ContactMeWidget>
      <FooterSection></FooterSection>
    </>
  );
};
export default App;
