"use client";
import React from "react";

const GetAppPage = () => {
	return (
		<div className=" my-2 bg-gray-100 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 lg:h-screen lg:py-24">
			<div className="w-[20rem] h-[fit-content] relative flex flex-col items-center justify-center">
				<img src="/media/rectcircle.png" className="relative w-full" alt="" />
				<div className="absolute top-0 left-1/4 lg:left-1/2 transform lg:-translate-x-1/2">
					<div className="flex items-center p-2">
						<div className="h-[5rem] w-[5rem] overflow-hidden mt-1">
							<img src="/media/apple.png" className="object-cover" alt="" />
						</div>
						<h3 className="text-lg mt-4">IOS APP</h3>
					</div>
					<div className="text-center">
						<h3 className="text-[1.5rem] font-bold">Click on</h3>
						<button
							type="button"
							className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
						>
							Download
						</button>
						<h3>Or Scan</h3>
					</div>
				</div>
				<div className="h-[18rem] w-[18rem] absolute top-[13.5rem] left-4">
					<img src="/media/QR.png" className="object-cover" alt="" />
				</div>
			</div>
			<div className="w-[20rem] h-96 bg-white clip-div">
				<div className="flex flex-col items-center p-2">
					<img
						src="/media/windows.png"
						alt=""
						className="h-[5rem] w-[5rem] mt-1"
					/>
					<h3 className="text-xl mt-4">DESKTOP APP</h3>
				</div>
				<div className="text-center">
					<h3 className="text-[1.5rem] font-bold">Click on</h3>
					<button
						type="button"
						className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					>
						Download
					</button>
				</div>
			</div>
			<div className="w-[20rem] h-[fit-content] relative flex flex-col items-center justify-center">
				<img src="/media/rectcircle.png" className="relative w-full" alt="" />
				<div className="absolute top-0 left-1/4 lg:left-1/2 transform lg:-translate-x-1/2">
					<div className="flex items-center p-2">
						<div className="h-[5rem] w-[5rem] overflow-hidden mt-1">
							<img src="/media/playstore.png" className="object-cover" alt="" />
						</div>
						<h3 className="text-lg mt-4">Android APP</h3>
					</div>
					<div className="text-center">
						<h3 className="text-[1.5rem] font-bold">Click on</h3>
						<button
							type="button"
							className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
						>
							Download
						</button>
						<h3>Or Scan</h3>
					</div>
				</div>
				<div className="h-[18rem] w-[18rem] absolute top-[13.5rem] left-4">
					<img src="/media/QR.png" className="object-cover" alt="" />
				</div>
			</div>
		</div>
	);
};

export default GetAppPage;
