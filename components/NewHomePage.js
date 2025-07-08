"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTypewriter } from "react-simple-typewriter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: "ROOM SEATS MANAGEMENT",
    description: "MANAGE YOUR ROOMS, SEATS, SERVICES, RECORDS & RENTS SMARTLY",
    imgSrc: "/media/roomicon.png",
    alt: "Room Seats Management",
  },
  {
    title: "ADMISSIONS & REGISTRATION",
    description: "KEEP DIGITAL RECORDS OF TENANT, ALLOT SEATS/ROOM & MANAGE DIGITAL ADMISSION WITH ZERO PAPER WORK.",
    imgSrc: "/media/registration.png",
    alt: "Admissions & Registration",
  },
  {
    title: "S-MART DIGITAL ACCOUNTANT",
    description: "S-MART BILLING FOR RENT COLLECTION & PAYMENTS, KEEP RECORDS OF EXPENSE WITH CATEGORIES, & PROFIT-LOSS REPORT",
    imgSrc: "/media/accountant.png",
    alt: "S-Mart Digital Accountant",
  },
  {
    title: "MULTIPLE USERS",
    description: "MANAGE YOUR BUSINESSES BY YOUR S-MART TEAM WORK, MAKE ROLES & RESPONSIBILITIES.",
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
    title: "ONLINE BUSINESS PLATFORM",
    description: "MARKET YOUR S-MART PROPERTY ONLINE, GET MORE LEADS & CONVERT LEADS INTO TENANT MORE FASTER",
    imgSrc: "/media/businessplatform.png",
    alt: "Online Business Platform",
  },
  {
    title: "SPECIAL S-MART FEATURES",
    description: "MANAGE: FOOD MENU, CUSTOM SALES, MONTHLY REPORTS, OFFERS ZONE, NOTIFY ON WHATSAPP, TENANT NOTICE, COMPLAINT & LEADS",
    imgSrc: "/media/smartapp.png",
    alt: "Special S-Mart Features",
  },
  {
    title: "DIFFERENT FROM OTHERS",
    description: "MANAGE; KITCHEN STOCKS, EMPLOYEE ATTENDANCE & SALARY, ELECTRICITY BILL AND SMART TENANT & EMPLOYEE VERIFICATION",
    imgSrc: "/media/differentfromothers.png",
    alt: "Different from Others",
  },
  {
    title: "S-MART TENANT APP",
    description: "FOR TRANSPARENCY, EASY RECORDS AND HASSLE FREE COMMUNICATION.",
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
    if (!contentRef.current || typeof window === "undefined") return;

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
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(".reveal-text");
    elements.forEach((text) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      const characters = text.textContent?.trim().split("") || [];
      text.textContent = "";

      characters.forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.opacity = "0";
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
    <section className="w-full px-4 py-10 lg:px-12 flex flex-col lg:flex-row gap-10">
      {/* LEFT */}
      <div className="w-full lg:w-[60%] space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          S-mart way to rent your{" "}
          <span className="text-orange-500">{typeEffect}</span>
        </h1>

        <div className="reveal-text text-gray-700 text-base sm:text-lg leading-relaxed">
          Discover a world of convenience with the S-Mart app, offering a myriad
          of features from audit trails to hassle-free rent collection. From
          maintaining electricity bills to transparent record-keeping, enjoy
          seamless operations with Google Cloud backup and restoration.
        </div>

        <div ref={contentRef} className="space-y-5">
          <h2 className="text-lg sm:text-xl font-semibold">We Manage:</h2>
          <div className="flex flex-wrap gap-3">
            {["Hostel", "PGs", "Studio", "Co-living", "Student Housing"].map(
              (item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-yellow-100 text-orange-700 shadow"
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div className="max-w-md">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full border border-gray-300 px-4 py-2 rounded-l-md text-sm focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md text-sm hover:bg-orange-600">
                Get Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-[40%] space-y-10">
        <div className="flex justify-center">
          <Image
            src="/media/girl.gif"
            alt="home"
            width={350}
            height={400}
            className="h-auto w-full max-w-[350px] sm:max-w-[400px]"
            unoptimized
            priority
          />
        </div>

        <div className="text-center px-2">
          <p className="uppercase text-sm font-semibold text-orange-600 mb-2">
            --- How the app can benefit hostel and PG owners ---
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Explore our{" "}
            <span className="text-orange-500">S-mart Features</span>
          </h2>
        </div>

        <ul className="flex flex-col gap-5">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border shadow bg-white hover:bg-gray-800 hover:text-white rounded-md transition duration-300"
            >
              <div className="w-[60px] h-[60px] flex-shrink-0">
                <img
                  src={feature.imgSrc}
                  alt={feature.alt}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm mt-1">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewHomePage;
