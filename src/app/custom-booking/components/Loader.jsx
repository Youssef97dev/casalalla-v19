"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Content from "./Content";
import FormMessage from "./FormMessage";
import Mapbox from "./Mapbox";
import Footer from "@/components/Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative flex flex-col justify-center items-center gap-2 md:gap-0">
          <Content />
          <FormMessage />
          <Mapbox />
          <Footer />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <CircleLoader color="#ad9071" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
