"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Tenant = () => {
	const [showFirstContent, setShowFirstContent] = useState(true);
	const [flash, setFlash] = useState(false);

	useEffect(() => {
		let timer;
		let hover = false;

		const handleMouseEnter = () => {
			hover = true;
			clearInterval(timer);
		};

		const handleMouseLeave = () => {
			hover = false;
			timer = setInterval(() => {
				setShowFirstContent((prev) => !prev);
				setFlash(true);
				setTimeout(() => setFlash(false), 100);
			}, 2000);
		};

		timer = setInterval(() => {
			if (!hover) {
				setShowFirstContent((prev) => !prev);
				setFlash(true);
				setTimeout(() => setFlash(false), 100);
			}
		}, 3000);

		setTimeout(() => {
			setShowFirstContent(false);
			setFlash(true);
			setTimeout(() => setFlash(false), 100);
		}, 3000);

		document.addEventListener("mouseenter", handleMouseEnter);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			clearInterval(timer);
			document.removeEventListener("mouseenter", handleMouseEnter);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div
			data-color="salmon"
			className="section pb-2 w-full lg:flex lg:items-center lg:justify-center"
		>
			<div>
				<div className="lg:text-center">
					<h1 className="font-bold mt-[4rem] text-orange-900 text-center text-4xl">
						Experience smarter living with S-mart Tenant app
					</h1>
					<h3 className="w-[80vw] lg:w-full pl-[4rem] pb-9 pt-1 lg:text-lg text-sm text-center text-orange-900">
						Where convenience and comfort set you apart
					</h3>
				</div>
				<div className="container relative flex flex-col justify-between max-w-5xl px-10 xl:px-0">
					<div className="w-full">
						<div className="flex flex-col w-full lg:flex-row items-center justify-center gap-10">
							<div className="lg:h-[35rem] -mt-[3rem] lg:w-[45vw] w-[18rem] overflow-hidden shadow-lg flex items-center justify-center rounded border-2 border-black">
								<Image
									src="/media/tenant.png"
									alt="Tenant App Preview"
									height={500}
									width={520}
									className="object-cover"
								/>
							</div>
							{showFirstContent ? (
								<ContentOne flash={flash} />
							) : (
								<ContentTwo flash={flash} />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const ContentOne = ({ flash }) => (
	<div className={`flex flex-col w-[50vw] gap-9 mb-10 ${flash ? "flash" : ""}`}>
		<div className="flex lg:flex-row gap-10 lg:gap-0 flex-col">
			<FeatureCard
				title="Easy Payments"
				text="Now, effortlessly pay through our app's seamless feature. Enjoy convenience at your fingertips for smoother transactions, hassle-free."
				icon="/media/easypayment.png"
				color="text-green-700"
				width="lg:w-[20vw]"
				height="lg:h-[17vw]"
			/>
			<FeatureCard
				title="Easy Complaints"
				text="Now, effortlessly lodge complaints through our S-Mart app tailored for tenants' needs. From room maintenance to food quality, report any issues promptly for swift resolution."
				icon="/media/complaint.png"
				color="text-orange-600"
				width="lg:w-[30vw]"
				height="lg:h-[17vw]"
				className="lg:-ml-[2rem]"
			/>
		</div>
		<FeatureCard
			title="Renting Rewarding"
			text="Assured monthly rewards on timely rent payment. Redeem coins to unlock different offers and use cashback on next month’s rent payment."
			icon="/media/rewards.png"
			color="text-[#65E1E1]"
			width="lg:w-[53vw]"
			height="lg:h-[15vw]"
		/>
	</div>
);

const ContentTwo = ({ flash }) => (
	<div className={`flex flex-col w-[50vw] gap-9 mb-10 ${flash ? "flash" : ""}`}>
		<div className="flex lg:flex-row gap-10 lg:gap-0 flex-col">
			<FeatureCard
				title="Daily Delights"
				text="Unlock personalized meal recommendations for every mealtime, eliminating menu guessing."
				icon="/media/food.png"
				color="text-[#65E1E1]"
				width="lg:w-[20vw]"
				height="lg:h-[17vw]"
			/>
			<FeatureCard
				title="Effortless Communication"
				text="Stay connected effortlessly! Notify delays, departures, or return using S-Mart Tenant app."
				icon="/media/communication.png"
				color="text-green-700"
				width="lg:w-[30vw]"
				height="lg:h-[17vw]"
				className="lg:-ml-[2rem]"
			/>
		</div>
		<FeatureCard
			title="Payment Remainder"
			text="Never miss a payment deadline again! Timely reminders ensure seamless rent payments."
			icon="/media/remainder.png"
			color="text-orange-600"
			width="lg:w-[53vw]"
			height="lg:h-[15vw]"
		/>
	</div>
);

const FeatureCard = ({ icon, title, text, color, width, height, className = "" }) => (
	<div className={`w-full sm:w-1/2 ${className}`}>
		<div className="relative h-full ml-0 md:mr-10">
			<div className={`relative h-full p-4 ${width} ${height} bg-white shadow-lg rounded-lg`}>
				<div className="flex items-center">
					<img src={icon} className="h-14 w-16" alt={title} />
					<h3 className={`my-2 ml-3 text-lg font-bold ${color}`}>{title}</h3>
				</div>
				<p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
					------------
				</p>
				<p className="mb-2 text-gray-600 text-sm">{text}</p>
			</div>
		</div>
	</div>
);

export default Tenant;
