"use client";
import { useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "ROOM SEATS MANAGEMENT",
    description: "MANAGE YOUR ROOMS, SEATS, SERVICES, RECORDS & RENTS SMARTLY",
    imgSrc: "/media/roomicon.png",
    alt: "Room Seats Management",
  },
  {
    title: "ADMISSIONS & REGISTRATION",
    description:
      "KEEP DIGITAL RECORDS OF TENANT, ALLOT SEATS/ROOM & MANAGE DIGITAL ADMISSION WITH ZERO PAPER WORK.",
    imgSrc: "/media/registration.png",
    alt: "Admissions & Registration",
  },
  {
    title: "S-MART DIGITAL ACCOUNTANT",
    description:
      "S-MART BILLING FOR RENT COLLECTION & PAYMENTS, KEEP RECORDS OF EXPENSE WITH CATEGORIES, & PROFIT-LOSS REPORT",
    imgSrc: "/media/accountant.png",
    alt: "S-Mart Digital Accountant",
  },
  {
    title: "MULTIPLE USERS",
    description:
      "MANAGE YOUR BUSINESSES BY YOUR S-MART TEAM WORK, MAKE ROLES & RESPONSIBILITIES.",
    imgSrc: "/media/team.png",
    alt: "Multiple Users",
  },
  {
    title: "ONE DASHBOARD FOR MULTIPLE BUSINESSES.",
    description: "CREATE MULTIPLE ACCOUNTS ON 1 S-MART APP.",
    imgSrc: "/media/multiplebusiness.png",
    alt: "One Dashboard for Multiple Businesses",
  },
  {
    title: "ONLINE BUNSINESS PLATFORM",
    description:
      "MARKET YOUR S-MART PROPERTY ONLINE, GET MORE LEADS & CONVERT LEADS INTO TENANT MORE FASTER",
    imgSrc: "/media/businessplatform.png",
    alt: "Online Business Platform",
  },
  {
    title: "SPECIAL S-MART FEATURES",
    description:
      "MANAGE: FOOD MENU, CUSTOM SALES, MONTHLY REPORTS, OFFERS ZONE, NOTIFY ON WHATSAPP, TENANT NOTICE, COMPLAINT & LEADS",
    imgSrc: "/media/smartapp.png",
    alt: "Special S-Mart Features",
  },
  {
    title: "DIFFERENT FROM OTHERS",
    description:
      "MANAGE; KITCHEN STOCKS, EMPLOYEE ATTENDANCE & SALARY, ELECTRICITY BILL AND SMART TENANT & EMPLOYEE VERIFICATION",
    imgSrc: "/media/differentfromothers.png",
    alt: "Different from Others",
  },
  {
    title: "S-MART TENANT APP",
    description:
      "FOR TRANSPARENCY, EASY RECORDS AND HASSLE FREE COMMUNICATION.",
    imgSrc: "/media/tenantapp.png",
    alt: "S-Mart Tenant App",
  },
];

const NewHomePage = () => {
  const [typeEffect] = useTypewriter({
    words: ["PGs", "Hostel"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.in",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".reveal-text").forEach((text) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
      });

      const characters = text.textContent.trim().split("");

      text.textContent = "";

      characters.forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.opacity = 0;
        text.appendChild(charSpan);

        timeline.to(charSpan, {
          opacity: 1,
          duration: 0.5,
          ease: "power3.inOut",
        });
      });
    });
  }, []);

  return (
    <div className="section w-full flex gap-3 flex-col lg:flex-row justify-between items-start px-10 py-10 relative">
      <div className="lftcontainer lg:sticky lg:top-0 lg:w-[65vw] px-4 lg:py-[3rem]">
        <h1 className="text-2xl lg:text-5xl py-4 pl-2 lg:pl-5 lg:ml-10 font-bold lg:py-3">
          S-mart way to rent <br /> your&nbsp;
          <span className=" text-[#ED7C24]">{typeEffect}</span>
        </h1>
        <div className="reveal-text">
          <p className="text-sm font-semibold lg:text-base lg:w-3/4 px-2 lg:px-4 lg:ml-10 text-justify leading-tight">
            Discover a world of convenience with the S-Mart app, offering a
            myriad of features from audit trails to hassle-free rent collection.
            From maintaining electricity bills to transparent record-keeping,
            enjoy seamless operations with Google Cloud backup and restoration.
            Stay organized with expense reports, admission management, and
            tenant complaints, all in one user-friendly platform for efficient
            property management.
          </p>
        </div>
        <div ref={contentRef}>
          <div className="mt-5 lg:mt-10 font-bold text-base lg:text-lg">
            <h1 className="px-2 lg:px-4 lg:ml-7">We Manage</h1>
            <div className="mt-3 ml-2 lg:ml-7 flex flex-wrap gap-2 lg:gap-4">
              {[
                "Hostel",
                "PGs",
                "Studio",
                "Co-living",
                "Student Housing",
              ].map((item, i) => (
                <div
                  key={i}
                  className="shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200"
                >
                  <div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="#ED7C24"
                    >
                      <path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-sm text-center font-semibold">{item}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-md mt-5">
            <div className="m-3">
              <label htmlFor="mobile-number" className="sr-only">
                Enter Mobile Number
              </label>
              <div className="flex rounded-lg shadow-sm">
                <input
                  type="text"
                  id="mobile-number"
                  name="mobile-number"
                  placeholder="Enter Mobile Number"
                  className="py-2 placeholder-orange-500 px-4 block w-full border-gray-200 shadow-sm rounded-l-lg text-sm focus:ring-orange-700 focus:border-orange-700 focus:ring-1 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                />
                <button
                  type="button"
                  className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-r-lg bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Get Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rgtContainer w-full lg:w-[50vw]">
        <div className="rgt opacity-100 lg:-mb-[5rem] h-full">
         <Image src="/media/girl.gif" alt="home" width={400} height={450} />

        </div>

        <ul className="flex flex-col gap-5 lg:w-[40vw]">
          <div>
            <p className="text-center uppercase text-base font-bold mt-24 text-primary-500">
              --- <span> How the app can benefit hostel and PG owners</span> ---
            </p>
            <h2 className="text-center font-display text-4xl font-bold tracking-tight text-slate-900 mb-10">
              Explore our &nbsp;
              <span className="text-[#e27f1b]">S-mart Features</span>
            </h2>
          </div>
          {features.map((feature, index) => (
            <li
              key={index}
              className="border border-black shadow-lg lg:h-[14rem] bg-[#fff] hover:bg-[#a5a4a4] lg:w-[32rem] rounded text-[#000] hover:text-white p-8 flex items-center justify-between transform transition duration-500 hover:scale-110"
            >
              <div className="text-center">
                <div className="mx-auto h-[5rem] w-[5rem] overflow-hidden">
                  <img
                    src={feature.imgSrc}
                    alt={feature.alt}
                    className="object-cover mt-1"
                  />
                </div>
                <h3 className="my-3 font-display text-lg text-black font-black">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewHomePage;