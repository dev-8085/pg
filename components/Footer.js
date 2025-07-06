"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";

const data = {
	contacts: [
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="18"
					height="18"
					fill="currentColor"
					className="w-[4rem]"
				>
					<path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
				</svg>
			),
			text: "D-3, Vidya Vihar, In Front of BU, Narmadapuram Road, Bhopal MP-462026",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="18"
					height="18"
					fill="currentColor"
					className="w-[1.5rem]"
				>
					<path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
				</svg>
			),
			text: "0755-493-7957, 7879868904",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="18"
					height="18"
					fill="currentColor"
					className="w-[1.5rem] "
				>
					<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
				</svg>
			),
			text: "contact@shivomsecuranation.com",
		},
	],
	companyLinks: [
		{ text: "About Us", href: "/About" },
		{ text: "Contact Us", href: "/Contact" },
		{ text: "Privacy Policy", href: "/" },
		{ text: "Terms & Condition", href: "/" },
		{ text: "Support", href: "/" },
	],
	highlightsLinks: [
		{ text: "Room Seat Management", href: "" },
		{ text: "Admissions & Registrations", href: "" },
		{ text: "S-mart Digital Account", href: "" },
		{ text: "Multiple User", href: "" },
		{ text: "One Dashboard for Multiple Business", href: "" },
		{ text: "Online Business Problem", href: "" },
		{ text: "Special S-mart Features", href: "" },
		{ text: "Different From Others", href: "" },
		{ text: "S-mart Tenant App", href: "" },
	],
};
const Footer = () => {
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="relative ">
				<Modal />

				<div
					class="container-fluid bg-dark text-white footer wow fadeIn"
					data-wow-delay="0.1s"
				>
					<div class="container pb-5">
						<div class="row g-5 pt-5">
							<div className="col-md-6 col-lg-4  flex flex-col">
								<div class=" mb-3">
									<div class="   flex flex-col items-center rounded uppercase text-black">
										<Image
											src="/media/smart.jpg"
											alt=""
											height={100}
											width={300}
											// className="-mt-5"
										/>
									</div>
								</div>
								<div class=" mt-4 ">
									<div class="bg-gray-300 relative  flex flex-col items-center rounded p-4 uppercase text-black">
										<div className="absolute -top-6 left-3">
											<button
												type="button"
												class="focus:outline-none text-white bg-gray-600  border-2 border-gray-900  font-bold rounded-lg text-3xl px-2 py-1 me-2 mb-2 "
											>
												Now
											</button>
										</div>
										<h1 className="font-bold text-2xl mt-3">
											No worry for hustle
										</h1>
										<h3 className="text-sm">
											to give your Hostel / PG on rent
										</h3>
									</div>
								</div>
								<div class="max-w-sm flex items-center justify-center space-y-3">
									<div className="mt-3 ">
										<label for="hs-trailing-button-add-on" class="sr-only">
											Label
										</label>
										<div class="flex  rounded-lg shadow-sm h-[3rem]">
											<div
												// type="text"
												// id="hs-trailing-button-add-on"
												// name="hs-trailing-button-add-on"
												// placeholder="Start your journey"
												class="py-2 bg-white text-gray-600 text-lg px-4 block w-full border-gray-200 shadow-sm rounded-s-lg  focus:z-10  disabled:opacity-50 disabled:pointer-events-none"
											>
												<p> Start your journey </p>
											</div>
											<Link href="/GetApp">
												<button
													type="button"
													class="py-[0.85rem] px-2 w-[10rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-[#D1D5DB] text-black hover:text-white hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none"
												>
													Get App
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														width="18"
														height="18"
														fill="currentColor"
													>
														<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
													</svg>
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
							{/* CONTACT  */}
							<div class="col-md-6 col-lg-3 flex flex-col items-start ">
								<h6 class="section-title text-start text-[#FEA116] text-uppercase mb-4">
									Contact
								</h6>

								<div>
									{data.contacts.map((item, index) => (
										<div
											key={index}
											className="mb-3 flex flex-row gap-2 items-start"
										>
											{item.icon}
											<p>{item.text}</p>
										</div>
									))}
								</div>
							</div>

							<div class="col-lg-5 col-md-12 ">
								<div class="row gy-5 g-4">
									{/* COMPANY  */}

									<div className="col-md-6 flex flex-col items-start">
										<h6 className="section-title text-start text-[#FEA116] text-uppercase mb-4">
											Company
										</h6>
										{/* Mapping over the links array */}
										{data.companyLinks.map((link, index) => (
											<Link
												key={index}
												href={link.href}
												className=" text-white text-sm flex flex-row no-underline items-center gap-1 hover:animate-pulse"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="18"
													height="18"
													fill="currentColor"
												>
													<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
												</svg>
												<h6 className="mt-2">{link.text}</h6>
											</Link>
										))}
									</div>

									{/* HIGHLIGHTS  */}

									<div className="col-md-6 flex flex-col items-start">
										<h6 className="section-title text-[#FEA116] text-start text-uppercase mb-4">
											Highlights
										</h6>
										{/* Mapping over the highlights array */}
										{data.highlightsLinks.map((highlight, index) => (
											<Link
												key={index}
												href="#"
												className="no-underline flex-row text-white text-sm flex items-center gap-1 hover:animate-pulse"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="18"
													height="18"
													fill="currentColor"
												>
													<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
												</svg>
												<h6 className="text-start mt-2">{highlight.text}</h6>
											</Link>
										))}
										<div className="d-flex gap-2 pt-2 mt-4">
											{/* Social media buttons */}
											<Link class="btn btn-outline-light btn-social" href="">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="24"
													height="24"
													fill="currentColor"
												>
													<path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
												</svg>
											</Link>

											<Link class="btn btn-outline-light btn-social" href="">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="24"
													height="24"
													fill="currentColor"
												>
													<path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
												</svg>
											</Link>

											<Link class="btn btn-outline-light btn-social" href="">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="24"
													height="24"
													fill="currentColor"
												>
													<path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
												</svg>
											</Link>

											<Link class="btn btn-outline-light btn-social" href="">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width="24"
													height="24"
													fill="currentColor"
												>
													<path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="container">
						<div class="copyright">
							<hr />
							<div class="row py-4">
								<div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
									&copy;
									<Link
										className="border-bottom no-underline text-white"
										href="#"
									>
										Shivom Technologies Pvt. Ltd
									</Link>
									, All Right Reserved.
									{/* *** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** */}
									{/* Designed By link : https://htmlcodex.com */}
									<Link class="border-bottom" href="/">
										{/* HTML Codex */}
									</Link>
								</div>
								<div class="col-md-6 text-center text-md-end">
									<div class="footer-menu flex items-center justify-end ">
										<Link
											href=""
											className="px-3 border-r  no-underline text-white"
										>
											Home
										</Link>
										<Link
											href=""
											className="px-3 border-r  no-underline text-white"
										>
											Cookies
										</Link>
										<Link
											href=""
											className="px-3 border-r no-underline text-white "
										>
											Help
										</Link>
										<Link href="" className="px-3 no-underline text-white">
											FQAs
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
