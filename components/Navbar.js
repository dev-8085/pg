"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { offset } from "@popperjs/core";
import { event } from "jquery";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const NavLink = [
	{
		id: 1,
		link: "/",
		title: "Home",
	},
	{
		id: 2,
		link: "/Find",
		title: "Find PGs & Hostel",
	},
	{
		id: 3,
		link: "/Services",
		title: "Features",
	},
	{
		id: 4,
		link: "/About",
		title: "About",
	},
	{
		id: 5,
		link: "/Contact",
		title: "Contact",
	},
];

function Navbar() {
	const router = useRouter();
	const pathname = usePathname();
	// console.log(pathname);
	const [isOpen, setIsOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(true);
	const [activePage, setActivePage] = useState("");

	useEffect(() => {
		setActivePage(window.location.pathname);
		console.log(window.location.pathname);
	}, []);

	// const isActive = (path) => path === pathname;

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;

			// Change this value according to your needs
			if (offset > 0) {
				setIsSticky(false);
			} else {
				setIsSticky(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		// console.log(offset, isSticky);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			// console.log(offset, isSticky);
		};
	}, []);

	return (
		<nav className="">
			<div className="relative">
				<div
					className="hidden lg:block fixed top-0 left-0 z-50 inline-style"
					style={{ width: "10rem" }}
				>
					<Image
						src="/media/smart-hostel-PG-02.png"
						alt="logo"
						height={80}
						width={500}
						priority
						className="w-[100%] ml-3 h-[100%]"
					/>
				</div>
				<div className="lg:hidden text-black flex items-center gap-[10rem]">
					<a href="/" className="navbar-brand d-block d-lg-none">
						<Image
							src="/media/smart-hostel-PG-02.png"
							alt="logo"
							height={80}
							width={140}
						/>
					</a>
					<button
						type="button"
						className="navbar-toggler"
						// data-bs-toggle="collapse"
						// data-bs-target="#navbarCollapse"
						onClick={toggleNavbar}
					>
						{isOpen ? (
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>

				<div className="hidden lg:flex flex-col items-center justify-between">
					<div className="bg-white h-12 w-full font-semibold">
						<div className="flex ml-[13rem] justify-between">
							<div className="flex">
								<Image
									src="/media/shree.jpg"
									alt=""
									height={10}
									width={25}
									className="mt-3"
								/>
								<h3 className="uppercase text-[#ED7C25] pt-6 text-lg">
									Shivom <span className="text-black">Group</span>
								</h3>
							</div>
							<div className="flex gap-10">
								<h3 className="pt-6 text-sm	">Available On </h3>
								<div className="flex gap-3">
									<a className="" href="/GetApp">
										<Image
											src="/media/googlePlay.png"
											alt=""
											height={20}
											width={100}
											className="pt-3"
										/>
									</a>
									<a className="me-3" href="/GetApp">
										<Image
											src="/media/appStore.png"
											alt=""
											height={20}
											width={100}
											className="pt-3 mr-4"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`sticky-container hidden lg:block transition-all delay-150 ease-in-out z-40 ${
					!isSticky ? "fixed" : "sticky"
				}`}
			>
				<div className="bg-black  top-0 h-12 w-full flex items-center justify-between pl-[15rem] main-nav">
					<div className="">
						<ul className="flex pt-3 gap-10 items-center text-white">
							{NavLink.map((link) => {
								return (
									<li>
										<Link
											key={link.id}
											href={link.link}
											className={`${
												activePage === link.link
													? "text-orange-500"
													: "text-white"
											} hover:text-orange-500 no-underline`}
											// className="text-white no-underline"
										>
											{link.title}
										</Link>
									</li>
								);
							})}
						</ul>
						{ <ul className="flex pt-3 gap-10 items-center text-white">
							<li>
								<Link
									href="/"
									className={`${
										activePage === "/" ? "text-orange-500" : "text-white"
									} hover:text-orange-500 no-underline`}
									// className="text-white no-underline"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/Find"
									className={`${
										activePage === "/Find" ? "text-orange-500" : "text-white"
									} hover:text-orange-500 no-underline`}
									// className="text-white no-underline"
								>
									Find PGs & Hostels
								</Link>
							</li>
							<li>
								<Link
									href="/Services"
									className={`${
										activePage === "/Services"
											? "text-orange-500"
											: "text-white"
									} hover:text-orange-500 no-underline`}
									// className="text-white no-underline"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="/About"
									// target="_blank"
									className={`${
										activePage === "/About" ? "text-orange-500" : "text-white"
									} hover:text-orange-500 no-underline`}
									// className="text-white no-underline"
								>
									About
								</Link>
							</li>

							<li>
								<Link
									href="/Contact"
									className={`${
										activePage === "/contact" ? "text-orange-500" : "text-white"
									} hover:text-orange-500 no-underline`}
									// className="text-white no-underline"
								>
									Contact
								</Link>
							</li>
						</ul> }
					</div>
					<div className="text-white sticky mr-4 decoration-none no-underline">
						<Link href="/GetApp" className="decoration-none no-underline">
							<button>GET APP</button>
						</Link>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2  pb-3 space-y-1 sm:px-3">
						<Link
							href="/"
							className="text-black no-underline font-semibold block hover:text-orange-700 rounded-lg p-2"
						>
							HOME
						</Link>
						<Link
							href="/Find"
							className="text-black no-underline font-semibold block hover:text-orange-700 rounded-lg p-2 "
						>
							FIND PGs & HOSTEL
						</Link>
						<Link
							href="/Services"
							className="text-black no-underline font-semibold block hover:text-orange-700 rounded-lg p-2 "
						>
							FEATURES
						</Link>
						<Link
							href="/About"
							className="text-black no-underline font-semibold block hover:text-orange-700 rounded-lg p-2 "
						>
							ABOUT
						</Link>

						<Link
							href="/Contact"
							className="text-black no-underline font-semibold block hover:text-orange-700 rounded-lg p-2 "
						>
							CONTACT
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
export default Navbar;
