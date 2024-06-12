"use client";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import SeatMgmt from "./Seat-mgmt";
import RegistrationBoard from "./RegistrationBoard";
import SmartDigitalAccount from "./ExpenseRecord";

const MyCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [scrollOffset, setScrollOffset] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const scrollDelta = scrollPosition - scrollOffset;

			// Change slide every 100 pixels scrolled
			if (Math.abs(scrollDelta) >= 100) {
				const newIndex = scrollDelta > 0 ? activeIndex + 1 : activeIndex - 1;
				setActiveIndex(newIndex);
				setScrollOffset(scrollPosition);
			}
		};

		const handleRouteChange = () => {
			// Reset slide index when returning to the component
			setActiveIndex(0);
			setScrollOffset(0);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("routeChangeComplete", handleRouteChange);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("routeChangeComplete", handleRouteChange);
		};
	}, [activeIndex, scrollOffset]);

	return (
		<Carousel activeIndex={activeIndex} interval={null} controls={false}>
			<Carousel.Item>
				<SeatMgmt />
				{/* <img src="slide1.jpg" alt="First slide" /> */}
			</Carousel.Item>
			<Carousel.Item>
				<RegistrationBoard />
				{/* <img src="slide2.jpg" alt="Second slide" /> */}
			</Carousel.Item>
			<Carousel.Item>
				<SmartDigitalAccount />
				{/* <img src="slide3.jpg" alt="Third slide" /> */}
			</Carousel.Item>
		</Carousel>
	);
};

export default MyCarousel;
