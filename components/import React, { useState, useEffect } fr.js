import React, { useState, useEffect } from "react";
import "./App.css";

const StickyComponent = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;

			if (offset > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`sticky-container ${!isSticky ? "sticky" : "fixed"}`}>
			<div className="content">
				{/* Your content goes here */}
				Scroll down to see the effect!
			</div>
		</div>
	);
};

export default StickyComponent;
