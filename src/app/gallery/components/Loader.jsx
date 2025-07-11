"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Gallery from "./Gallery";
import Footer from "@/components/Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative flex flex-col justify-center items-center gap-2 md:gap-0">
          <Gallery />
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
