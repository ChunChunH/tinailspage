import React from 'react';
import Header from "./components/Header";
import Image from "./components/Image";
import Services from "./components/Services/Services";
import Works from "./components/Works Slider/Works";
import Prices from "./components/Prices/Prices";
import Contact from "./components/Contact/Contact";
import { animateScroll as scroll} from "react-scroll";
import { Element } from "react-scroll";
import ScrollToTop from "./components/ScrollToTop"

function App() {



  return (
    <>
      <Element name="header">
        <Header/>
      </Element> 

      <Element name="image">
        <Image/>
      </Element>

      <Element name="services">
        <Services/>
      </Element>

      <Element name="works">
        <Works/>
      </Element>

      <Element name="prices">
        <Prices/>
      </Element>

      <Element name="contact">
        <Contact/>
      </Element>

      <ScrollToTop/>
    </>
  );
}

export default App;
