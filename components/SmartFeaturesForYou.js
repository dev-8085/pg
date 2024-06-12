"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBell,
	faCalculator,
	faChalkboardUser,
	faChartSimple,
	faClipboardUser,
	faCoffee,
	faFileInvoice,
	faFileLines,
	faFileShield,
	faMobileRetro,
	faMoneyCheck,
	faUsersGear,
	fafilelines,
} from "@fortawesome/free-solid-svg-icons";

import { config	 } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
	{
		name: "One app",
		icon: faMobileRetro,
		description: "to manage all your business",
		color: "text-[#FFD43B]",
	},
	{
		name: "Records",
		icon: faFileLines,
		description: "digital manager for tenant records",
		color: "text-[#e6c893]",
	},
	{
		name: "Admission",
		icon: faClipboardUser,
		description: "online & digital tenant registration",
		color: "text-[#95e4f4]",
	},
	,
	{
		name: "Collection ",
		icon: faMoneyCheck,
		description: "hassel free rent collection",
		color: "text-[#3fea10]",
	},
	{
		name: "Accountant",
		icon: faFileInvoice,
		description: "digital & S-mart accountant",
		color: "text-[#8D6F64]",
	},
	{
		name: "Manager",
		icon: faUsersGear,
		description: "Rooms,lead & complaint manager",
		color: "text-[#FFD43B]",
	},
	{
		name: "Tenant app ",
		icon: faChalkboardUser,
		description: "For transparent and easy record",
		color: "text-[#63E6BE]",
	},
	{
		name: "Roles ",
		icon: faUsersGear,
		description: "manage employee attendance,records and roles ",
		color: "text-[#3fea10]",
	},
	{
		name: "Audit",
		icon: faChartSimple,
		description: "Smart audit system profit/loss records",
		color: "text-[#95e4f4]",
	},
	{
		name: "Calculate ",
		icon: faCalculator,
		description: "calculate and manage electricity bill",
		color: "text-[#8D6F64]",
	},
	{
		name: "Backup",
		icon: faFileShield,
		description: "Google cloud backup & restore ",
		color: "text-[#95e4f4]",
	},
	{
		name: "Remainder",
		icon: faBell,
		description: "Billing, updates and collection remainder",
		color: "text-[#3fea10]",
	},
	{
		name: "Reports ",
		icon: faFileInvoice,
		description: "create expense and sales report ",
		color: "text-[#95e4f4]",
	},
];

const SmartFeaturesForYou = () => {
	// useEffect(() => {
	// 	function setScrollSlide() {
	// 		$(".sponserPoster").slick({
	// 			dots: false,
	// 			infinite: true,
	// 			speed: 150,
	// 			slidesToShow: 6,
	// 			slidesToScroll: 1,
	// 			autoplay: true,
	// 			autoplaySpeed: 2000,
	// 			responsive: [
	// 				{
	// 					breakpoint: 1024,
	// 					settings: {
	// 						slidesToShow: 3,
	// 						slidesToScroll: 1,
	// 						infinite: true,
	// 						dots: false,
	// 					},
	// 				},
	// 				{
	// 					breakpoint: 600,
	// 					settings: {
	// 						slidesToShow: 2,
	// 						slidesToScroll: 1,
	// 					},
	// 				},
	// 				{
	// 					breakpoint: 480,
	// 					settings: {
	// 						slidesToShow: 1,
	// 						slidesToScroll: 1,
	// 					},
	// 				},
	// 			],
	// 		});
	// 	}
	// 	setScrollSlide();
	// }, []);

	const settings = {
		dots: false,
		infinite: true,
		pauseOnHover: true,
		swipeToSlide: true,
		autoplay: true,
		speed: 10000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="h-[17rem] relative   mt-20 ">
			<div className="absolute bg-gray-400 rounded-lg  text-white -top-6 left-5 h-[3rem]  border-black ">
				<h1 className="text-2xl text-center p-1 px-3  ">
					S-mart Features
				</h1>
		    </div>
		    <div className="h-1"></div>
			<div className="w-[96vw] mx-auto mt-10 ">
				<div className="mt-5">
					<Slider {...settings}>
						{data.map((d) => (
							<div
								className="card border-0 lg:h-[13rem]  shadow"
								style={
									{
										// height: "300px !important",
										// width: "100px !important",
									}
								}
							>
								<div className="card-body ">
									<div className="d-flex align-items-center flex-column">
										<div className=" text-center mb-1">
											<FontAwesomeIcon
												icon={d.icon}
												className={` ${d.color} custom-icon-class`}
												style={{ "fontSize": "3rem" }}
											/>
										</div>
										<h5 className={`card-title  ${d.color} text-2xl text-center`}>
											{d.name}
										</h5>
									</div>
									<p className="text-center" style={{ fontSize: "1rem" }}>
										{d.description}
									</p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>

			{/* <div className="container my-5">
				<div className="container bg-light shadow-lg py-3 rounded  px-5">
					<h5 className="ms-3 fw-bold">S-mart Features For You</h5>
					<div className="container sponserPoster">
						<div
		                    className="card shadow h-100"
		                    style={{ "height": "180px !important", "width": "300px !important" }}
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container text-center mb-1">
										<i
		                                    className="fa-solid fa-mobile-retro"
		                                    style={{ "color": "#FFD43B", "font-size": "3rem" }}
										></i>
									</div>
									<h5 className="card-title text-warning text-center">One App</h5>
								</div>
		                        <p className="text-center" style={{ "font-size":"0.8rem"}}>
									To manage all your business
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style={{"height":"180px !important","width":"300px !important"}}
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container text-center mb-1">
										<i
											className="fa-solid fa-file-lines"
											style="color: #e6c893;font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#e6c893">
										Record
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Digital manager for tenant records
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container text-center mb-1">
										<i
											className="fa-solid fa-clipboard-user"
											style="color: #95e4f4;font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#95e4f4">
										Admission
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Online & digital tenant registration
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container text-center mb-1">
										<i
											className="fa-solid fa-money-check"
											style="color: #3fea10;font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#3fea10">
										Collection
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Hassle free rent collection
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container text-center mb-1">
										<i
											className="fa-solid fa-file-invoice"
											style="color: #8D6F64;font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#8D6F64">
										Accountant
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Digital & Smart account accountant
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container text-center mb-1">
										<i
											className="fa-solid fa-users-gear"
											style="color: #FFD43B;font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-warning text-center">Manager</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Rooms, lead & complaint manager
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container mb-1 text-center">
										<i
											className="fa-solid fa-chalkboard-user"
											style="color: #63E6BE; font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#63E6BE">
										Tenant App
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									For transparent & easy records
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container mb-1 text-center">
										<i
											className="fa-solid fa-user-gear"
											style="color: #3fea10; font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#3fea10">
										Roles
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Manage employee Attendance, records & roles
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container mb-1 text-center">
										<i
											className="fa-solid fa-chart-simple"
											style="color: #95e4f4; font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#95e4f4">
										Audit
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Smart Audit system profit/loss records
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container mb-1 text-center">
										<i
											className="fa-solid fa-calculator"
											style="color: #8D6F64; font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#8D6F64">
										Calculate
									</h5>
								</div>
		                        <p className="text-center" style={{ "font-size":"0.8rem"}}>
									Calculate And Manage electricity bill
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container mb-1 text-center">
										<i
											className="fa-solid fa-file-shield"
											style="color: #95e4f4; font-size:3rem"
										></i>
									</div>
									<h5 className="card-title  text-center" style="color:#95e4f4">
										Back-Up
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Google cloud backup & restore
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container mb-1 text-center">
										<i
											className="fa-solid fa-bell"
											style="color: #3fea10; font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#3fea10">
										Reminder
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Billing, updates & collection reminder
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style="height:180px !important;width:300px !important;"
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container mb-1 text-center">
										<i
											className="fa-solid fa-file-invoice"
											style="color:#95e4f4;font-size:3rem"
										></i>
									</div>
									<h5 className="card-title text-center" style="color:#95e4f4;">
										Reports
									</h5>
								</div>
								<p className="text-center" style="font-size:0.8rem">
									Create expense & sale Report
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* <div className="container my-5">
				<div className="container bg-light shadow-lg py-3 rounded px-5">
					<h5 className="ms-3 fw-bold">S-mart Features For You</h5>
					<div className="container sponserPoster">
						<div
							className="card shadow h-100"
							style={{ height: "180px !important", width: "300px !important" }}
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container text-center mb-1">
										<FontAwesomeIcon
											icon={faMobileRetro}
											className="custom-icon-class"
											style={{ color: "#FFD43B", "fontSize": "3rem" }}
										/>
									</div>
									<h5 className="card-title text-warning text-center">
										One App
									</h5>
								</div>
								<p className="text-center" style={{ fontSize: "0.8rem" }}>
									To manage all your business
								</p>
							</div>
						</div>
						<div
							className="card shadow h-100"
							style={{ height: "180px !important", width: "300px !important" }}
						>
							<div className="card-body">
								<div className="d-flex align-items-center flex-column">
									<div className="container text-center mb-1">
										<i
											className="fa-solid fa-file-lines"
											style={{ color: "#e6c893", fontSize: "3rem" }}
										></i>
									</div>
									<h5
										className="card-title text-center"
										style={{ color: "#e6c893" }}
									>
										Record
									</h5>
								</div>
								<p className="text-center" style={{ fontSize: "0.8rem" }}>
									Digital manager for tenant records
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>

		
	);
};

export default SmartFeaturesForYou;
