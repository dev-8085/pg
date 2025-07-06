"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const AboutUs = () => {
	const handleVisitClick = () => {
		window.open("https://mystrax.com/ankit/shivom/index.php", "_blank");
	};

	useEffect(() => {
		const container = document.querySelector(".animation-container-left");
		container.classList.add("animate-slide-in-left");
	}, []);
	useEffect(() => {
		const container = document.querySelector(".animation-container-right");
		container.classList.add("animate-slide-in-right");
	}, []);
	return (
		<>
			<div className="">
				<div className="relative aboutBg ">
					<div className="absolute top-2/3 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full ">
						<div className="text-white m-4 text-4xl transitionLeft animation-container-left">
							One Step Towards
						</div>
						<div className="text-white m-4 text-7xl transitionRight  animation-container-right">
							Securing Generation
						</div>
					</div>
					<div className="absolute bottom-3 right-3 ">
						<button
							type="button"
							onClick={handleVisitClick}
							className="py-2.5 px-5 me-2 mb-2 flex items-center gap-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						>
							Visit Us
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="16"
								height="16"
								fill="currentColor"
							>
								<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="container mx-auto p-8">
					<h2 className="text-3xl text-center text-orange-600 font-bold mb-8">
						A Short Glimpse About Us
					</h2>
					<div className="flex justify-center mb-8">
						<Image
							src="/media/heart.png"
							alt="Heart Logo"
							width={50}
							height={50}
						/>
					</div>
					<div className="border-2 border-gray-400 p-6 w-3/4 mx-auto text-gray-600">
						<p className="text-xl">
							Shivom Securanation envisions a world, where people have a
							meaningful experience with the smart and advanced technologies and
							solutions be it a digital security or digital management. We are
							the one where every digital interaction counts, be it through a
							web app, Android/Ios App, or through some other means like emails
							or text messages.
						</p>
					</div>
				</div>
			</div>

			<div className="bg-black">
				<div className="container mx-auto py-12 text-white">
					<h2 className="text-3xl text-center font-bold mb-8">Our History</h2>
					<div className="w-3/4 mx-auto text-lg text-center text-lemonchiffon">
						<p>
							With the years of analysis of various sectors and societies, The
							Shivom Securanation established in providing the ultimate security
							solutions to the schools and the other various organizations, in
							order to ensure their safety and to transform them typical and
							tedious workflow into easily accessible digital services. For more
							than 3 years of survey and analysis, Shivom Securanation has
							helped the schools and various other organizations to manage their
							Record/Data in an ultimate fashion and helping parents to get rid
							of the scare about their school going children. Our world-class
							products are designed with various advanced technologies by our
							creative team and expert advisors. Our products are designed to
							ensure the full proof safety of kid and women of our country and
							to provide actionable insights for them. Today, the products and
							the security and management solutions of Shivom Securanation are
							helping number of prestigious organizations of various sectors to
							reduce the crime against women and kids globally.
						</p>
					</div>
				</div>
			</div>

			<div className="bgimg5 mt-6">
				<div className="container mx-auto py-12 text-black">
					<h2 className="text-3xl text-center font-bold mb-8">Our Mission</h2>
					<div className="w-3/4 mx-auto text-lg">
						<p>
							We are determined to be an organization, who is solely dedicated
							to building a nation free of fears, scares, and crime. We follow a
							simple but powerful rule, 'Always give more to the people than
							they expect'. That's why we put extra efforts in designing and
							manufacturing innovative solutions using advanced technologies. We
							are constrained to provide a safe and scare-free future for the
							next generation. That's why we are developing advanced security
							and management solutions for the society so that they can tackle
							these serious consequences. This is what we are and this is how we
							work.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center  py-12">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold">Our Values</h2>
				</div>
				<div className="bg-black text-white max-w-5xl grid grid-cols-3 ">
					<div className="text-center border-r-2  flex flex-col items-center pt-4 px-4 pb-2">
						<Image
							src="/media/conscientiousIcon.png"
							alt="Conscientious Icon"
							width={60}
							height={60}
						/>
						<p className="text-xl font-bold mt-4">Conscientious</p>
						<p className="text-lg">
							Hardwork is the Identification of Honest Thinking.
						</p>
					</div>
					<div className="text-center border-r-2  flex flex-col items-center pt-4 px-4 pb-2">
						<Image
							src="/media/relationshipicon.png"
							alt="Relationship Icon"
							width={60}
							height={60}
						/>
						<p className="text-xl font-bold mt-4">Relationship</p>
						<p className="text-lg">Your Belief Relation Around Life</p>
					</div>
					<div className="text-center  flex flex-col items-center pt-4 px-4 pb-2">
						<Image
							src="/media/Solutionsicon.png"
							alt="Solutions Icon"
							width={60}
							height={60}
						/>
						<p className="text-xl font-bold mt-4">Solutions</p>
						<p className="text-lg">
							Security, Solutions to End Social Problems.
						</p>
					</div>
				</div>
				<div className="bg-black text-white max-w-5xl grid grid-cols-3 mt-3">
					<div className="text-center border-r-2  flex flex-col items-center pt-4 px-4 pb-2">
						<Image
							src="/media/Innovativeicon.png"
							alt="Innovative Icon"
							width={60}
							height={60}
						/>
						<p className="text-xl font-bold mt-4">Innovative</p>
						<p className="text-lg">
							Combine Hardwork, With Research and technology
						</p>
					</div>
					<div className="text-center border-r-2  flex flex-col items-center pt-4 px-4 pb-2">
						<Image
							src="/media/Articticicon.png"
							alt="Artistic Icon"
							width={60}
							height={60}
						/>
						<p className="text-xl font-bold mt-4">Artistry</p>
						<p className="text-lg">
							Artistic Thinking, New Inventions will Born.
						</p>
					</div>
					<div className="text-center   flex flex-col items-center pt-4 px-4 pb-2">
						<Image
							src="/media/Trustworthyicon.png"
							alt="Trustworthy Icon"
							width={60}
							height={60}
						/>
						<p className="text-xl font-bold mt-4">Trustworthy</p>
						<p className="text-lg">Your Trust, Our Motive</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
