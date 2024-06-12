"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
	{
		title: "Manage rooms according to their seats:",
		description:
			"Make your room platform according to their seating capacity & their type",
	},
	{
		title: "Track occupancy and availability",
		description: "No waste of time to indentify how many seats are available",
	},
	{
		title: "Easy room and bed booking",
		description:
			"20 second is much enough to allot room and seat for your tenant",
	},
	{
		title: "Manage room rent",
		description:
			"Fix room rent according to room type and seating capacity separately",
	},
	{
		title: "Add, remove & update",
		description:
			"Add room, remove room and update their seating capacity and rent easily",
	},
];

const SeatMgmt = () => {
	const logoRef = useRef(null);
	const imgRef = useRef(null);
	const mainHeadingRef = useRef(null);
	const subHeadingsRef = useRef([]);

	useEffect(() => {
		gsap.fromTo(
			logoRef.current,
			{ opacity: 0, scale: 0 },
			{
				opacity: 1,
				scale: 1,
				duration: 2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: logoRef.current,
					start: "top 60%",
					end: "top 30%",
					scrub: true,
				},
			}
		);

		gsap.fromTo(
			imgRef.current,
			{ opacity: 0, scale: 0 },
			{
				opacity: 1,
				scale: 1,
				duration: 2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: imgRef.current,
					start: "top 80%",
					end: "top 30%",
					scrub: true,
				},
			}
		);

		gsap.fromTo(
			mainHeadingRef.current,
			{ x: -100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: mainHeadingRef.current,
					start: "top 80%",
					end: "top 60%",
					scrub: true,
				},
			}
		);

		subHeadingsRef.current.forEach((subHeading, index) => {
			gsap.fromTo(
				subHeading,
				{ x: 100, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1,
					scrollTrigger: {
						trigger: subHeading,
						start: `top 80%+=${index * 50}`,
						end: `top 60%+=${index * 50}`,
						scrub: true,
					},
				}
			);
		});
	}, []);
	
	return (
		<div
			id
			className="relative ml-2 flex items-center justify-center my-[6rem] -pt-[2rem] h-[70vh] w-[90vw]"
		>
			<div className="w-full sticky top-0   text-[#854836]">
				<div className="pr-10  relative ">
					<div
						ref={logoRef}
						className="w-[9rem] h-[9rem]  overflow-hidden rounded-full absolute  left-[50%] md:left-[16rem] -translate-x-1/2 md:translate-x-0"
					>
						<Image
							src="/media/roomicon.png"
							className="object-cover p-4"
							alt=""
							width={200}
							height={220}
						/>
					</div>
					<div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
						<div className="text-center relative md:mx-20 my-4">
							<div className="mt-[7rem]  ">
								{/* <div className="w-[9rem] h-[9rem]  overflow-hidden rounded-full   flex items-center justify-around">
									<Image
										src="/media/roomicon.png"
										className="object-cover "
										alt=""
										width={100}
										height={120}
									/>
								</div> */}
								<h1
									ref={mainHeadingRef}
									className="text-animation text-center  font-medium text-4xl uppercase pb-3 "
								>
									Room Seat Management
								</h1>
							</div>
							<div className="">
								{data.map((item, index) => (
									<div
										key={index}
										ref={(el) => (subHeadingsRef.current[index] = el)}
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
								ref={imgRef}
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

export default SeatMgmt;
