import React from 'react';
import Header from "./components/Header";
import Image from "./components/Image";
import Services from "./components/Services/Services";
import Works from "./components/Works Slider/Works";
import Prices from "./components/Prices";

function App() {

  return (
    <>
      <Header/>
      <Image/>
      <Services/>
      <Works/>
      <Prices/>
    </>
  );
}

export default App;
