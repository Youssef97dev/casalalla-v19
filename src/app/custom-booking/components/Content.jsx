"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Content = () => {
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full mt-16 lg:mt-32 flex flex-col justify-center items-center gap-3 px-5 lg:px-80 text-center text-secondary_2">
        <h1 className="text-[30.57px] leading-[33.22px]">
          {t("contact.title_2")}
        </h1>
        <p className="text-[16px] leading-[22.5px]">{t("contact.subtitle")}</p>
        <div className="text-[16px] leading-[22.5px] flex flex-col lg:flex-row justify-center items-center gap-2">
          <span>{t("contact.span")} </span>
          <Link href="#">{`reservations@casalallatakerkoust.com`}</Link>
        </div>
        <div className="text-[16px] leading-[22.5px] flex justify-center items-center gap-2">
          <span>Tel :</span>
          <Link href="#">{`+212 675-480103`}</Link>
        </div>
      </div>
    )
  );
};

export default Content;
