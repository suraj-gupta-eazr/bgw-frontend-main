import React from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Analytics />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
