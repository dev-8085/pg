"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SeatMgmt from "./Seat-mgmt";
import MultipleBusiness from "@/components/MultipleBusiness";
import RegestrationBoard from "@/components/RegistrationBoard";
import SmartDigitalAccount from "@/components/ExpenseRecord";
import SPECIALSMARTFEATURES from "@/components/TenantLeads";
import BusinessDashboard from "@/components/BusinessDashboard";
import MultipleUser from "@/components/MultipleUser";
import OnlineBusinessPlatform from "./OnlineBusinessPlatform";
export default function App() {
	// 	const initializeCarousel = () => {
	// 		const carousel = document.getElementById("featuresCarousel");
	// 		if (carousel) {
	// 			const interval = 3000; // Interval in milliseconds 3000
	// 			let slideIndex = 0; // Initialize slide index

	// 			const slides = carousel.querySelectorAll(".carousel-item");
	// 			const totalSlides = slides.length;

	// 			const showSlide = (index) => {
	// 				slides.forEach((slide) => {
	// 					slide.classList.remove("active");
	// 				});

	// 				slides[index].classList.add("active");
	// 			};

	// 			const nextSlide = () => {
	// 				slideIndex = (slideIndex + 1) % totalSlides;
	// 				showSlide(slideIndex);
	// 			};

	// 			const prevSlide = () => {
	// 				slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
	// 				showSlide(slideIndex);
	// 			};

	// 			let intervalId = setInterval(nextSlide, interval);

	// 			carousel.addEventListener("mouseenter", () =>
	// 				clearInterval(intervalId)
	// 			);
	// 			carousel.addEventListener("mouseleave", () => {
	// 				clearInterval(intervalId);
	// 				intervalId = setInterval(nextSlide, interval);
	// 			});

	// 			// const prevButton = document.querySelector(".carousel-control-prev");
	// 			// const nextButton = document.querySelector(".carousel-control-next");

	// 			// prevButton.addEventListener("click", prevSlide);
	// 			// nextButton.addEventListener("click", nextSlide);
	// 		}
	// 	};

	// 	initializeCarousel();
	// }, []);
	return (
		<div className="h-screen">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 20000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="h-full"
				id="featuresCarousel"
			>
				<SwiperSlide className="flex items-center justify-center bg-white">
					<SeatMgmt />
				</SwiperSlide>
				<SwiperSlide className="flex  items-center justify-center bg-white">
					<RegestrationBoard />
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center bg-white">
					<SmartDigitalAccount />
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center bg-white">
					<MultipleUser />
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center bg-white">
					<MultipleBusiness />
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center bg-white">
					<OnlineBusinessPlatform />
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center bg-white">
					<SPECIALSMARTFEATURES />
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center bg-white">
					<BusinessDashboard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
