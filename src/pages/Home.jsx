import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import Pricing from "../components/Pricing/Pricing";
import Testimonial from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Services />
      <Pricing />
      <Banner2 />
      <Testimonial/>
    </>
  );
};

export default Home;
