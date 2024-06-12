"use client";
import Home from "@/components/Carousel-1";
import Tenant from "@/components/Tenant";
import Subscription from "@/components/Subscription";
import NewHomePage from "@/components/NewHomePage";
import NewSlider from "@/components/NewSlider";

import { useEffect, useRef, useState } from "react";

const page = () => {
	const [theme, setTheme] = useState("#FFF2D7");
	const divRefs = useRef([]);

	useEffect(() => {
		document.body.style.backgroundColor = theme;
	}, [theme]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const color = entry.target.getAttribute("data-color");
						if (color) {
							setTheme(color);
						}
					}
				});
			},
			{ threshold: 0.1 }
		);

		divRefs.current.forEach((div) => {
			if (div) {
				observer.observe(div);
			}
		});

		return () => {
			divRefs.current.forEach((div) => {
				if (div) {
					observer.unobserve(div);
				}
			});
		};
	}, []);

	return (
		<div>
			<div ref={(el) => (divRefs.current[0] = el)} data-color="#FFEFE0">
				<Home />
			</div>
			<div ref={(el) => (divRefs.current[1] = el)} data-color="#E3F4F4">
				<NewHomePage />
			</div>

			<div ref={(el) => (divRefs.current[2] = el)} data-color="#E0FBE2">
				<NewSlider />
			</div>
			<div ref={(el) => (divRefs.current[3] = el)} data-color="#FEECE2">
				<Tenant />
			</div>
			<div
				ref={(el) => (divRefs.current[4] = el)}
				// data-color="#F6CD90"
				data-color="#E3F4F4"
				className="mt-5"
			>
				<Subscription />
			</div>
		</div>
	);
};

export default page;
