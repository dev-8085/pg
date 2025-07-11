"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// RegistrationBoard Component
const registrationData = [
  {
    title: "E-Registration system:",
    description:
      "Efficiently manage admissions and registrations through our S-mart digital platform, saving valuable time",
  },
  {
    title: "All detail in one place",
    description:
      "Access all tenant details in one convenient location, including registration forms and essential documents.",
  },
  {
    title: "Streamline booking process",
    description:
      "Facilitate hassle-free bookings with intuitive functionality, enhancing operational efficiency.",
  },
  {
    title: "Save data for lifetime",
    description:
      "No trouble to find leaved tenant detail. Also restore admission when they again back to you.",
  },
  {
    title: "Switch room-seat",
    description:
      "Switch tenant to other room/seat without change their registration, also track modified history",
  },
];

const RegistrationBoard = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const logoRef = useRef(null);

  return (
    <div className="relative main flex items-center justify-center  ">
      <div className="w-full sticky top-0   ">
        <div className="pr-10 relative    text-[#854836]">
          <div
            className="w-[9rem] h-[9rem]  overflow-hidden rounded-full absolute  lg:left-[25%] md:left-[16rem] -translate-x-1/2 md:translate-x-0"
          >
            <Image
              src="/media/registration.png"
              className="object-cover p-3"
              alt=""
              width={200}
              height={220}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
            <div className="text-center relative md:mx-20 my-4">
              <div className="fromLeft  ">
                <div className="mt-[7rem]  ">
                  <h1
                    className="text-animation text-center font-medium text-4xl uppercase pb-3 "
                  >
                    Admission and Registration
                  </h1>
                </div>
              </div>
              <div className="ml-6">
                {registrationData?.map((item, index) => (
                  <div
                    key={`item-${index}`}
                    className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
                  >
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-full h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] lg:-ml-[4rem] hidden  lg:flex items-center justify-center overflow-hidden">
              <video
                height={1000}
                width={1000}
                autoPlay
                muted
                loop
                className="object-cover"
              >
                <source src="/videos/ok.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SmartDigitalAccount Component
const accountData = [
  {
    title: "S-mart's sales manager",
    description:
      "Streamlines rent collection effortlessly through an advanced auto billing system, minimizing administrative burdens",
  },
  {
    title: "Our platform facilitates seamless sharing",
    description:
      "Allowing users to easily distribute billing, reports, statements, and payment reminders via WhatsApp and our dedicated app.",
  },
  {
    title: "With S-mart's Expense Manager",
    description:
      "Tracking, creating, updating, and deleting expenses is simplified, with categorization for enhanced organization.",
  },
  {
    title: "Accessing accountant reports is efficient",
    description:
      "Enabling users to filter, track, and download monthly sales and expense reports for informed financial decision-making.",
  },
  {
    title: "The S-mart audit system",
    description:
      "Manages monthly profit and loss, comprehensive records on a monthly, quarterly, and yearly basis.",
  },
];

const SmartDigitalAccount = () => {
  return (
    <div className="relative flex items-center justify-center  ml-2 -pt-[2rem] my-[5rem] h-[70vh] w-[90vw]">
      <div className="w-full sticky top-0  ">
        <div className="pr-10 relative   text-[#854836]">
          <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full absolute -mt-10  lg:left-[25%] md:left-[16rem] -translate-x-1/2 md:translate-x-0">
            <Image
              src="/media/accountant.png"
              className="object-cover p-3"
              alt=""
              width={200}
              height={220}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
            <div className="text-center relative md:mx-20 my-4">
              <div className="mt-[5rem] ">
                <h1 className="text-animation text-center  font-medium text-4xl uppercase pb-3 ">
                  Smart Digital Account
                </h1>
              </div>
              <div className="">
                {accountData?.map((item, index) => (
                  <div
                    key={`data-${index}`}
                    className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
                  >
                    {item.title && <h3 className="text-xl">{item.title}</h3>}
                    {item.description && <p className="text-sm">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden  rounded-full h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] lg:-ml-[4rem] bg-red-500 lg:flex items-center justify-center overflow-hidden">
              <video
                height={1000}
                width={1000}
                autoPlay
                muted
                loop
                className="object-cover"
              >
                <source src="/videos/ok.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// MultipleUser Component
const userData = [
  {
    title: "S-Mart Team with Role Flexibility",
    description:
      "Empower the S-Mart manager to assign roles for seamless business management. Grant permissions to key staff like managers, wardens, and kitchen masters.",
  },
  {
    title: "Effortless Employee Roles",
    description:
      "Assign clear roles during employee registration, simplifying record-keeping",
  },
  {
    title: "Simple Role Management",
    description: "Easily add, remove, or update user roles",
  },
  {
    title: "Multi-Role Access for Multiple Businesses ",
    description: "Allow multi-role access across businesses.",
  },
  {
    title: "Detailed User Logs",
    description:
      "Keep track of user activities for insightful progress reports",
  },
];

const MultipleUser = () => {
  return (
    <div className="relative my-[5rem] h-[80vh] w-[90vw] flex items-center justify-center">
      <div className="w-full sticky top-0  ">
        <div className="pr-10 relative   text-[#854836]">
          <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full absolute  lg:left-[25%] md:left-[16rem] -translate-x-1/2 md:translate-x-0">
            <Image
              src="/media/team.png"
              className="object-cover p-3"
              alt=""
              width={200}
              height={220}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
            <div className="text-center relative md:mx-20 my-4">
              <div className="mt-[7rem]">
                <h1 className="text-animation text-center  font-medium text-4xl uppercase pb-3 ">
                  Multiple User
                </h1>
              </div>
              <div className="">
                {userData?.map((item, index) => (
                  <div
                    key={`item-${index}`}
                    className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
                  >
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-full h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] lg:-ml-[4rem] hidden lg:flex items-center justify-center overflow-hidden">
              <video
                height={1000}
                width={1000}
                autoPlay
                muted
                loop
                className="object-cover"
              >
                <source src="/videos/ok.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// MultipleBusiness Component
const businessData = [
  {
    title: "Unified Management:",
    description:
      "Oversee multiple businesses from one dashboard with S-mart. No more juggling platforms",
  },
  {
    title: "Streamlined Operations:",
    description:
      "Consolidate sales, expenses, and audits into a single location. Simplify workflows.",
  },
  {
    title: "Customized Access:",
    description:
      "Grant tailored permissions to team members for each business. Efficient delegation.",
  },
  {
    title: "Comprehensive Reporting:",
    description:
      "Access detailed reports for each business or generate cross-business insights easily.",
  },
  {
    title: "Seamless Integration:",
    description:
      "Integrate with existing systems smoothly. Experience cohesion across all businesses.",
  },
];

const MultipleBusiness = () => {
  return (
    <div className="relative my-[5rem] h-[70vh] -pt-[2rem] w-[90vw] flex items-center justify-center">
      <div className="w-full sticky top-0   ">
        <div className="pr-10 relative   text-[#854836]">
          <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full absolute  lg:left-[25%] md:left-[16rem] -translate-x-1/2 md:translate-x-0 ">
            <Image
              src="/media/multiplebusiness.png"
              className="object-cover p-3"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
            <div className="text-center relative md:mx-20 ">
              <div className="mt-[7rem]  ">
                <h1 className="text-animation text-center   font-medium text-4xl uppercase pb-3 ">
                  One Dashboard for <br /> Multiple Business
                </h1>
              </div>
              <div className="">
                {businessData?.map((item, index) => (
                  <div
                    key={`item-${index}`}
                    className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
                  >
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-full h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] lg:-ml-[4rem] hidden lg:flex items-center justify-center overflow-hidden">
              <video
                height={1000}
                width={1000}
                autoPlay
                muted
                loop
                className="object-cover"
              >
                <source src="/videos/ok.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// OnlineBusinessPlatform Component
const platformData = [
  {
    title: "User Profile Creation",
    description:
      "  Easily create an online business profile for your hostel or PG.",
  },
  {
    title: "Gallery & Amenities Listing",
    description:
      "Showcase your property with a visually appealing gallery. Highlight your amenities to attract potential tenants.",
  },
  {
    title: "Online Marketing Tools",
    description: " Boost your business online and reach a wider audience.",
  },
  {
    title: "Offer Creation",
    description: "Make special offers to attract and retain customers",
  },
  {
    title: "Search Functionality",
    description:
      "Tenants can easily search for listed hostels or PGs from anywhere.",
  },
];

const OnlineBusinessPlatform = () => {
  return (
    <div className="relative flex items-center justify-center my-[5rem] h-[80vh] w-[90vw]">
      <div className="w-full sticky top-0   ">
        <div className="pr-10 relative   text-[#854836]">
          <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full absolute  lg:left-[25%] md:left-[16rem] -translate-x-1/2 md:translate-x-0">
            <Image
              src="/media/businessplatform.png"
              className="object-cover p-3"
              alt=""
              width={200}
              height={220}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
            <div className="text-center relative md:mx-20 my-4">
              <div className="mt-[7rem] ">
                <h1 className="text-animation  text-center  font-medium text-4xl uppercase pb-3 ">
                  Online Business Platform
                </h1>
              </div>
              <div className="mt-2 ml-4">
                {platformData?.map((item, index) => (
                  <div
                    key={`item-${index}`}
                    className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
                  >
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-full h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] lg:-ml-[4rem] hidden  lg:flex items-center justify-center overflow-hidden">
              <video
                height={1000}
                width={1000}
                autoPlay
                muted
                loop
                className="object-cover"
              >
                <source src="/videos/ok.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SPECIALSMARTFEATURES Component
const featuresData = [
  {
    title: "Food Menu Management",
    description:
      "Easily update and manage your food offerings. Easy and time saving",
  },
  {
    title: "Custom Sales Tracking",
    description:
      "Tailor sales data to your business needs. Boost your attached business",
  },
  {
    title: "Monthly Reports Generation",
    description: "Access comprehensive reports for informed decision-making.",
  },
  {
    title: "Offers Zone Integration & Notifications",
    description:
      "Highlight special promotions to attract customers. Stay connected with customers through whatsapp msg updates.",
  },
  {
    title: "Tenant Management & CRM leads",
    description:
      "Effectively communicate with tenants regarding notices, complaint and updates. Monitor leads efficiently with S-mart lead manager  no worry to vacant hostel/pg",
  },
];

const SPECIALSMARTFEATURES = () => {
  return (
    <div className="relative my-[5rem] h-[80vh] w-[90vw] flex items-center justify-center">
      <div className="w-full sticky top-0  ">
        <div className="pr-10 relative   text-[#854836]">
          <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full absolute  lg:left-[25%] md:left-[16rem] -translate-x-1/2 md:translate-x-0 ">
            <Image
              src="/media/smartapp.png"
              className="object-cover p-3"
              alt=""
              width={200}
              height={220}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
            <div className="text-center relative md:mx-20 ">
              <div className="mt-[9rem] ">
                <h1 className="text-animation text-center  font-medium text-4xl uppercase pb-3 ">
                  Special S-mart Features
                </h1>
              </div>
              <div className="">
                {featuresData?.map((item, index) => (
                  <div
                    key={`item-${index}`}
                    className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
                  >
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-full h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] lg:-ml-[4rem] hidden lg:flex items-center justify-center overflow-hidden">
              <video
                height={1000}
                width={1000}
                autoPlay
                muted
                loop
                className="object-cover"
              >
                <source src="/videos/ok.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// BusinessDashboard Component
const dashboardData = [
  {
    title: "Kitchen Stock Management",
    description: "Efficiently track and manage your kitchen inventory.",
  },
  {
    title: "Employee Management System",
    description:
      "Streamline registration, attendance tracking, and automate salary processing.",
  },
  {
    title: "Electricity Bill Management",
    description:
      "Calculate, monitor, and manage electricity bills for individual tenants.",
  },
  {
    title: "Smart Tenant & Employee Verification",
    description:
      "Implement secure and efficient verification processes for tenants and employees",
  },
  {
    title: "Distinct Features for Comprehensive Management",
    description:
      "Set yourself apart with tailored features for holistic business management.",
  },
];

const BusinessDashboard = () => {
  return (
    <div className="relative flex items-center justify-center my-[5rem] -pt-[2rem] h-[70vh] w-[90vw]">
      <div className="w-full sticky top-0   ">
        <div className="p2-10 relative   text-[#854836]">
          <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full absolute  lg:left-[27%] md:left-[16rem] -translate-x-1/2 md:translate-x-0 ">
            <Image
              src="/media/differentfromothers.png"
              className="object-cover"
              alt=""
              width={200}
              height={220}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
            <div className="text-center relative md:mx-20 mt-4">
              <div className="mt-[7rem] ">
                <h1 className="text-animation text-center  font-medium text-4xl uppercase pb-1 ">
                  Different from Others
                </h1>
              </div>
              <div className="">
                {dashboardData?.map((item, index) => (
                  <div
                    key={`data-card-${index}`}
                    className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
                  >
                    {item.title && <h3 className="text-xl">{item.title}</h3>}
                    {item.description && <p className="text-sm">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-full h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] lg:-ml-[4rem] hidden lg:flex items-center justify-center overflow-hidden">
              <video
                height={1000}
                width={1000}
                autoPlay
                muted
                loop
                className="object-cover"
              >
                <source src="/videos/ok.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  RegistrationBoard,
  SmartDigitalAccount,
  MultipleUser,
  MultipleBusiness,
  OnlineBusinessPlatform,
  SPECIALSMARTFEATURES,
  BusinessDashboard
};