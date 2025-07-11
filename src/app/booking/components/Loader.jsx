"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CircleLoader } from "react-spinners";
const Book = dynamic(() => import("./Book"), {
  ssr: false,
});
import Link from "next/link";
import {
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareEnvelope,
} from "react-icons/fa6";

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
        <div className="bg-[#F5EDE2] w-full h-full flex flex-col justify-start items-center px-0 lg:px-20 xl:px-96 py-0 lg:py-10">
          <Book />
          <div className="w-full h-full py-5 flex gap-2 justify-center text-[#333333] items-center">
            <Link
              target="_blank"
              href="mailto:reservations@casalallatakerkoust.com"
            >
              <FaSquareEnvelope size={30} className="cursor-pointer" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/casa.lalla.takerkoust"
            >
              <FaSquareInstagram size={30} className="cursor-pointer" />
            </Link>
            <Link target="_blank" href="http://wa.me/212675480103">
              <FaSquareWhatsapp size={30} className="cursor-pointer" />
            </Link>
          </div>
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
