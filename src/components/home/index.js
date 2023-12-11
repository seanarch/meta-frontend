import React from "react";
import { Fragment } from "react";
import HeaderElement from "../header/HeaderElement";
import Specials from "../specials";
import Footer from "../footer";
import HeroSection from "../hero";

const Home = () => {
  return (
    <Fragment>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <Footer />
    </Fragment>
  );
};

export default Home;
