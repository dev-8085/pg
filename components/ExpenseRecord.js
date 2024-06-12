"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const data = [
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
								{/* <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full   flex items-center justify-around">
										<Image
											src="/media/accountant.png"
											className="object-cover "
											alt=""
											width={100}
											height={120}
										/>
									</div> */}
								<h1 className="text-animation text-center  font-medium text-4xl uppercase pb-3 ">
									Smart Digital Account
								</h1>
							</div>
							<div className="">
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

export default SmartDigitalAccount;
