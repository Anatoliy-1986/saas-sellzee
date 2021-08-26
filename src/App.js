import React from "react";
import About from "./components/about/index";
import Platforms from "./components/platforms/index";
import Vision from "./components/vision/index";
import GlobalStyles from "./GlobalStyles";



function App() {
  return (
    <>
      <GlobalStyles />
      <About />
      <Platforms />
      <Vision />
    </>
  );
}

export default App;
