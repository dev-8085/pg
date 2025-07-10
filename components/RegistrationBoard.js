"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const data = [
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
						// ref={logoRef}
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
	{data?.map((item, index) => (
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

export default RegistrationBoard;
