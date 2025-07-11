"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ClockLoader } from "react-spinners";
import Link from "next/link";
import dynamic from "next/dynamic";

import BookInfoOne from "./BookInfoOne";
import BookInfoTwo from "./BookInfoTwo";
import BookInfoTree from "./BookInfoTree";
import BookInfoShared from "./BookInfoShared";
const MobileSlides = dynamic(() => import("./MobileSlides"), {
  ssr: false,
});
const DesktopSlides = dynamic(() => import("./DesktopSlides"), {
  ssr: false,
});

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Book = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(0);
  const [timeBook, setTimeBook] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clickBook = async () => {
    if (activeTab === 3) {
      const serviceId = "service_zk1myao";
      const templateId = "template_c262tqj";
      try {
        setLoading(true);
        const res = await emailjs.send(serviceId, templateId, {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          number_personne: numberGuests,
          date: new Intl.DateTimeFormat("en-En", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(startDate),
          time: timeBook,
          comment: formData.comment,
        });
        if (res.status === 200) {
          setMessageSent(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setActiveTab(activeTab === 1 ? 2 : 3);
    }
  };

  useEffect(() => {
    emailjs.init("1D9YARxa2KB7aQtKm");
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    isClient && (
      <div className="w-full flex flex-col justify-center items-center">
        {isMobile ? <MobileSlides /> : <DesktopSlides />}

        {!messageSent ? (
          <div className="w-full flex flex-col justify-center items-center gap-4 bg-[#FFFFFF] py-4 px-3 lg:px-5">
            {activeTab === 1 && (
              <BookInfoOne
                startDate={startDate}
                setStartDate={setStartDate}
                setNumberGuests={setNumberGuests}
                timeBook={timeBook}
                setTimeBook={setTimeBook}
              />
            )}
            {activeTab === 2 && (
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <BookInfoShared
                  startDate={startDate}
                  timeBook={timeBook}
                  numberGuests={numberGuests}
                />
                <BookInfoTwo formData={formData} handleChange={handleChange} />
              </div>
            )}
            {activeTab === 3 && (
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <BookInfoShared
                  startDate={startDate}
                  timeBook={timeBook}
                  numberGuests={numberGuests}
                />
                <BookInfoTree
                  startDate={startDate}
                  timeBook={timeBook}
                  numberGuests={numberGuests}
                  formData={formData}
                />
              </div>
            )}
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 lg:gap-36">
              <button
                type="button"
                className={`w-full text-[14px] leading-[20px] border border-gray-400 px-3 py-2 bg-[#F9FBFB] text-[#4B5563] rounded-md ${
                  activeTab === 1 ? "hidden" : ""
                }`}
                onClick={() => setActiveTab(activeTab === 3 ? 2 : 1)}
              >
                Back
              </button>
              <button
                type="button"
                className="w-full text-[14px] leading-[20px] disabled:bg-[#F3F4F6] disabled:text-[#4B5563] disabled:cursor-not-allowed border border-gray-400 px-3 py-2 bg-primary text-white rounded-md flex justify-center items-center"
                onClick={() => clickBook()}
                disabled={
                  activeTab === 1
                    ? numberGuests === 0 || timeBook.length === 0
                    : activeTab === 2
                    ? formData.firstName.length === 0 ||
                      formData.lastName.length === 0 ||
                      formData.email.length === 0 ||
                      formData.phone.length === 0
                    : loading
                }
              >
                {activeTab === 3 ? (
                  loading ? (
                    <ClockLoader size={20} color="#000000" />
                  ) : (
                    "Book"
                  )
                ) : (
                  "Next"
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center p-3.5 rounded text-[#00AB55] bg-[#DDF5F0] mt-3">
            <span className="pr-2">
              <strong className="mr-1">Success!</strong>Thank you for your
              request, we will get back to you as soon as possible
            </span>
            <Link
              href="/"
              className="ml-auto bg-[#00AB55] text-[#DDF5F0] rounded hover:opacity-80 px-3 py-1"
            >
              Home
            </Link>
          </div>
        )}
      </div>
    )
  );
};

export default Book;
