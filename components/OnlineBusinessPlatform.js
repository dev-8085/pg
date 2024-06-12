"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
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
								{/* <div className="w-[9rem] h-[9rem] overflow-hidden rounded-full flex items-center justify-around">
									<Image
										src="/media/businessplatform.png"
										className="object-cover "
										alt=""
										width={100}
										height={120}
									/>
								</div> */}
								<h1 className="text-animation  text-center  font-medium text-4xl uppercase pb-3 ">
									Online Business Platform
								</h1>
							</div>
							<div className="mt-2 ml-4">
								{data.map((item, index) => (
									<div
										key={index}
										
										className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
									>
										<h3 className="text-xl">{item.title}</h3>
										<p className=" text-sm">{item.description}</p>
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

export default OnlineBusinessPlatform;
