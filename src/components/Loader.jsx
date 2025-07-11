"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import About from "./About";
import Events from "./Events";
import Activities from "./Activities";
import Kitchen from "./Kitchen";
import Footer from "./Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative">
          <Navbar />
          <Hero />
          <Intro />
          <About />
          <Events />
          <Activities />
          <Kitchen />
          <Footer />
          {/*<div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <Buttons />
          </div>*/}
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
          <BounceLoader color="#9d2d24" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
