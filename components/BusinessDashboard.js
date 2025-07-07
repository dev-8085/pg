"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const data = [
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
	{data?.map((item, index) => (
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

export default BusinessDashboard;
