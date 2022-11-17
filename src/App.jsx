import React from "react";

import {
  Nav,
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Portfolio,
  Testimonials,
  Services,
} from "../src/components/index";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
