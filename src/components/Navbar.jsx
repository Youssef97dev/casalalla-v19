"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-colors duration-300  ${
        scrolled
          ? "bg-background text-black shadow-md py-1"
          : "bg-transparent text-white py-3"
      }`}
    >
      <div className="w-full flex justify-between items-center mx-auto px-5 lg:px-14">
        <div className="w-full flex justify-start items-center gap-10">
          <div
            className={`pb-1 cursor-pointer ${
              scrolled ? "text-secondary" : "text-white"
            }`}
            onClick={() => setIsOpen(true)}
          >
            <IoIosMenu size={25} />
          </div>
        </div>
        {scrolled && (
          <div className="w-full flex justify-center items-center">
            <Image
              src={"/logo-1.png"}
              width={300}
              height={300}
              alt="Logo Casa lalla"
              className={`w-20 lg:w-28 `}
            />
          </div>
        )}
        <div className="w-full flex justify-end items-center">
          <Link
            href="#"
            className={`text-center border border-black bg-bgButton text-black py-1 lg:py-2 uppercase text-[15px] ${
              scrolled ? "w-[30%]" : "w-[20%]"
            }`}
          >
            {"Book Now"}
          </Link>
        </div>
        {/* Full-screen mobile menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-700"
          enterFrom="transform -translate-x-full opacity-0"
          enterTo="transform -translate-x-0 opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform -translate-x-0 opacity-100"
          leaveTo="transform -translate-x-full opacity-0"
        >
          <div className="fixed top-0 left-0 z-10 w-full lg:w-[25%] h-screen bg-white flex flex-col items-left justify-start lg:justify-center gap-16  py-14 px-20">
            <div
              className="text-black hover:text-bgButton"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size={18} />
            </div>
            <ul
              onClick={() => setIsOpen(false)}
              className="space-y-8 text-black leading-[25px] text-[16px] font-light"
            >
              <li className="pb-3 border-b  hover:text-bgButton hover:border-bgButton">
                <Link href="/">{"Home"}</Link>
              </li>
              <li className="pb-3 border-b hover:text-bgButton hover:border-bgButton">
                <Link href="#about">{"About"}</Link>
              </li>

              <li className="pb-3 border-b hover:text-bgButton hover:border-bgButton">
                <Link href="#events">{"Events"}</Link>
              </li>
              <li className="pb-3 border-b hover:text-bgButton hover:border-bgButton">
                <Link href="#activities">{"Activities"}</Link>
              </li>
              <li className="pb-3 border-b hover:text-bgButton hover:border-bgButton">
                <Link href="#" target="_blank">
                  Menu
                </Link>
              </li>
              <li className="pb-3 border-b hover:text-bgButton hover:border-bgButton">
                <Link
                  href="https://casalallatakerkoust.com/custom-booking"
                  target="_blank"
                >
                  Contact
                </Link>
              </li>
              <li className="pb-3 border-b hover:text-bgButton hover:border-bgButton">
                <Link
                  target="_blank"
                  href="https://casalallatakerkoust.com/gallery.html"
                >{`Gallery`}</Link>
              </li>
              <li className="pb-3 border-b hover:text-bgButton hover:border-bgButton flex justify-start items-center gap-5">
                <div
                  className="cursor-pointer"
                  onClick={() => changeLanguage("en")}
                >
                  <Image
                    src="/english.png"
                    width={100}
                    height={100}
                    alt="casa lalla"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => changeLanguage("fr")}
                >
                  <Image
                    src="/france.png"
                    width={100}
                    height={100}
                    alt="casa lalla"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </div>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
