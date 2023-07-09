import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Offerings from "../components/Offerings";
import Events from "../components/Events";
import Activities from "../components/Activities";
import Ministries from "../components/Ministries";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Events />
        <About />
        <Offerings />
        <Ministries />
        <Contact />
        <Activities />
        <Footer />
      </>
    );
  }
}

export default Home;
