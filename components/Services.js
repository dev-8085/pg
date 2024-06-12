import React from "react";

const Services = () => {
	const features = [
		{
			title: "ROOM SEATS MANAGEMENT",
			description:
				"MANAGE YOUR ROOMS, SEATS, SERVICES, RECORDS & RENTS SMARTLY",
			imgSrc: "/media/roomicon.png",
			alt: "Room Seats Management",
		},
		{
			title: "ADMISSIONS & REGISTRATION",
			description:
				"KEEP DIGITAL RECORDS OF TENANT, ALLOT SEATS/ROOM & MANAGE DIGITAL ADMISSION WITH ZERO PAPER WORK.",
			imgSrc: "/media/registration.png",
			alt: "Admissions & Registration",
		},
		{
			title: "S-MART DIGITAL ACCOUNTANT",
			description:
				"S-MART BILLING FOR RENT COLLECTION & PAYMENTS, KEEP RECORDS OF EXPENSE WITH CATEGORIES, & PROFIT-LOSS REPORT",
			imgSrc: "/media/accountant.png",
			alt: "S-Mart Digital Accountant",
		},
		{
			title: "MULTIPLE USERS",
			description:
				"MANAGE YOUR BUSINESSES BY YOUR S-MART TEAM WORK, MAKE ROLES & RESPONSIBILITIES.",
			imgSrc: "/media/team.png",
			alt: "Multiple Users",
		},
		{
			title: "ONE DASHBOARD FOR MULTIPLE BUSINESSES.",
			description: "CREATE MULTIPLE ACCOUNTS ON 1 S-MART APP.",
			imgSrc: "/media/multiplebusiness.png",
			alt: "One Dashboard for Multiple Businesses",
		},
		{
			title: "ONLINE BUNSINESS PLATFORM",
			description:
				"MARKET YOUR S-MART PROPERTY ONLINE, GET MORE LEADS & CONVERT LEADS INTO TENANT MORE FASTER",
			imgSrc: "/media/businessplatform.png",
			alt: "Online Business Platform",
		},
		{
			title: "SPECIAL S-MART FEATURES",
			description:
				"MANAGE: FOOD MENU, CUSTOM SALES, MONTHLY REPORTS, OFFERS ZONE, NOTIFY ON WHATSAPP, TENANT NOTICE, COMPLAINT & LEADS",
			imgSrc: "/media/smartapp.png",
			alt: "Special S-Mart Features",
		},
		{
			title: "DIFFERENT FROM OTHERS",
			description:
				"MANAGE; KITCHEN STOCKS, EMPLOYEE ATTENDANCE & SALARY, ELECTRICITY BILL AND SMART TENANT & EMPLOYEE VERIFICATION",
			imgSrc: "/media/differentfromothers.png",
			alt: "Different from Others",
		},
		{
			title: "S-MART TENANT APP",
			description:
				"FOR TRANSPARENCY, EASY RECORDS AND HASSLE FREE COMMUNICATION.",
			imgSrc: "/media/tenantapp.png",
			alt: "S-Mart Tenant App",
		},
	];

	return (
		<div className=" py-10 ">
			<div className="	 mx-auto px-4 lg:px-0">
				<p className="text-center text-[#b0751c] uppercase text-base font-bold leading-7 text-primary-500">
					--- <span> How the app can benefit hostel and PG owners</span> ---
				</p>
				<h2 className="text-center font-display text-4xl font-bold tracking-tight text-slate-900 mb-10">
					Explore our <span className="text-[#9e6818]">S-mart Features</span>
				</h2>
				<ul
					className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3"
					// className="flex flex-col gap-5 w-[40vw]"
				>
					{features.map((feature, index) => (
						<li
							key={index}
							className="bg-[#fff] rounded-xl px-4 py-6 hover:bg-[#a5a4a4] hover:text-white shadow-sm"
						>
							<div className="text-center">
								<div className="mx-auto h-24 w-24 overflow-hidden">
									<img
										src={feature.imgSrc}
										alt={feature.alt}
										className="object-cover"
									/>
								</div>
								<h3 className="my-3 font-display text-lg text-black font-black">
									{feature.title}
								</h3>
								<p className="mt-1.5 text-sm leading-6">
									{feature.description}
								</p>
							</div>
						</li>
					))}
				</ul>
				
				
			</div>
		</div>
	);
};

export default Services;
