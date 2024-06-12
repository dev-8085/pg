"use client";
// import React from "react";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SeatMgmt from "./Seat-mgmt";
import RegistrationBoard from "./RegistrationBoard";
import SmartDigitalAccount from "./ExpenseRecord";
import MultipleUser from "./MultipleUser";
import MultipleBusiness from "./MultipleBusiness";
import OnlineBusinessPlatform from "./OnlineBusinessPlatform";
import SPECIALSMARTFEATURES from "./TenantLeads";
import BusinessDashboard from "./BusinessDashboard";

// const FeatureCarousel = () => {
// 	const settings = {
// 		dots: false,
// 		infinite: true,
// 		pauseOnHover: true,
// 		swipeToSlide: true,
// 		autoplay: true,
// 		speed: 5000,
// 		autoplaySpeed: 2000,
// 		cssEase: "linear",
// 		slidesToShow: 6,
// 		slidesToScroll: 1,
// 		responsive: [
// 			{
// 				breakpoint: 1024,
// 				settings: {
// 					slidesToShow: 3,
// 					slidesToScroll: 3,
// 					infinite: true,
// 					dots: true,
// 				},
// 			},
// 			{
// 				breakpoint: 600,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 2,
// 					initialSlide: 2,
// 				},
// 			},
// 			{
// 				breakpoint: 480,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 				},
// 			},
// 		],
// 	};
// 	return (
// 		<div>
// 			<Slider {...settings}>
// 				<div>
// 					<SeatMgmt />
// 					<RegistrationBoard />
// 					<SmartDigitalAccount />
// 					<MultipleUser />
// 					<MultipleBusiness />
// 					<OnlineBusinessPlatform />
// 					<SPECIALSMARTFEATURES />
// 					<BusinessDashboard />
// 				</div>
// 			</Slider>
// 		</div>
// 	);
// };

// export default FeatureCarousel;

import React, { Component } from "react";
import Slider from "react-slick";

function FeatureCarousel() {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 13000,
		pauseOnHover: true,
	};
	return (
		<div className="flex justify-around">
			<div className="w-[95%] slick-button-bg  ">
				<Slider {...settings}>
					<SeatMgmt />
					<RegistrationBoard />
					<SmartDigitalAccount />
					<MultipleUser />
					<MultipleBusiness />
					<OnlineBusinessPlatform />
					<SPECIALSMARTFEATURES />
					<BusinessDashboard />
				</Slider>
			</div>
		</div>
	);
}

export default FeatureCarousel;
