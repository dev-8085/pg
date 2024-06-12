"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePathname } from "next/navigation";

const NavLink = [
	{ id: 1, link: "/", title: "Home" },
	{ id: 2, link: "/Find", title: "Find PGs & Hostel" },
	{ id: 3, link: "/Services", title: "Features" },
	{ id: 4, link: "/About", title: "About" },
	{ id: 5, link: "/Contact", title: "Contact" },
];

function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(true);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			setIsSticky(offset === 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className=" ">
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
								<h3 className="pt-6 text-sm">Available On</h3>
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
				<div className="bg-black top-0 h-12 w-full flex items-center justify-between pl-[15rem]  main-nav">
					<div className="">
						<ul className="flex gap-10 items-center text-white uppercase">
							{NavLink.map((link) => (
								<li key={link.id}>
									<Link
										href={link.link}
										className={`${
											pathname === link.link ? "text-orange-400" : "text-white"
										} hover:text-orange-400 font-semibold no-underline`}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="text-white sticky mr-4 -ml-20 bg decoration-none no-underline">
						<Link
							href="/GetApp"
							className={`${
								pathname === "/GetApp" ? "text-orange-400" : "text-white"
							} hover:text-orange-400 font-semibold   no-underline`}
							// className="decoration-none text-white no-underline"
						>
							<button>GET APP</button>
						</Link>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{NavLink.map((link) => (
							<Link
								key={link.id}
								href={link.link}
								className={`text-black no-underline font-semibold block hover:text-orange-700 rounded-lg p-2 ${
									pathname === link.link ? "bg-gray-200" : ""
								}`}
							>
								{link.title.toUpperCase()}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
