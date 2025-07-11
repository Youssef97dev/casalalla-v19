"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center  py-10 tracking-widest px-8 lg:px-[400px] lg:text-[16px] text-[16px] text-center gap-8">
      <h1 className="font-minionPro">{t("navbar.experience")}</h1>
      <p className="font-light">{t("about.content_1")}</p>
    </div>
  );
};

export default Intro;
