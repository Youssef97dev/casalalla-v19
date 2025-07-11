"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const Accordion = dynamic(() => import("./Accordion"), { ssr: false });
import { useTranslation } from "react-i18next";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const itemsMobile = [
  {
    src: "/images/activities-small-1.jpg",
    type: "image",
  },
  {
    src: "/images/activities-small-2.jpg",
    type: "image",
  },
  {
    src: "/images/activities-small-3.jpg",
    type: "image",
  },
  {
    src: "/video-4.mp4",
    type: "video",
  },
  {
    src: "/video-5.mp4",
    type: "video",
  },
  {
    src: "/video-6.mp4",
    type: "video",
  },
];

const Activities = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div
        id="activities"
        className="w-full h-full lg:h-full flex md:flex-row-reverse flex-col py-2 px-8 gap-3"
      >
        <div className="relative w-full">
          <Image
            src="/images/activities.jpg"
            alt="agafay activities, agafay marrakech, agafay activité, lalla takerkoust activities"
            height={1000}
            width={1000}
            priority
            className="object-cover w-full h-[80vh] md:block hidden"
          />
          <div className="w-full h-[60vh] md:hidden block">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              speed={1400}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next-ex1",
                prevEl: ".swiper-button-prev-ex1",
              }}
              className="swiper w-full h-full"
              id="slider1"
            >
              <div className="swiper-wrapper">
                {itemsMobile.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      {item.type === "image" ? (
                        <Image
                          src={`${item.src}`}
                          alt="agafay activities, lalla takerkoust marrakech, agafay activité, lalla takerkoust activities"
                          width={1000}
                          height={1000}
                          priority
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <video
                          className="object-cover h-full w-full"
                          autoPlay
                          loop
                          muted
                        >
                          <source src={`${item.src}`} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
          {/* Filter */}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 pt-10 pb-5 px-5">
          <div
            className="w-full h-full flex flex-col justify-start items-
           gap-1 text-center"
          >
            <h1 className="text-[20px] lg:text-[20px] leading-[28px] tracking-[2px] font-minionPro font-light mb-5 text-bgButton text-center">
              {t("activities.title")}
            </h1>
            <Accordion />
            <Link
              href="/custom-booking"
              className="w-full text-center mt-2 py-2 px-8 uppercase tracking-widest border border-bgButton text-bgButton rounded-lg text-[12px] leading-[34px] hover:bg-bgButton hover:text-white duration-200 transition-all ease-out"
            >
              {t("activities.book_experience")}
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Activities;
