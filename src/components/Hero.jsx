"use client";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import hooks for scroll handling

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Parallax Image Container */}
      <div className="absolute inset-0 -z-10 hidden lg:block">
        <Image
          src="/images/hero-casalalla-large.jpg"
          alt="jet ski lalla takerkoust, casa lalla takerkoust menu, quad lalla takerkoust, lalla takerkoust agafay"
          height={2000}
          width={2000}
          className="object-cover h-full w-full"
          style={{
            transform: `translateY(${offsetY * 0.8}px)`,
            willChange: "transform",
          }}
        />
      </div>
      <div className="absolute inset-0 -z-10 block lg:hidden">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/q2nzpahlmh9ptokalfbk"
          alt="jet ski lalla takerkoust, casa lalla takerkoust menu, quad lalla takerkoust, lalla takerkoust agafay"
          height={2000}
          width={2000}
          className="object-cover h-full w-full"
          style={{
            transform: `translateY(${offsetY * 0.8}px)`,
            willChange: "transform",
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 hidden lg:block"></div>

      {/* Logo */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2">
        <Image
          src="/logo-2.png"
          width={1000}
          height={1000}
          className="w-48"
          alt="logo casalalla"
        />
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
