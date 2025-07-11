"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  return (
    <div
      id="events"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col-reverse py-2 px-8 gap-3"
    >
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-1 lg:p-20 p-4 text-primary">
          <h1 className="text-[20px] lg:text-[20px] leading-[28px] tracking-[2px] font-minionPro font-light mb-5 text-bgButton text-justify">
            {t("events.title")}
          </h1>
          <p className="text-[16px] lg:text-[16px] font-light tracking-wider leading-[28px]  text-justify py-1">
            {t("events.content")}
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          id="events-image"
          src="/images/events-large.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full md:block hidden`}
        />
        <Image
          id="events-image"
          src="/images/events-small.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full md:hidden block`}
        />
        {/* Filter */}
      </div>
    </div>
  );
};

export default Events;
