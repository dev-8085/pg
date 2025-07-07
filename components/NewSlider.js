"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import SeatMgmt from "./Seat-mgmt";
import RegistrationBoard from "./RegistrationBoard";
import SmartDigitalAccount from "./ExpenseRecord";
import MultipleUser from "./MultipleUser";
import MultipleBusiness from "./MultipleBusiness";
import OnlineBusinessPlatform from "./OnlineBusinessPlatform";
import SPECIALSMARTFEATURES from "./TenantLeads";
import BusinessDashboard from "./BusinessDashboard";

const NewSlider = () => {
	const elementsRef = useRef([]);

	function realpageAnimation() {
		gsap.to(".slide", {
			scrollTrigger: {
				trigger: ".real",
				start: "top top",
				end: "bottom bottom",
				scrub: 1,
				stagger: true,
			},
			xPercent: -700,
			// ease: ease,
		});
	}
	useEffect(() => {
		realpageAnimation();
	}, []);

	return (
		<div
			data-color="black"
			// text-[#854836] bg-[#fdea94c6]
			className=" section  items-center real cont lg:h-[800vh] relative w-full "
		>
			<div className="hidden lg:flex slides overflow-hidden w-full  h-[100vh] sticky top-0 left-0 ">
				<div className="slide frmleft  flex items-center justify-center w-full h-screen flex-shrink-0 ">
					<SeatMgmt />
				</div>
				<div className="slide flex items-center justify-center w-full h-screen flex-shrink-0 ">
					<RegistrationBoard />
				</div>
				<div className="slide flex items-center justify-center w-full h-screen flex-shrink-0 ">
					<SmartDigitalAccount />
				</div>
				<div className="slide flex items-center justify-center w-full h-screen flex-shrink-0 ">
					<MultipleUser />
				</div>
				<div className="slide flex items-center justify-center w-full h-screen flex-shrink-0 ">
					<MultipleBusiness />
				</div>
				<div className="slide flex items-center justify-center w-full h-screen flex-shrink-0 ">
					<OnlineBusinessPlatform />
				</div>
				<div className="slide flex items-center justify-center w-full h-screen flex-shrink-0 ">
					<SPECIALSMARTFEATURES />
				</div>
				<div className="slide flex items-center justify-center w-full h-screen flex-shrink-0 ">
					<BusinessDashboard />
				</div>
			</div>

			<div className="lg:hidden mt-[10rem] ml-5  flex flex-col  items-center justify-center gap-10 mb-[900vh]">
				<div className="h-[140vh] w-[100vw] md:h-[55vh] ">
					<SeatMgmt />
				</div>
				<div className="h-[160vh] w-[100vw]md:h-[50vh]">
					<RegistrationBoard />
				</div>
				<div className="h-[140vh] w-[100vw] ">
					<SmartDigitalAccount />
				</div>
				<div className="h-[150vh] w-[100vw] ">
					<MultipleUser />
				</div>
				<div className="h-[140vh] w-[100vw]  ">
					<MultipleBusiness />
				</div>
				<div className="h-[140vh] w-[100vw] ">
					<OnlineBusinessPlatform />
				</div>
				<div className="h-[150vh] w-[100vw] ">
					<SPECIALSMARTFEATURES />
				</div>

				<div className="h-[120vh] w-[100vw] ">
					<BusinessDashboard />
				</div>
			</div>
		</div>
	);
};

export default NewSlider;
