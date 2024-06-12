"use client"
import React, { useEffect } from "react";
import gsap from "gsap";

const HomeAnim = () => {
	useEffect(() => {
		gsap.from(".slide", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
	}, []);

	return (
		<div id="myCarousel" className="carousel-fade">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<Slide1 />
				</div>
				<div className="carousel-item">
					<Slide2 />
				</div>
				<div className="carousel-item">
					<Slide3 />
				</div>
				<div className="carousel-item">
					<Slide4 />
				</div>
				<div className="carousel-item">
					<Slide5 />
				</div>
				<div className="carousel-item">
					<Slide6 />
				</div>
				<div className="carousel-item">
					<Slide7 />
				</div>
			</div>
		</div>
	);
};

const Slide1 = () => (
	<div className="slide h-screen flex items-center justify-center bg-gray-800">
		<div className="container mx-auto text-center">
			<h4 className="text-4xl text-white mb-8">Present your awesome product</h4>
			<p className="text-lg text-gray-300 mb-8">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<a
				href="#"
				className="bg-orange-500 text-white px-6 py-3 rounded-full inline-block uppercase tracking-wide"
			>
				BUY NOW
			</a>
		</div>
	</div>
);

const Slide2 = () => (
	<div className="slide h-screen flex items-center justify-center bg-gray-800">
		{/* Slide 2 content */}
	</div>
);

const Slide3 = () => (
	<div className="slide h-screen flex items-center justify-center bg-gray-800">
		{/* Slide 3 content */}
	</div>
);

const Slide4 = () => (
	<div className="slide h-screen flex items-center justify-center bg-gray-800">
		{/* Slide 4 content */}
	</div>
);

const Slide5 = () => (
	<div className="slide h-screen flex items-center justify-center bg-gray-800">
		{/* Slide 5 content */}
	</div>
);

const Slide6 = () => (
	<div className="slide h-screen flex items-center justify-center bg-gray-800">
		{/* Slide 6 content */}
	</div>
);

const Slide7 = () => (
	<div className="slide h-screen flex items-center justify-center bg-gray-800">
		{/* Slide 7 content */}
	</div>
);

export default HomeAnim;
