"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Homepage from "./Homepage";
import Image from "next/image";
import AllInOneApp from "./AllInOneApp";
import Getapp from "./Getapp";
import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/js/dist/boo";
//  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
//  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
{/* <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>; */}

export default function App() {
	

	return (
		<>
			{/* <Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper lg:my-[7rem]"
			>
				<SwiperSlide>
					<div className="w-full h-full p-20 flex flex-col lg:flex-row items-center justify-between">
						<div className="lg:w-2/3 w-full ">
							<div className="font-['PP_Neue_Machina_Inktrap_Medium'] text-blue-800 flex items-center gap-2 text-sm font-semibold my-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="currentColor"
								>
									<path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"></path>
								</svg>
								<h3>Explore Now</h3>
							</div>
							<h1 className=" lg:text-4xl text-3xl font-semibold pb-7 font-['Gillroy']">
								Manage all your Hostels and PGs magically in your pocket
							</h1>
							<p className="border-l-2  border-gray-400 pl-5 text-sm  font-['PP_Neue_Machina_Inktrap_Medium']">
								Easy manageable. Easy trackable. Easy remembering
							</p>
							<button className="my-10 px-4 py-[1rem] bg-blue-800 hover:bg-blue-900  text-white  border-1 border-black">
								Make An Enquiry
							</button>
						</div>
						<div>
							<Image
								src="/media/slide-1.webp"
								alt=""
								height={100}
								width={100}
								className="h-[70vh] w-full"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<AllInOneApp />
				</SwiperSlide>
				<SwiperSlide>
					<Getapp />
				</SwiperSlide>
			</Swiper> */}

			<div
				id="myCarousel"
				class="carousel slide carousel-fade"
				data-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="mask flex-center">
							<div class="container">
								<div class="row align-items-center">
									<div class="col-md-7 col-12 order-md-1 order-2">
										<h4>
											Present your <br />
											awesome product
										</h4>
										<p>
											Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
											quidem rerum <br />
											necessitatibus praesentium voluptatum deleniti atque
											corrupti.
										</p>
										<a href="#">BUY NOW</a>{" "}
									</div>
									<div class="col-md-5 col-12 order-md-2 order-1">
										<img
											src="https://www.btroomer.com/panel/img/BT-1708666188.png"
											class="mx-auto"
											alt="slide"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="mask flex-center">
							<div class="container">
								<div class="row align-items-center">
									<div class="col-md-7 col-12 order-md-1 order-2">
										<h4>
											Present your <br />
											awesome product
										</h4>
										<p>
											Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
											quidem rerum <br />
											necessitatibus praesentium voluptatum deleniti atque
											corrupti.
										</p>
										<a href="#">BUY NOW</a>{" "}
									</div>
									<div class="col-md-5 col-12 order-md-2 order-1">
										<img
											src="https://i.imgur.com/duWgXRs.png"
											class="mx-auto"
											alt="slide"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="mask flex-center">
							<div class="container">
								<div class="row align-items-center">
									<div class="col-md-7 col-12 order-md-1 order-2">
										<h4>
											Present your <br />
											awesome product
										</h4>
										<p>
											Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
											quidem rerum <br />
											necessitatibus praesentium voluptatum deleniti atque
											corrupti.
										</p>
										<a href="#">BUY NOW</a>{" "}
									</div>
									<div class="col-md-5 col-12 order-md-2 order-1">
										<img
											src="https://i.imgur.com/DGkR4OQ.png"
											class="mx-auto"
											alt="slide"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#myCarousel"
					role="button"
					data-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>{" "}
				</a>
				<a
					class="carousel-control-next"
					href="#myCarousel"
					role="button"
					data-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>{" "}
				</a>
			</div>
		</>
	);
}
