"use client";
import Link from "next/link";
import { useEffect } from "react";

const CopyCarousel = ({data}) => {
	useEffect(() => {
		const initializeCarousel = () => {
			const carousel = document.getElementById("myCarousel");
			if (carousel) {
				const interval = 3000; // Interval in milliseconds
				let slideIndex = 0; // Initialize slide index

				const slides = carousel.querySelectorAll(".carousel-item");
				const totalSlides = slides.length;

				const showSlide = (index) => {
					slides.forEach((slide) => {
						slide.classList.remove("active");
					});

					slides[index].classList.add("active");
				};

				const nextSlide = () => {
					slideIndex = (slideIndex + 1) % totalSlides;
					showSlide(slideIndex);
				};

				const prevSlide = () => {
					slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
					showSlide(slideIndex);
				};

				let intervalId = setInterval(nextSlide, interval);

				carousel.addEventListener("mouseenter", () =>
					clearInterval(intervalId)
				);
				carousel.addEventListener("mouseleave", () => {
					clearInterval(intervalId);
					intervalId = setInterval(nextSlide, interval);
				});

				const prevButton = document.querySelector(".carousel-control-prev");
				const nextButton = document.querySelector(".carousel-control-next");

				prevButton.addEventListener("click", prevSlide);
				nextButton.addEventListener("click", nextSlide);
			}
		};

		initializeCarousel();
	}, []);

	return (
		<div
			id="myCarousel"
			className="carousel slide carousel-fade lg:mt-[6.9rem]"
			data-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className="mask flex-center">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-md-7 col-12 order-md-1 order-2">
									<h4>
										Present your <br /> awesome product
									</h4>
									<p>
										Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
										quidem rerum <br />
										necessitatibus praesentium voluptatum deleniti atque
										corrupti.
									</p>
									<a href="/CommingSoon">BUY NOW</a>
								</div>
								<div className="col-md-5 col-12 order-md-2 order-1">
									<img
										src="https://i.imgur.com/NKvkfTT.png"
										className="mx-auto"
										alt="slide"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<div className="mask flex-center">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-md-7 col-12 order-md-1 order-2">
									<h4>
										Present your <br /> awesome product
									</h4>
									<p>
										Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
										quidem rerum <br />
										necessitatibus praesentium voluptatum deleniti atque
										corrupti.
									</p>
									<a href="#">BUY NOW</a>
								</div>
								<div className="col-md-5 col-12 order-md-2 order-1">
									<img
										src="https://i.imgur.com/duWgXRs.png"
										className="mx-auto"
										alt="slide"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<div className="mask flex-center">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-md-7 col-12 order-md-1 order-2">
									<h4>
										Present your <br /> awesome product
									</h4>
									<p>
										Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
										quidem rerum <br />
										necessitatibus praesentium voluptatum deleniti atque
										corrupti.
									</p>
									<a href="#">BUY NOW</a>
								</div>
								<div className="col-md-5 col-12 order-md-2 order-1">
									<img
										src="https://i.imgur.com/DGkR4OQ.png"
										className="mx-auto"
										alt="slide"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link
				className="carousel-control-prev"
				href="#myCarousel"
				role="button"
				data-slide="prev"
			>
				<span
					className="carousel-control-prev-icon mt-[60rem]"
					aria-hidden="true"
				></span>
				<span className="sr-only">Previous</span>
			</Link>
			<a
				className="carousel-control-next"
				href="#myCarousel"
				role="button"
				data-slide="next"
			>
				<span
					className="carousel-control-next-icon mt-[60rem]"
					aria-hidden="true"
				></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};

export default CopyCarousel;
