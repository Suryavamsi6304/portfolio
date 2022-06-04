import React from "react";
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Nav from "./Components/nav/Nav";
import Testimonials from "./Components/testimonials/Testimonials";
import Experience from "./Components/experience/Experience";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

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
