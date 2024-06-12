"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestingCarousal = () => {
	useEffect(() => {
		const handleScroll = () => {
			const carousel = document.getElementById("myCarousel");
			if (carousel) {
				const slides = carousel.querySelectorAll(".carousel-item");
				const totalSlides = slides.length;

				let currentSlideIndex = 0;

				// Calculate the current slide index based on the scroll position
				slides.forEach((slide, index) => {
					console.log(index);
					const { top } = slide.getBoundingClientRect();
					console.log(top);
					if (top >= 0 && top < window.innerHeight) {
						currentSlideIndex = index;
					}
				});

				// Only allow scrolling when the last slide is visible
				// if (currentSlideIndex === totalSlides - 1) {
				// 	// Enable scrolling
				// 	document.body.style.overflow = "auto";
				// } else {
				// 	// Disable scrolling
				// 	document.body.style.overflow = "hidden";
				// }

				showSlide(currentSlideIndex);
			}
		};

		const showSlide = (index) => {
			const carousel = document.getElementById("myCarousel");
			const slides = carousel.querySelectorAll(".carousel-item");

			slides.forEach((slide) => {
				slide.classList.remove("active");
			});

			slides[index].classList.add("active");
		};

		// Attach scroll event listener to handle slide change on scroll
		window.addEventListener("scroll", handleScroll);

		// Cleanup: remove event listener when component unmounts
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const carouselData = [
		{
			id: 1,
			bgColor: "bg-green-200",
			textColor: "text-gray-500",
			pcolor: "text-orange-600",
			title: "NO WORRY FOR HUSTLE",
			description: "TO GIVE YOUR HOSTEL / PG ON RENT",
			description1: "S-MART WAY TO RENT YOUR PROPERTY",
			buttonColor: "text-gray-600",
			buttonText: "NOW",
			buttonborder: "border-black",
			imgSrc: "/media/now.png",
			textSize: "text-7xl",
			h4Size: "text-5xl",
			top: "top-[3vh]",
		},
		{
			id: 2,
			bgColor: "bg-green-200",
			textColor: "text-gray-600",
			pcolor: "text-white",
			title: "Hostel/PG management On your finger tip",
			description:
				"Are you tired of juggling multiple tasks and struggling? To keep up with the demands of running a hostel or PG business..!",
			description1:
				"Say goodbye to stress & troubles Hello to efficiency with our innovative System.You assuredly boost you businesses with this S-mart system.",
			buttonColor: "text-white",
			buttonText: "One Stop Solution",
			buttonborder: "border-white",
			imgSrc: "/media/hostelSofa.png",
			textSize: "text-5xl",
			h4Size: "text-5xl",
			top: "top-[90vh]",
		},
		{
			id: 3,
			bgColor: "bg-green-200",
			textColor: "text-orange-600",
			pcolor: "text-white",
			title: "To manage your all business",
			description:
				"Manage all your business in just one dashboard. 10 second is much enough to access your multiple branches.",
			description1:
				"S-Mart system provides you digital platform for hassle free management to your multiple businesses, free from paper work, provides you S-Mart team , all things you needed on just one click with super secured cloud storage",
			buttonColor: "text-gray-300",
			buttonText: "One app",
			buttonborder: "border-white",
			imgSrc: "/media/oneapp.png",
			textSize: "text-7xl",
			h4Size: "text-5xl",
			top: "top-[180vh]",
		},
		{
			id: 4,
			bgColor: "bg-green-200",
			textColor: "text-gray-600",
			pcolor: "text-gray-800",
			title:
				"Accessibility Anywhere, Anytime:  Seamlessly manage your business from  any device, Mobile-Tab-Desktop Compatibility",
			description: "Tailored Applications for Every Platform",
			description4: "IOS",
			description2: "ANDROID",
			description3: "WINDOWS",
			buttonColor: "text-orange-600",
			buttonText: "WOW",
			buttonborder: "border-white ",
			imgSrc: "/media/wow1.png",
			textSize: "text-7xl",
			h4Size: "text-4xl",
			border: "border",
			borderBlack: "border-black",
			top: "top-[270vh]",
		},
	];

	return (
		<div
			id="myCarousel"
			className="carousel  fixed  slide carousel-fade   font-['Berlin_Sans_FB']"
			data-ride="carousel"
		>
			<div className="carousel-inner h-[100%]">
				{carouselData.map((item, index) => (
					<div
						key={index}
						className={`carousel-item ${item.bgColor}  h-screen active`}
					>
						<div className="mask  h-full w-full  flex-center">
							<div className="container m-0 p-0">
								<div className="row  ">
									<div className="col-lg-6  mt-4 col-12 order-md-1  order-2">
										<a
											href="/GetApp"
											className={`lg:${item.textSize}  text-3xl ${item.buttonColor} ${item.buttonborder} border-2 mb-5 text-start no-underline  pl-1 pr-8 ml-4 rounded-xl py-1 inline-block`}
										>
											{item.buttonText}
										</a>
										<h4
											className={`lg:${item.h4Size} text-xl mb-[15px] ${item.textColor} text-center font-normal`}
										>
											{item.title}
										</h4>
										<div
											className={`lg:text-2xl text-lg mb-[15px] ${item.pcolor} text-center`}
										>
											<p>{item.description}</p>
											<p>{item.description1}</p>
											<div className="text-xl text-center flex lg:ml-28 lg:gap-5 gap-1 items-center ">
												<p
													className={` px-3 y-2 ${item.border}  ${item.borderBlack} items-center rounded  `}
												>
													{item.description4}
												</p>
												<p
													className={` px-3 y-2 ${item.border} ${item.borderBlack} items-center rounded  `}
												>
													{item.description2}
												</p>
												<p
													className={` px-3 y-2 ${item.border} ${item.borderBlack} items-center rounded  `}
												>
													{item.description3}
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6   order-1">
										<img src={item.imgSrc} alt="slide" />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TestingCarousal;
