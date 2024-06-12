"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const data = [
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
			"Effectively communicate with tenants regarding notices, complaint and updates. Monitor leads efficiently with S-mart lead manager  no worry to vacant hostel/pg	",
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
								{/* <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full   flex items-center justify-around">
									<Image
										src="/media/smartapp.png"
										className="object-cover "
										alt=""
										width={100}
										height={120}
									/>
								</div> */}
								<h1 className="text-animation text-center  font-medium text-4xl uppercase pb-3 ">
									Special S-mart Features
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

export default SPECIALSMARTFEATURES;
