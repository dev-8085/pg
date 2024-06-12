"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const data = [
    {
        id: "room-seat-management",
        title: "Room Seat Management",
        imageSrc: "/media/roomicon.png",
        imageAlt: "",
        videoSrc: "/videos/ok.mp4",
        description: [
            {
                title: "Manage rooms according to their seats:",
                description:
                    "Make your room platform according to their seating capacity & their type",
            },
            {
                title: "Track occupancy and availability",
                description:
                    "No waste of time to indentify how many seats are available",
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
    },
    {
        id: "admission-and-registration",
        title: "Admission and Registration",
        imageSrc: "/media/registration.png",
        imageAlt: "",
        videoSrc: "/videos/ok.mp4",
        description: [
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
    },
    {
        id: "smart-digital-account",
        title: "Smart Digital Account",
        imageSrc: "/media/accountant.png",
        imageAlt: "",
        videoSrc: "/videos/ok.mp4",
        description: [
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
    },
    {
        id: "multiple-user",
        title: "Multiple User",
        imageSrc: "/media/team.png",
        imageAlt: "",
        videoSrc: "/videos/ok.mp4",
        description: [
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
    },
    {
        id: "multiple-buisness",
        title: "One Dashboard For Multiple Business",
        imageSrc: "/media/multiplebusiness.png",
        imageAlt: "",
        videoSrc: "/videos/ok.mp4",
        description: [
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
    },
    {
        id: "online-business-platform",
        title: "Online Business Platform",
        imageSrc: "/media/businessplatform.png",
        imageAlt: "",
        videoSrc: "/videos/ok.mp4",
        description: [
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
                description:
                    " Boost your business online and reach a wider audience.",
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
    },
    {
        id: "special-smart-features",
        title: "Special S-mart Features",
        imageSrc: "/media/smartapp.png",
        imageAlt: "",
        videoSrc: "/videos/ok.mp4",
        description: [
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
                description:
                    "Access comprehensive reports for informed decision-making.",
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
    },
    {
        id: "different-from-others",
        title: "Different From Others",
        imageSrc: "/media/differentfromothers.png",
        imageAlt: "",
        videoSrc: "/videos/ok.mp4",
        description: [
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
                description:
                    "Access comprehensive reports for informed decision-making.",
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
    },
];

const FeatureTester = () => {
	

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
		<div className="real flex">
			{data.map((item) => (
				<div
					key={item.id}
					className="  relative main flex items-center justify-center"
				>
					<div className="w-full sticky top-0">
						<div className="slide pr-10 relative text-[#854836]">
							<div className="w-[9rem] h-[9rem] overflow-hidden rounded-full absolute left-[50%] md:left-[16rem] -translate-x-1/2 md:translate-x-0">
								<Image
									src={item.imageSrc}
									className="object-cover p-4"
									alt={item.imageAlt}
									width={200}
									height={220}
								/>
							</div>
							<div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
								<div className="text-center relative md:mx-20 my-4">
									<div className="fromLeft">
										<div className="mt-[7rem]">
											<h1 className="text-animation text-center font-medium text-4xl uppercase pb-3">
												{item.title}
											</h1>
										</div>
									</div>
									<div className="ml-6">
										{item.description.map((desc, index) => (
											<div
												key={index}
												id={`highlight-${index}`}
												className="text-center md:w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
											>
												<h3 className="text-xl">{desc.title}</h3>
												<p className="text-sm">{desc.description}</p>
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
										<source src={item.videoSrc} type="video/mp4" />
									</video>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FeatureTester;
