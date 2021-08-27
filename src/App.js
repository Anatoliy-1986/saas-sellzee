import React from "react";
import About from "./components/about/index";
import Platforms from "./components/platforms/index";
import Vision from "./components/vision/index";
import Reviews from "./components/reviews/index";
import Subscription from "./components/subscription/index";
import Newsletter from "./components/newsletter/index";
import Footer from "./components/footer/index";
import GlobalStyles from "./GlobalStyles";




function App() {
  return (
    <>
      <GlobalStyles />
      <About />
      <Platforms />
      <Vision />
      <Reviews />
      <Subscription />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
