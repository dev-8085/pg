"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const data = [
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
			"Keep track of user activities for insightful progress reports",
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
								{/* <div className="w-[9rem] h-[9rem] overflow-hidden rounded-full  flex items-center justify-around">
									<Image
										src="/media/team.png"
										className="object-cover"
										alt=""
										width={100}
										height={120}
									/>
								</div> */}
								<h1 className="text-animation text-center  font-medium text-4xl uppercase pb-3 ">
									Multiple User
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

export default MultipleUser;
