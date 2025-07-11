"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Kitchen = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="kitchen"
      className="w-full h-full lg:h-screen flex md:flex-row flex-col py-2 px-8 gap-3"
    >
      <div className="relative w-full">
        <Image
          src={
            "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_5_t1kw35"
          }
          height={1000}
          width={1000}
          alt="lalla takerkoust lake, barrage lalla takerkoust, lalla takerkoust weather, lalla takerkoust activités"
          priority
          className="object-cover w-full h-full"
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-1 lg:p-20 p-4 text-primary">
          <h1 className="text-[20px] lg:text-[20px] leading-[28px] tracking-[2px] font-minionPro font-light mb-5 text-bgButton text-justify">
            {t("kitchen.title")}
          </h1>
          <p className="text-[16px] lg:text-[16px] font-light  tracking-wider leading-[28px]  text-justify py-1">
            {t("kitchen.content_1")}
          </p>
          <p className="text-[16px] lg:text-[16px] font-light  tracking-wider leading-[28px]  text-justify py-1">
            {t("kitchen.content_2")}
          </p>
          <p className="text-[16px] lg:text-[16px] font-light  tracking-wider leading-[28px]  text-justify py-1">
            {t("kitchen.content_3")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
