"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ClockLoader } from "react-spinners";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const FormMessage = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const { t } = useTranslation();

  const { values } = formData;

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const sendMessage = async () => {
    if (
      values.firstName !== "" &&
      values.lastName !== "" &&
      values.email !== "" &&
      values.subject !== "" &&
      values.message !== ""
    ) {
      const serviceId = "service_zk1myao";
      const templateId = "template_tlihdyh";
      try {
        setLoading(true);
        const res = await emailjs.send(serviceId, templateId, {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          subject: values.subject,
          message: values.message,
        });
        if (res.status === 200) {
          setMessageSent(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    emailjs.init("1D9YARxa2KB7aQtKm");
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] my-20 px-5 lg:px-80 text-secondary_2">
        {!messageSent ? (
          <>
            <div className="w-full flex justify-center items-center gap-3">
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label htmlFor="firstName">{t("contact.firstname")}</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border border-border_color focus:outline-none"
                  required
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label htmlFor="lastName">{t("contact.lastname")}</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border border-border_color focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="email">{t("contact.email")}</label>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                className="w-full rounded-md p-2 border border-border_color focus:outline-none"
                required
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="subject">{t("contact.subject")}</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={values.subject}
                onChange={handleChange}
                className="w-full rounded-md p-2 border border-border_color focus:outline-none"
                required
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                className="w-full rounded-md p-2 border border-border_color focus:outline-none"
                rows={4}
              />
            </div>
            <button
              onClick={() => sendMessage()}
              className="py-4 px-6 border border-border_color mr-auto uppercase"
              disabled={loading}
            >
              {loading ? (
                <ClockLoader size={20} color="#be1522" />
              ) : (
                t("contact.submit")
              )}
            </button>
          </>
        ) : (
          <div className="w-full flex items-center p-3.5 rounded text-[#00AB55] bg-[#DDF5F0] mt-3">
            <span className="pr-2">
              <strong className="mr-1">Success!</strong>Thank you for your
              message.
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

export default FormMessage;
