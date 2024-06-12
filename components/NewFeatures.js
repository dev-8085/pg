"use client";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

const data = {
	RoomSeatManagement: [
		{
			heading: "Room Seat Management",
			img: "/media/roomIcon.png",
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
	],
	AdmissonAndRegistration: [
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
	],
	SmartDigitalAccount: [
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
	],
	MultipleUser: [
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
	],
	OneDashboardForMultipleBusiness: [
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
	],
	OnlineBusinessPlatform: [
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
	],
	SpecialSmartFeature: [
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
	],
	DifferentFromOthers: [
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
	],
};
gsap.registerPlugin(ScrollTrigger);
const AnimatedElement = () => {
	const frmlftRef = useRef(null);
	const frmrgtRef = useRef(null);
	const vdoRef = useRef(null);

	useEffect(() => {
		// Ensure ScrollTrigger is enabled
		ScrollTrigger.create({
			trigger: frmlftRef.current,
			start: "top center", // Start the animation when the element is in the center of the viewport
			end: "bottom center", // End the animation when the element is no longer in the viewport
			onEnter: () => {
				// Animation when entering viewport
				gsap.fromTo(
					frmlftRef.current,
					{ x: "-100%", opacity: 0 }, // Initial position and opacity for frmlft
					{ x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Target position and opacity for frmlft
				);
				gsap.fromTo(
					frmrgtRef.current,
					{ x: "100%", opacity: 0 }, // Initial position and opacity for frmrgt
					{ x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Target position and opacity for frmrgt
				);
				gsap.fromTo(
					vdoRef.current,
					{ scale: 0.2, opacity: 0 },
					{ scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
				);
			},
			onLeave: () => {
				// Animation when leaving viewport
				gsap.to([frmlftRef.current, frmrgtRef.current, vdoRef.current], {
					opacity: 0,
					duration: 6,
					delay: 1,
				});
			},
			toggleActions: "play none none none", // Play animation only when entering viewport
		});
	}, []);

	return (
		<div ata-color="salmon" div className= " section bg-gray-500">
			<div className="relative my-[10rem] w-screen">
				<div className="w-full sticky top-0 bg-gray-500 md:my-[10rem]">
					<div className="pt-10 relative bg-gray-500">
						<div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
							<div className="text-center relative md:mx-20 my-4">
								<div ref={frmlftRef} className=" flex items-center gap-5 ">
									<div className="w-[10rem] h-[10rem]  overflow-hidden rounded-full  bg-gray-100 flex items-center justify-around">
										<Image
											src="/media/roomicon.png"
											className="object-cover p-3"
											alt=""
											width={200}
											height={220}
										/>
									</div>
									<h1 className="text-animation text-start  text-white font-medium text-4xl uppercase pb-3 ">
										Room Seat Management
									</h1>
								</div>
								<div className="" ref={frmrgtRef}>
									{data.RoomSeatManagement.map((item, index) => (
										<div
											key={index}
											id={`highlight14-${index}`}
											className="text-center md:w-[30rem] text-md px-7 py-2 rounded-lg font-semibold"
										>
											<h3 className="text-xl ">{item.title}</h3>
											<p className="-mt-2 text-sm ">{item.description}</p>
										</div>
									))}
								</div>
							</div>
							<div className="rounded-full  h-[20rem] w-[20rem] md:h-[40rem] md:w-[40rem] flex items-center justify-center overflow-hidden">
								<video
									height={1000}
									width={1000}
									autoPlay
									muted
									loop
									className="object-cover"
									ref={vdoRef}
								>
									<source src="/videos/ok.mp4" type="video/mp4" />
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative main my-[10rem] w-screen">
				<div className="w-full sticky top-0 bg-gray-500 md:my-[10rem] text-white">
					<div className="pt-10 relative bg-gray-500 text-white">
						<div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
							<div className="text-center relative md:mx-20 my-4">
								<div ref={frmlftRef} className="fromLeft  ">
									<div className="flex items-center gap-5 fromLeft ">
										<div className="w-[10rem] h-[10rem]  overflow-hidden rounded-full  bg-gray-100 flex items-center justify-around">
											<Image
												src="/media/registration.png"
												className="object-cover p-3"
												alt=""
												width={200}
												height={220}
											/>
										</div>
										<h1 className="text-animation text-start  text-white font-medium text-4xl uppercase pb-3 ">
											Admission and Registration
										</h1>
									</div>
								</div>
								<div ref={frmrgtRef} className="">
									{data.AdmissonAndRegistration.map((item, index) => (
										<div
											key={index}
											id={`highlight22-${index}`}
											className="text-center md:w-[30rem] text-md px-7 py-2 rounded-lg font-semibold"
										>
											<h3 className="text-xl">{item.title}</h3>
											<p className="-mt-2 text-sm">{item.description}</p>
										</div>
									))}
								</div>
							</div>
							<div className="rounded-full h-[20rem] w-[20rem] md:h-[40rem] md:w-[40rem] flex items-center justify-center overflow-hidden">
								<video
									height={1000}
									width={1000}
									autoPlay
									muted
									loop
									className="object-cover"
									ref={vdoRef}
								>
									<source src="/videos/ok.mp4" type="video/mp4" />
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimatedElement;
