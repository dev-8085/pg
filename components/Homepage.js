"use client";
// import Typewriter from "typewriter-effect";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import React from "react";
import Search from "./Search";

const Homepage = () => {
	const [typeEffect] = useTypewriter({
		words: ["PGs", "Hostel"],
		loop: {},
		typeSpeed: 100,
		deleteSpeed: 40,
	});
	return (
		<>
			<div>
				<div className="lg:w-full flex lg:h-[90vh]  py-10  items-center flex-col lg:flex-row ">
					{/* <div className="lftcontainer lg:w-[60vw] px-[6rem]  py-[3rem]  ">
						<h1 className="text-5xl pl-5  ml-10 lg:-ml-1 font-bold lg:py-7 font-['Gillroy']">
							S-mart way to rent your &nbsp;
							<span className="text-[#ED7C24] font-['PP_Neue_Machina_Inktrap_Medium']">
								{typeEffect}
							</span>
						</h1>
						<p className="text-sm font-light px-4  text-justify lg:text-zinc-500 leading-tight">
							Discover a world of convenience with the S-Mart app, offering a
							myriad of features from audit trails to hassle-free rent
							collection. From maintaining electricity bills to transparent
							record-keeping, enjoy seamless operations with Google Cloud backup
							and restoration. Stay organized with expense reports, admission
							management, and tenant complaints, all in one user-friendly
							platform for efficient property management.
						</p>
						<div className="mt-10  font-bold text-lg ">
							<h1 className="px-4">We Manage </h1>
							<div className="mt-3 ml-4  flex items-center gap-1 lg:gap-4">
								<div className="shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">Hostel</h2>
								</div>
								<div className="shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">PGs</h2>
								</div>
								<div className=" shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">Studio</h2>
								</div>
								<div className=" shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">Co-living</h2>
								</div>
								<div className=" shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm  text-center font-semibold">Student Housing</h2>
								</div>
							</div>
						</div>

						<div class="max-w-sm space-y-3">
							<div></div>

							<div className="m-3  ">
								<label for="hs-trailing-button-add-on" class="sr-only">
									Label
								</label>
								<div class="flex rounded-lg shadow-sm h-[3rem]">
									<input
										type="text"
										id="hs-trailing-button-add-on"
										name="hs-trailing-button-add-on"
										placeholder="Enter Mobile Number"
										class="py-2 placeholder-orange-500  px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-orange-600 focus:ring-orange-700 disabled:opacity-50 disabled:pointer-events-none"
									/>
									<button
										type="button"
										class="py-3 px-4 w-[16rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none"
									>
										Get Demo
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
										</svg>
									</button>
								</div>
							</div>

							<div></div>
						</div>
					</div> */}

					<div className="lftcontainer lg:w-[60vw] px-4 lg:px-[6rem] py-4 lg:py-[3rem]">
						<h1 className="text-3xl lg:text-5xl pl-2 lg:pl-5 ml-2 lg:ml-10 font-bold lg:py-3 font-['gilroy']">
							S-mart way to rent <br /> your&nbsp;
							<span className="text-[#ED7C24] font-pp-neue-machina-inktrap-medium">
								{typeEffect}
							</span>
						</h1>
						<p className="text-sm lg:text-base lg:w-3/4 font-semibold px-2 lg:px-4 lg:ml-10 text-justify leading-tight">
							Discover a world of convenience with the S-Mart app, offering a
							myriad of features from audit trails to hassle-free rent
							collection. From maintaining electricity bills to transparent
							record-keeping, enjoy seamless operations with Google Cloud backup
							and restoration. Stay organized with expense reports, admission
							management, and tenant complaints, all in one user-friendly
							platform for efficient property management.
						</p>
						<div className="mt-5 lg:mt-10 font-bold text-base lg:text-lg">
							<h1 className="px-2 lg:px-4 lg:ml-7">We Manage</h1>
							<div className="mt-3 ml-2 lg:ml-7 flex flex-wrap gap-2 lg:gap-4">
								{/* Your manage icons */}

								<div className="shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">Hostel</h2>
								</div>
								<div className="shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">PGs</h2>
								</div>
								<div className=" shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">Studio</h2>
								</div>
								<div className=" shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm font-semibold">Co-living</h2>
								</div>
								<div className=" shadow h-[5rem] w-[7rem] flex items-center flex-col p-2 gap-2 rounded-lg border border-gray-200 ">
									<div className="h-9 w-9 rounded-full bg-[#f5edc3] flex items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="22"
											height="22"
											fill="#ED7C24"
										>
											<path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path>
										</svg>
									</div>
									<h2 className="text-sm  text-center font-semibold">
										Student Housing
									</h2>
								</div>
							</div>
						</div>

						<div class="max-w-md  mt-5">
							<div></div>
							<div className="m-3">
								<label for="mobile-number" class="sr-only">
									Enter Mobile Number
								</label>
								<div class="flex rounded-lg shadow-sm">
									<input
										type="text"
										id="mobile-number"
										name="mobile-number"
										placeholder="Enter Mobile Number"
										class="py-2 placeholder-orange-500 px-4 block w-full border-gray-200 shadow-sm rounded-l-lg text-sm focus:ring-orange-700 focus:border-orange-700 focus:ring-1 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
									/>
									<button
										type="button"
										class="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-r-lg bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none"
									>
										Get Demo
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="18"
											height="18"
											fill="currentColor"
										>
											<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
										</svg>
									</button>
								</div>
							</div>
							<div></div>
						</div>
					</div>

					<div className="rgtcontainer  lg:-mt-[5rem]">
						<Image src="/media/girl.gif" alt="home" width={400} height={450} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
