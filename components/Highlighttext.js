"use client"
import { useState, useEffect } from "react";

const Highlighter = ({ index, currentIndex, children }) => {
	const [highlighted, setHighlighted] = useState(false);

	useEffect(() => {
		setHighlighted(index === currentIndex);
	}, [index, currentIndex]);

	return (
		<div
			className={`p-4 m-2 border border-gray-300 cursor-pointer ${
				highlighted ? "text-xl color-white font-bold" : ""
			}`}
		>
			{children}
		</div>
	);
};

const HT = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % 5); // Assuming there are 5 Highlighter components
		}, 10000);

		return () => clearInterval(timer);
	}, [currentIndex]);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Highlighter App</h1>
			<Highlighter index={0} currentIndex={currentIndex}>
				<div className="text-center w-[30rem] mt-12 px-7 py-2 rounded-lg bg-yellow-200 font-semibold">
					<h3 className="text-xl">Manage rooms according to their seats:</h3>
					<p className="text-sm -mt-2 text-gray-700">
						Make your room platform according to their seating capacity & their
						type
					</p>
				</div>
			</Highlighter>
			<Highlighter index={1} currentIndex={currentIndex}>
				<div className="text-center w-[30rem] mt-12 px-7 py-2 rounded-lg bg-yellow-200 font-semibold">
					<h3 className="text-xl">Track occupancy and availability</h3>
					<p className="text-sm -mt-2 text-gray-700">
						No waste of time to identify how many seats are available
					</p>
				</div>
			</Highlighter>
			<Highlighter index={2} currentIndex={currentIndex}>
				<div className="text-center w-[30rem] mt-12 px-7 py-2 rounded-lg bg-yellow-200 font-semibold">
					<h3 className="text-xl">Easy room and bed booking</h3>
					<p className="text-sm -mt-2 text-gray-700">
						20 seconds is much enough to allot room and seat for your tenant
					</p>
				</div>
			</Highlighter>
		</div>
	);
};

export default HT;
