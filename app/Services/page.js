"use client";
import Services from "@/components/Services";
import FeatureHomepage from "@/components/FeatureHomepage";
import SmartFeaturesForYou from "@/components/SmartFeaturesForYou";
import NewSlider from "@/components/NewSlider";
import { useEffect, useRef, useState } from "react";

const servicePage = () => {
	const [theme, setTheme] = useState("white");
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
			<div
				ref={(el) => (divRefs.current[0] = el)}
				data-color="#F5E8DD"
				// className="section"
			>
				<FeatureHomepage />
			</div>
			<div
				ref={(el) => (divRefs.current[1] = el)}
				data-color="#FBF3D5"
				className="section"
				// style={{ height: "100vh" }}
			>
				<Services />
			</div>
			<div
				ref={(el) => (divRefs.current[2] = el)}
				data-color="#F7DCB9"
				className="section"
				// style={{ height: "100vh" }}
			>
				<NewSlider />
			</div>
			<div
				ref={(el) => (divRefs.current[3] = el)}
				data-color="#FFE0AC"
				className="section"
				// style={{ height: "100vh" }}
			>
				<SmartFeaturesForYou />
			</div>
		</div>
	);
};

export default servicePage;
