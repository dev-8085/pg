import React from "react";

export default function Modal() {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<div class="container  newsletter mt-5 wow fadeIn " data-wow-delay="0.1s">
				<div class="row justify-content-center">
					<div class="col-lg-11 border rounded p-1">
						<div class="border rounded text-center p-1">
							<div class="bg-white flex flex-col lg:flex-row pt-5 items-center justify-around   rounded text-center p-2">
								<div class="mb-4 font-bold text-sm">
									IT'S TIME TO UPGRADE YOUR HOSTEL/PG INTO SMART HOSTEL PG
									<h6 className="text-sm mb-4 ">
										Automate your operations, manage your Hostel/PGs business
										efficiently, and boost profits
									</h6>
								</div>
								{/* Schedule demo */}
								<div class="max-w-sm flex items-center justify-center space-y-3">
									<div className="-mt-10  ">
										<label for="hs-trailing-button-add-on" class="sr-only">
											Label
										</label>
										<div class="flex  rounded-lg shadow-sm h-[3rem]">
											<div
												type="text"
												id="hs-trailing-button-add-on"
												name="hs-trailing-button-add-on"
												// placeholder="Schedule a demo"
												class="py-2 placeholder-orange-500  px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-orange-600 focus:ring-orange-700 disabled:opacity-50 disabled:pointer-events-none"
											>
												<p className="text-orange-500 text-lg">
													Schedule a demo
												</p>
											</div>

											<button
												onClick={() => setShowModal(true)}
												type="button"
												data-toggle="modal"
												data-target="#ContactForm"
												className="py-3 px-4 w-[13rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none"
											>
												Get Start
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
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{showModal ? (
				<>
					<div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-2 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}

								<div className="flex flex-fill items-center  justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
									{/* <h3 className="text-3xl font-semibold">Modal Title</h3> */}
									<h2 className="text-2xl ml-28  text-center font-semibold">
										Schedule a Demo
									</h2>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black font-bold  h-6 w-6 text-2xl block ">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative  flex-auto w-[40vw]">
									<div className=" h-full bg-opacity-75 flex items-center justify-center">
										<div className="bg-white rounded-lg p-3 max-w-md w-full">
											<form>
												<div className="mb-4">
													<label
														htmlFor="name"
														className="block text-sm font-medium text-gray-700"
													>
														Name
													</label>
													<input
														type="text"
														id="name"
														name="name"
														className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
														required
													/>
												</div>
												<div className="mb-4">
													<label
														htmlFor="mobile"
														className="block text-sm font-medium text-gray-700"
													>
														Mobile Number
													</label>
													<input
														type="text"
														id="mobile"
														name="mobile"
														className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
														required
													/>
												</div>
												<div className="mb-4">
													<label
														htmlFor="city"
														className="block text-sm font-medium text-gray-700"
													>
														City
													</label>
													<input
														type="text"
														id="city"
														name="city"
														className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
														required
													/>
												</div>
												<div className="mb-4">
													<label
														htmlFor="city"
														className="block text-sm font-medium text-gray-700"
													>
														Business Name
													</label>
													<input
														type="text"
														id="city"
														name="city"
														className="mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
														required
													/>
												</div>
												<div className="mb-4">
													<label
														htmlFor="location"
														className="block text-sm font-medium text-gray-700"
													>
														Access Your Location
													</label>
													{/* Implement location access input here */}
												</div>
											</form>
										</div>
									</div>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
									<div className="flex justify-end">
										<button
											type="button"
											className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 border border-transparent rounded-md font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
										>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
