"use client";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Accordion = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("1");

  const content = [
    {
      id: "1",
      title: `${t("activities.title_1")}`,
      text: [
        {
          description: `${t("activities.trans_desc")}`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "2",
      title: "Quad / Buggy Tour",
      text: [
        {
          description: `${t("activities.quad_desc")}`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "3",
      title: "Jetski",
      text: [
        {
          description: `${t("activities.jetski_desc")}`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "4",
      title: `${t("activities.title_4")}`,
      text: [
        {
          description: `${t("activities.hike_desc")}`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "5",
      title: `${t("activities.title_5")}`,
      text: [
        {
          description: `${t("activities.riding_desc")}`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "6",
      title: `${t("activities.title_6")}`,
      text: [
        {
          description: `${t("activities.agafay_desc_1")}`,
        },
        {
          description: `${t("activities.agafay_desc_2")}`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
    {
      id: "7",
      title: `${t("activities.title_7")}`,
      text: [
        {
          description: `${t("activities.bike_desc")}`,
        },
      ],
      class: "border-t  border-secondary_2",
    },
  ];

  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <div className="w-full">
      <div className=" font-normal">
        {content.map((item, i) => (
          <div key={i} className={item.class}>
            <button
              type="button"
              className={`py-4 w-full flex items-center text-[13px] leading-[30px] font-minionPro `}
              onClick={() => togglePara(item.id)}
            >
              {item.title}
              <div className={`ml-auto text-bgButton`}>
                {active === item.id ? (
                  <AiOutlineMinus size={22} />
                ) : (
                  <AiOutlinePlus size={22} />
                )}
              </div>
            </button>
            <div>
              <AnimateHeight
                duration={300}
                height={active === item.id ? "auto" : 0}
              >
                <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-bgButton font-light text-justify">
                  {item.text.map((text, i) => (
                    <p key={i}>{text.description}</p>
                  ))}
                </div>
              </AnimateHeight>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
