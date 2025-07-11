"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Component Imports
import SeatMgmt from "./Seat-mgmt";
import {
  RegistrationBoard,
  SmartDigitalAccount,
  MultipleUser,
  MultipleBusiness,
  OnlineBusinessPlatform,
  SPECIALSMARTFEATURES,
  BusinessDashboard,
} from "./Allslider";

const NewSlider = () => {
  // Scroll animation for large screens
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      gsap.to(".slide", {
        scrollTrigger: {
          trigger: ".real",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        xPercent: -700,
        ease: "none",
      });
    }
  }, []);

  return (
    <div
      data-color="black"
      className="section real cont relative w-full lg:h-[800vh]"
    >
      {/* Desktop Horizontal Scroll */}
      <div className="hidden lg:flex slides overflow-hidden w-full h-[100vh] sticky top-0 left-0">
        {[SeatMgmt, RegistrationBoard, SmartDigitalAccount, MultipleUser, MultipleBusiness, OnlineBusinessPlatform, SPECIALSMARTFEATURES, BusinessDashboard].map((Component, idx) => (
          <div key={idx} className="slide flex items-center justify-center w-full h-screen flex-shrink-0">
            <Component />
          </div>
        ))}
      </div>

      {/* Mobile Vertical Scroll */}
      <div className="lg:hidden mt-[10rem] ml-5 flex flex-col items-center justify-center gap-10 mb-[100vh]">
        {[SeatMgmt, RegistrationBoard, SmartDigitalAccount, MultipleUser, MultipleBusiness, OnlineBusinessPlatform, SPECIALSMARTFEATURES, BusinessDashboard].map((Component, idx) => (
          <div key={idx} className="min-h-[140vh] w-full">
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSlider;
