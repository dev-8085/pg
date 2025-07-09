"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

	const toggleNavbar = () => setIsOpen(!isOpen);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY <= 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="">
			{/* LOGO */}
			<div className="relative">
				<div className="hidden lg:block fixed top-0 left-0 z-50" style={{ width: "10rem" }}>
					<Image
						src="/media/smart-hostel-PG-02.png"
						alt="logo"
						width={160}
						height={60}
						priority
						className="ml-3 h-auto w-full"
					/>
				</div>
				<div className="lg:hidden flex items-center justify-between w-full px-4 pt-2">
					<Link href="/" className="d-block d-lg-none">
						<Image
							src="/media/smart-hostel-PG-02.png"
							alt="logo"
							width={140}
							height={60}
							className="h-auto w-auto"
						/>
					</Link>
					<button type="button" onClick={toggleNavbar}>
						{isOpen ? (
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
							</svg>
						)}
					</button>
				</div>

				{/* TOP STRIP */}
				<div className="hidden lg:flex flex-col">
					<div className="bg-white h-12 w-full font-semibold">
						<div className="flex ml-[13rem] justify-between">
							<div className="flex items-center gap-2">
								<Image
									src="/media/shree.jpg"
									alt="Shree Logo"
									width={30}
									height={30}
									className="h-auto w-auto mt-1"
								/>
								<h3 className="uppercase text-[#ED7C25] text-lg">
									Shivom <span className="text-black">Group</span>
								</h3>
							</div>
							<div className="flex items-center gap-4">
								<h3 className="text-sm pt-1">Available On</h3>
								<div className="flex gap-3 pt-2">
									<Link href="/GetApp">
										<Image
											src="/media/googlePlay.png"
											alt="Google Play"
											width={100}
											height={40}
											className="h-auto"
										/>
									</Link>
									<Link href="/GetApp">
										<Image
											src="/media/appStore.png"
											alt="App Store"
											width={100}
											height={40}
											className="h-auto"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* MAIN NAVBAR */}
			<div className={`hidden lg:block z-40 transition-all ${!isSticky ? "fixed top-0" : "sticky top-0"}`}>
				<div className="bg-black h-12 w-full flex items-center justify-between px-[15rem]">
					<ul className="flex gap-10 text-white">
						{NavLink.map((link) => (
							<li key={link.id}>
								<Link
									href={link.link}
									className={`${
										pathname === link.link ? "text-orange-500" : "text-white"
									} hover:text-orange-500 no-underline`}
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
					<Link href="/GetApp">
						<button className="text-white border px-3 py-1 rounded hover:bg-orange-500 hover:text-white">
							GET APP
						</button>
					</Link>
				</div>
			</div>

			{/* MOBILE NAVBAR DROPDOWN */}
			{isOpen && (
				<div className="lg:hidden px-4 pt-2 pb-4 bg-white shadow-md z-50 absolute w-full">
					{NavLink.map((link) => (
						<Link
							key={link.id}
							href={link.link}
							onClick={() => setIsOpen(false)}
							className={`block font-semibold py-2 rounded-lg ${
								pathname === link.link ? "text-orange-700" : "text-black"
							} hover:text-orange-700 no-underline`}
						>
							{link.title.toUpperCase()}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}

export default Navbar;
