"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import i18next from "../../i18n";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div className="w-full min-h-[16vh] bg-bgFooter flex flex-col justify-center items-center gap-3 pt-3 lg:pb-3 text-black text-[14px] leading-[30px] italic font-light">
        <span>@2025 Casa Lalla Takekoust</span>
        <span>Lalla Takerkoust, Marrakech 40000 Morocco</span>
        <div className="w-full flex justify-center items-center gap-4 px-3 py-2">
          <div className="cursor-pointer" onClick={() => changeLanguage("en")}>
            <Image
              src="/english.png"
              alt="casalalla takerkoust lac"
              width={500}
              height={500}
              priority
              className="w-7 h-7"
            />
          </div>
          <div className="cursor-pointer" onClick={() => changeLanguage("fr")}>
            <Image
              src="/france.png"
              alt="barrage lalla takerkoust"
              width={500}
              height={500}
              priority
              className="w-7 h-7"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Footer;
