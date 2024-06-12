"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Tenant = () => {
	const [showFirstContent, setShowFirstContent] = useState(true);
	const [flash, setFlash] = useState(false);

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setShowFirstContent((prev) => !prev);
	// 		setFlash(true);
	// 		setTimeout(() => setFlash(false), 100);
	// 	}, 5000);

	// 	// Initial 3-second delay
	// 	setTimeout(() => {
	// 		setShowFirstContent(false);
	// 		setFlash(true);
	// 		setTimeout(() => setFlash(false), 100);
	// 	}, 3000);

	// 	return () => clearInterval(timer);
	// }, []);

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
			// bg-[#f5f0e8] 
			className="section pb-2 w-full lg:flex lg:items-center lg:justify-center "
		>
			<div>
				<div className="lg:text-center">
					<h1 className="font-bold mt-[4rem]  text-orange-900 text-center  text-4xl ">
						Experience smarter living with S-mart Tenant app
					</h1>
					<h3 className="w-[80vw] lg:w-full pl-[4rem]  pb-9 pt-1 lg:text-lg text-sm text-center text-orange-900">
						Where convenience and comfort set you apart
					</h3>
				</div>
				<div className="container relative flex flex-col justify-between  max-w-6xl px-10 xl:px-0 ">
					{/* {flash && (
						<div className="absolute inset-0 bg-white opacity-50 animate-flash"></div>
					)} */}
					<div className="w-full">
						<div className="flex flex-col w-full lg:flex-row items-center justify-center gap-10 ">
							<div className="lg:h-[35rem] -mt-[3rem] lg:w-[45vw] w-[18rem] overflow-hidden shadow-lg flex items-center justify-center rounded  border-2 border-black">
								<Image
									src="/media/tenant.png"
									alt=""
									height={300}
									width={300}
									className=" object-cover "
								/>
							</div>
							{showFirstContent ? (
								<div
									className={`flex flex-col w-[50vw]  gap-9  mb-10 ${
										flash ? "flash" : ""
									} `}
								>
									<div className="flex lg:flex-row gap-10 lg:gap-0 flex-col">
										<div className="w-full  sm:w-1/2">
											<div className="relative h-full ml-0 md:mr-10">
												<div className="relative h-full px-4 pt-4 bg-white shadow-lg lg:w-[20vw] lg:h-[17vw] text-sm  rounded-lg">
													<div className="flex items-center gap-3">
														<img
															src="/media/easypayment.png"
															className="h-14 w-16"
															alt=""
														/>
														<h3 className="my-2 ml-3 text-lg font-bold text-green-700">
															Easy Payments
														</h3>
													</div>
													<p className="mt-3 mb-1 text-xs font-medium lg:text-[#1A5155] lg:uppercase">
														------------
													</p>
													<p className="mb-2 lg:text-gray-600">
														Now, effortlessly pay through our app's seamless
														feature. Enjoy convenience at your fingertips for
														smoother transactions, hassle-free.
													</p>
												</div>
											</div>
										</div>
										<div className="w-full lg:-ml-[2rem]  sm:w-1/2">
											<div className="relative h-full ml-0 md:mr-10">
												<div className="relative h-full p-4 lg:w-[30vw] lg:h-[17vw] bg-white shadow-lg rounded-lg">
													<div className="flex items-center">
														<img
															src="/media/complaint.png"
															className="h-14 w-16"
															alt=""
														/>
														<h3 className="my-2 ml-3 text-lg font-bold text-orange-600">
															Easy Complaints
														</h3>
													</div>
													<p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
														------------
													</p>
													<p className="mb-2 text-gray-600">
														Now, effortlessly lodge complaints through our
														S-Mart app tailored for tenants' needs. From room
														maintenance to food quality, report any issues
														promptly for swift resolution, ensuring a
														comfortable living experience.
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="w-full  mt-2 sm:w-1/2">
										<div className="relative h-full ml-0 md:mr-10">
											<div className="relative h-full lg:w-[53vw] lg:h-[15vw] p-4 bg-white shadow-lg rounded-lg">
												<div className="flex items-center -mt-1">
													<img
														src="/media/rewards.png"
														className="h-14 w-16"
														alt=""
													/>
													<h3 className="my-2 ml-3 text-lg font-bold text-[#65E1E1]">
														Renting Rewarding
													</h3>
												</div>
												<p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
													------------
												</p>
												<p className="mb-2 text-gray-600">
													Assured monthly rewards on timely rent payment. Redeem
													coins to unlock different offers and use cashback on
													next month’s rent payment. also get flat offer
													discount by your property admin. more usage of APP get
													more coupon for your wishes.
												</p>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div
									className={`flex flex-col w-[50vw]  gap-9  mb-10 ${
										flash ? "flash" : ""
									} `}
								>
									<div className="flex lg:flex-row flex-col gap-10 lg:gap-0">
										<div className="w-full   sm:w-1/2">
											<div className="relative h-full ml-0 md:mr-10">
												<div className="relative h-full p-4 bg-white shadow-lg lg:w-[20vw] lg:h-[17vw]  rounded-lg">
													<div className="flex items-center -mt-1">
														<img
															src="/media/food.png"
															className="h-14 w-16"
															alt=""
														/>
														<h3 className="my-2 ml-3 text-lg font-bold text-[#65E1E1]">
															Daily Delights
														</h3>
													</div>
													<p className="mt-3 mb-1 text-xs font-medium lg:text-[#1A5155] lg:uppercase">
														------------
													</p>
													<p className="mb-2 lg:text-gray-600 text-sm">
														Unlock personalized meal recommendations for every
														mealtime, eliminating menu guessing. From breakfast
														to dinner, all at your fingertips.
													</p>
												</div>
											</div>
										</div>
										<div className="w-full lg:-ml-[2rem] lg:h-[10rem] sm:w-1/2">
											<div className="relative  ml-0 md:mr-10">
												<div className="relative h-full p-4 lg:w-[30vw] lg:h-[17vw] bg-white shadow-lg rounded-lg">
													<div className="flex items-center lg:-mt-1">
														<img
															src="/media/communication.png"
															className="h-14 w-16"
															alt=""
														/>
														<h3 className="my-2 ml-3 text-lg font-bold text-green-700">
															Effortless Communication
														</h3>
													</div>
													<p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
														------------
													</p>
													<p className="mb-2 text-gray-600">
														Stay connected effortlessly! With our S-Mart Tenant
														app, notify us easily about delays, departures, or
														your return home, ensuring seamless communication
														and peace of mind.
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="w-full  mt-2 sm:w-1/2">
										<div className="relative h-full ml-0 md:mr-10">
											<div className="relative h-full lg:w-[53vw] lg:h-[15vw] p-4 bg-white shadow-lg rounded-lg">
												<div className="flex items-center -mt-1">
													<img
														src="/media/remainder.png"
														className="h-14 w-16"
														alt=""
													/>
													<h3 className="my-2 ml-3 text-lg font-bold text-orange-600">
														Payment Remainder
													</h3>
												</div>
												<p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
													------------
												</p>
												<p className="mb-2 text-gray-600">
													Never miss a payment deadline again! With our S-Mart
													Tenant app, enjoy the convenience of timely reminders
													for seamless rent payments, ensuring peace of mind and
													hassle-free transactions.
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* <div className="flex flex-col w-full mb-5 sm:flex-row">
							<div className="w-full mb-10 sm:mb-0 sm:w-1/2">
								<div className="relative h-full ml-0 mr-0 sm:mr-10">
									<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
									<div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
										<div className="flex items-center -mt-1">
											<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
												Daily Delights
											</h3>
										</div>
										<p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
											------------
										</p>
										<p className="mb-2 text-gray-600">
											Discover your daily dining destiny with our app's
											personalized meal recommendations. From breakfast to
											dinner, never wonder what's on the menu again - it's all
											at your fingertips.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full mb-10 sm:mb-0 sm:w-1/2">
								<div className="relative h-full ml-0 mr-0 sm:mr-10">
									<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
									<div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
										<div className="flex items-center -mt-1">
											<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
												Effortless Communication
											</h3>
										</div>
										<p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
											------------
										</p>
										<p className="mb-2 text-gray-600">
											Stay connected effortlessly! With our S-Mart Tenant app,
											notify us easily about delays, departures, or your return
											home, ensuring seamless communication and peace of mind.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full sm:w-1/2">
								<div className="relative h-full ml-0 md:mr-10">
									<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-700 rounded-lg"></span>
									<div className="relative h-full p-5 bg-white border-2 border-orange-700 rounded-lg">
										<div className="flex items-center -mt-1">
											<h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
												Payment Reminder
											</h3>
										</div>
										<p className="mt-3 mb-1 text-xs font-medium text-orange-700 uppercase">
											------------
										</p>
										<p className="mb-2 text-gray-600">
											Never miss a payment deadline again! With our S-Mart
											Tenant app, enjoy the convenience of timely reminders for
											seamless rent payments, ensuring peace of mind and
											hassle-free transactions.
										</p>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tenant;
