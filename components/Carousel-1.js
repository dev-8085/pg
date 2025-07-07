"use client";
import Link from "next/link";
import { useEffect } from "react";

const Home = () => {
	const carouselData = [
		{
			bgColor: "bg-gray-200",
			textColor: "text-gray-500",
			pcolor: "text-orange-600",
			title: "NO WORRY FOR HUSTLE",
			description: "TO GIVE YOUR HOSTEL / PG ON RENT",
			description1: "S-MART WAY TO RENT YOUR PROPERTY",
			buttonColor: "text-gray-600",
			buttonText: "NOW",
			buttonborder: "border-[#155263]",
			imgSrc: "/media/now.png",
			textSize: "text-7xl",
			margintop: "mt-10",
			pmargin: "mt-7",
			h4Size: "text-5xl",
		},
		{
			bgColor: "bg-[#C2B280]",
			textColor: "text-gray-600",
			pcolor: "text-[#272343]",
			title: "Hostel/PG management On your finger tip",
			description:
				"Are you tired of juggling multiple tasks and struggling? To keep up with the demands of running a hostel or PG business..!",
			description1:
				"Say goodbye to stress & troubles Hello to efficiency with our innovative System.You assuredly boost you businesses with this S-mart system.",
			buttonColor: "text-[#272343]",
			buttonText: "One Stop Solution",
			buttonborder: "border-[#155263]",
			imgSrc: "/media/hostelSofa.png",
			textSize: "text-5xl",
			h4Size: "text-5xl",
			margintop: "mt-5",
		},
		{
			bgColor: "bg-[#30302f]",
			textColor: "text-orange-600",
			pcolor: "text-[#155263]",
			title: "To manage your all business",
			description:
				"Manage all your business in just one dashboard. 10 second is much enough to access your multiple branches.",
			description1:
				"S-Mart system provides you digital platform for hassle free management to your multiple businesses, free from paper work, provides you S-Mart team , all things you needed on just one click with super secured cloud storage",
			buttonColor: "text-gray-700",
			buttonText: "One app",
			buttonborder: "border-[#155263]",
			imgSrc: "/media/oneapp.png",
			textSize: "text-7xl",
			h4Size: "text-5xl",
			margintop: "mt-5",
		},
		{
			bgColor: "bg-[#d3e7f1]",
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
			buttonborder: "border-[#155263]",
			imgSrc: "/media/wow1.png",
			textSize: "text-7xl",
			h4Size: "text-4xl",
			border: "border",
			borderBlack: "border-black",
			margintop: "mt-5",
		},
	];

	useEffect(() => {
		const initializeCarousel = () => {
			const carousel = document.getElementById("myCarousel");
			if (carousel) {
				const interval = 3000;
				let slideIndex = 0;

				const slides = carousel.querySelectorAll(".carousel-item");
				const totalSlides = slides.length;

				slides.forEach((slide, index) => {
					if (index === 0) {
						slide.classList.add("active");
					} else {
						slide.classList.remove("active");
					}
				});

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
			}
		};

		initializeCarousel();
	}, []);

	return (
		<div
			id="myCarousel"
			className="carousel slide carousel-fade relative font-['Berlin_Sans_FB']"
			data-ride="carousel"
		>
			<div className="carousel-inner w-full lg:h-[80vh]">
				{carouselData.map((item, index) => (
					<div
						key={index}
						className={`carousel-item p-3 h-screen ${index === 0 ? "active" : ""}`}
					>
						<div className="mask h-full w-full flex-center">
							<div className="m-0">
								<div className="row">
									<div className="col-lg-6 h-[80vh] lg:mt-4 col-12 order-md-1 order-1">
										<Link
											href="/CommingSoon"
											className={`lg:${item.textSize} ${item.margintop} text-3xl ${item.buttonColor} ${item.buttonborder} border-2 mb-5 text-start no-underline pl-1 pr-8 ml-4 rounded-xl py-1 inline-block`}
										>
											{item.buttonText}
										</Link>
										<div className="flex flex-col items-center justify-center gap-2 lg:ml-5">
											<h4
												className={`lg:${item.h4Size} text-2xl px-2 mb-[15px] ${item.textColor} text-center font-normal`}
											>
												{item.title}
											</h4>
											<div
												className={`lg:text-2xl text-lg mb-[15px] ${item.pcolor} ${item.pmargin} text-center`}
											>
												<p className={`${item.pmargin} px-2`}>
													{item.description}
												</p>
												<p className="px-2">{item.description1}</p>
												<div className="text-xl text-center flex gap-2 lg:gap-4 items-center">
													<p
														className={`px-3 py-2 ${item.border} ${item.borderBlack} items-center rounded`}
													>
														{item.description4}
													</p>
													<p
														className={`px-3 py-2 ${item.border} ${item.borderBlack} items-center rounded`}
													>
														{item.description2}
													</p>
													<p
														className={`px-3 py-2 ${item.border} ${item.borderBlack} items-center rounded`}
													>
														{item.description3}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 hidden lg:block order-2">
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

export default Home;
