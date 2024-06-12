import Image from "next/image";
import React from "react";

const Subscription = () => {
	return (
		<div data-color="black">
			<div className="section text-center my-5 ">
				<h1 className="uppercase text-2xl  ">just one step away </h1>
				<h6 className="text-sm">
					choose one and become a S-Mart family member
				</h6>
			</div>
			<div className="flex flex-col lg:flex-row  gap-10 lg:gap-7 my-5 mx-7 ">
				<div className="card rounded shadow-lg border-2 lg:w-[35rem]  h-full  lg:h-[70vh]">
					<div className="card-header font-bold rounded relative bg-silver">
						<div className="hidden-box absolute -top-5">
							<h6 className="rounded p-1 bg-white text-gray-500 border-2	 border-[#DBDBDB]">
								Value For Many
							</h6>
						</div>
						<div className="flex justify-between items-center ">
							<div className="plan-name">
								<h5 className="fw-bold">S-mart Silver</h5>
							</div>
							<div className="price">
								<h5 className="m-0 fw-bold">21.25/bed</h5>
								<h6 className="text-decoration-line-through fw-bold">25/bed</h6>
							</div>
						</div>
						<div className="discount-box absolute -bottom-5 right-10 w-20">
							<h6
								className="bg-yellow-400 py-1 px-2 rounded"
								style={
									({ fontSize: "0.9rem" },
									{
										clipPath:
											"polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
									})
								}
							>
								15% off
							</h6>
						</div>
					</div>
					<div className="card-body">
						<div className="mt-2">
							<div className="border-b-2 border-gray-300 pb-2 mb-3 flex items-center gap-2">
								<Image src="/media/silver-pointer.png" height={25} width={25} />
								<div className="p-0 m-0 text-base">
									S-mart report, share and downloads
								</div>
							</div>
							<div className="border-b-2 border-gray-300 pb-2 mb-3 flex items-center gap-2">
								<Image src="/media/silver-pointer.png" height={25} width={25} />
								<div className="p-0 m-0 text-base">
									S-mart tenant app for S-mart communication
								</div>
							</div>

							<div className="border-b-2 border-gray-300 pb-2 mb-3 flex items-center gap-2">
								<Image src="/media/silver-pointer.png" height={25} width={25} />
								<div className="p-0 m-0 text-base">
									One S-mart app for manage multi businesses
								</div>
							</div>
							<div className="border-b-2 border-gray-300 pb-2 mb-3 flex items-center gap-2">
								<Image src="/media/silver-pointer.png" height={25} width={25} />
								<div className="p-0 m-0 text-base">
									S-mart lead manager for better follow ups
								</div>
							</div>
							<div className="border-b-2 border-gray-300 pb-2 mb-3 flex items-center gap-2">
								<Image src="/media/silver-pointer.png" height={25} width={25} />
								<div className="p-0 m-0 text-base">
									S-mart tenant rent collection through APP
								</div>
							</div>
							<div className="border-b-2 border-gray-300 pb-2 mb-3 flex items-center gap-2">
								<Image src="/media/silver-pointer.png" height={25} width={25} />
								<div className="p-0 m-0 text-base">
									Everything from S-mart basics with advanced customer support
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer rounded bg-silver-light">
						<div className="flex justify-between items-center">
							<div>
								<p className="p-0 m-0 text-base">
									Contact us for more details and discount
								</p>
							</div>
							<div>
								<button className="btn bg-silver  d-flex justify-content-between align-items-center gap-2 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="16"
										height="16"
										fill="currentColor"
									>
										<path d="M16.8 19L14 22.5L11.2 19H6C5.44772 19 5 18.5523 5 18V7.10256C5 6.55028 5.44772 6.10256 6 6.10256H22C22.5523 6.10256 23 6.55028 23 7.10256V18C23 18.5523 22.5523 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.44772 1.44772 2 2 2Z"></path>
									</svg>
									Message
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="card rounded shadow-lg border-2 lg:w-[35rem] border-[#9AD1DE] h-full  lg:h-[70vh]">
					<div className="card-header bg-sky fw-bold rounded position-relative">
						<div className="hidden-box absolute -top-5">
							<h6 className="rounded p-1 bg-white text-[#9AD1DE] border-2 border-[#9AD1DE]">
								Quick Start
							</h6>
						</div>
						<div className="flex justify-between items-center">
							<div className="plan-name">
								<h5 className="fw-bold">S-mart Basic</h5>
							</div>
							<div className="price">
								<h5 className="m-0 fw-bold">47.50/bed</h5>
								<h6 className="text-decoration-line-through fw-bold">50/bed</h6>
							</div>
						</div>
						<div className="discount-box absolute -bottom-5 right-10 w-20">
							<h6
								className="bg-yellow-400 py-1 px-2 rounded"
								style={
									({ fontSize: "0.9rem" },
									{
										clipPath:
											"polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
									})
								}
							>
								5% off
							</h6>
						</div>
					</div>
					<div className="card-body">
						<div className="mt-2">
							<div className="border-b-2  border-[#9ad2dede] pb-2 mb-3 flex items-center gap-1">
								<Image src="/media/basic-pointer.png" height={25} width={25} />

								<div className="feature-name text-start">
									S-mart room and seats management.
								</div>
							</div>
							<div className="border-b-2 border-[#9ad2dede] pb-2 flex items-center gap-2 mb-3">
								<Image src="/media/basic-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									S-mart digital expenses records.
								</div>
							</div>
							<div className="border-b-2 border-[#9ad2dede] pb-2 flex items-center gap-2 mb-3">
								<Image src="/media/basic-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									S-mart billing for rent collection.
								</div>
							</div>
							<div className="border-b-2 border-[#9ad2dede] pb-2 mb-3 flex items-center gap-2">
								<Image src="/media/basic-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									S-mart registration system for your tenant.
								</div>
							</div>
							<div className="border-b-2 border-[#9ad2dede] pb-2 mb-3 flex items-center gap-2">
								<Image src="/media/basic-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									Manage property on your finger tip.
								</div>
							</div>
							<div className="border-b-2 border-[#9ad2dede] pb-2 flex items-center gap-2 mb-3">
								<Image src="/media/basic-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">Customer support.</div>
							</div>
						</div>
					</div>
					<div className="card-footer rounded bg-sky-light">
						<div className="flex justify-between items-center">
							<div>
								<p className="p-0 m-0 text-base">
									Contact us for more details and discount
								</p>
							</div>
							<div>
								<button className="btn bg-sky  d-flex justify-content-between align-items-center gap-2 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="16"
										height="16"
										fill="currentColor"
									>
										<path d="M16.8 19L14 22.5L11.2 19H6C5.44772 19 5 18.5523 5 18V7.10256C5 6.55028 5.44772 6.10256 6 6.10256H22C22.5523 6.10256 23 6.55028 23 7.10256V18C23 18.5523 22.5523 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.44772 1.44772 2 2 2Z"></path>
									</svg>
									Message
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="card rounded shadow-lg border-yellow-400  lg:w-[35rem] h-full lg:h-[70vh]">
					<div className="card-header bg-gold fw-bold rounded position-relative bg-yellow-300">
						<div className="hidden-box absolute -top-5">
							<h6 className="rounded p-1 bg-white text-yellow-400 border-2 border-yellow-400">
								Most Popular
							</h6>
						</div>
						<div className="flex justify-between items-center">
							<div className="plan-name">
								<h5 className="fw-bold">S-mart Gold</h5>
							</div>
							<div className="price">
								<h5 className="m-0 fw-bold">95.00/bed</h5>
								<h6 className="text-decoration-line-through fw-bold">
									100/bed
								</h6>
							</div>
						</div>
						<div className="discount-box absolute -bottom-5 right-10 w-20">
							<h6
								className="bg-warning py-1 px-2 rounded"
								style={
									({ fontSize: "0.9rem" },
									{
										clipPath:
											"polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
									})
								}
							>
								5% off
							</h6>
						</div>
					</div>
					<div className="card-body">
						<div className="mt-2">
							<div className="border-b-2 border-[#fcf480c3] pb-2 mb-3 flex gap-2 align-items-center">
								<Image src="/media/gold-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									S-mart verification of tenant and employee
								</div>
							</div>
							<div className="border-b-2 border-[#fcf480c3] pb-2 mb-3 flex gap-2 align-items-center">
								<Image src="/media/gold-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									S-mart electricity billing manager.
								</div>
							</div>
							<div className="border-b-2 border-[#fcf480c3] pb-2 mb-3 flex gap-2 align-items-center">
								<Image src="/media/gold-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									Super S-mart food menu and stock management
								</div>
							</div>
							<div className="border-b-2 border-[#fcf480c3] pb-2 mb-3 flex gap-2 align-items-center">
								<Image src="/media/gold-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									S-mart social leads, no worry to vacant seats
								</div>
							</div>
							<div className="border-b-2 border-[#fcf480c3] pb-2 mb-3 flex gap-2 align-items-center">
								<Image src="/media/gold-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									S-mart auto billing and take payment by app
								</div>
							</div>
							<div className="border-b-2 border-[#fcf480c3] pb-2 mb-3 flex gap-2 align-items-center">
								<Image src="/media/gold-pointer.png" height={25} width={25} />
								<div className="feature-name text-start">
									Everything from S-mart Silver
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer rounded bg-gold-light">
						<div className="flex justify-between items-center">
							<div>
								<p className="p-0 m-0 text-base">
									Contact us for more details and discount
								</p>
							</div>
							<div>
								<button className="btn bg-gold  d-flex justify-content-between align-items-center gap-2 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="16"
										height="16"
										fill="currentColor"
									>
										<path d="M16.8 19L14 22.5L11.2 19H6C5.44772 19 5 18.5523 5 18V7.10256C5 6.55028 5.44772 6.10256 6 6.10256H22C22.5523 6.10256 23 6.55028 23 7.10256V18C23 18.5523 22.5523 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.44772 1.44772 2 2 2Z"></path>
									</svg>
									Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscription;
