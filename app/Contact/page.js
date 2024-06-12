import Link from "next/link";
import React from "react";

const Contactpage = () => {
	return (
		<div>
			<div className="bg-gray-100 py-8">
				<div className=" contactBg h-[30rem]">
					<div className="text-center bg-[#0000004f] gap-2 flex flex-col items-center justify-center   h-[100%] text-white ">
						<h2 className="text-5xl font-bold ">Get In Touch</h2>
						<p className="text-lg font-semibold ">
							We operate from our office located in the heart of Bhopal city.
							<br />
							Feel free to contact us for any support or visit our office during
							business hours.
						</p>
					</div>
				</div>
			</div>
			<div className="container bg-gray-200 mx-auto px-4">
				<h1 className="text-center text-3xl text-bold pt-4">Contact us</h1>
				<div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
					{/* Phone section */}
					<div className="text-center">
						<div className="py-4">
							<img
								src="/media/phonelogo.png"
								className="mx-auto w-24"
								alt="Phone Logo"
							/>
						</div>
						<p className="text-xl font-bold">CALL US</p>
						<p className="text-lg">
							<b>0755-493-7957, </b>
							<br />
							<b>7879868904</b>
						</p>
					</div>

					{/* Visit section */}
					<div
						className="text-center  sm:border-0"
						style={{
							"border-left": "1px solid black",
							"border-right": "1px solid black",
						}}
					>
						<div className="py-4">
							<img
								src="/media/house.png"
								className="mx-auto w-24"
								alt="House Icon"
							/>
						</div>
						<p className="text-xl font-bold">VISIT US</p>
						<p className="font-medium">
							<b>
								D-3, Vidya Vihar, In Front of BU, <br /> Narmadapuram Road,{" "}
								<br /> Bhopal MP-462026
							</b>
						</p>
					</div>

					{/* Email section */}
					<div className="text-center  sm:border-0">
						<div className="py-4">
							<img
								src="/media/mail.png"
								className="mx-auto w-24"
								alt="Mail Icon"
							/>
						</div>
						<p className="text-xl font-bold">CONTACT US</p>
						<p className="text-lg font-semibold">
							contact@shivomsecuranation.com
						</p>
					</div>
				</div>
			</div>

			{/* Find Us section */}
			<div className="container mx-auto px-4 py-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold mb-4">Find Us</h2>
					<div className="w-full overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58660.65055592322!2d77.39887795128725!3d23.232507830682255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397c4269e09fe1bf%3A0x680f5a969dc28a6c!2sShivom%20Securanation%2C%20Choudhary%20Villa%2C%20B-33%2C%20Sector%20B%2C%20Kasturba%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!3m2!1d23.232504!2d77.4400797!5e0!3m2!1sen!2sin!4v1715161702734!5m2!1sen!2sin"
							width="600"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							className="w-full"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>

			{/* Enquiry Form section */}
			<div className="bg-gray-100 py-8">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<h2 className="text-3xl font-bold mb-4">Enquiry Here</h2>
						<p className="text-lg text-gray-600">
							Fields marked with an * are required
						</p>
					</div>
					<form className="mt-8">
						<div className="flex flex-wrap -mx-4">
							{/* Name & Email */}
							<div className="w-full md:w-1/2 px-4 mb-4">
								<input
									type="text"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Enter Name"
								/>
							</div>
							<div className="w-full md:w-1/2 px-4 mb-4">
								<input
									type="email"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Enter Email"
								/>
							</div>
							{/* Contact & Address */}
							<div className="w-full md:w-1/2 px-4 mb-4">
								<input
									type="text"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Enter Contact Number"
								/>
							</div>
							<div className="w-full md:w-1/2 px-4 mb-4">
								<input
									type="text"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Enter Address"
								/>
							</div>
							{/* Subject */}
							<div className="w-full px-4 mb-4">
								<input
									type="text"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Subject"
								/>
							</div>
							{/* Message */}
							<div className="w-full px-4 mb-4">
								<textarea
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									rows="5"
									placeholder="Enter Your Message"
								></textarea>
							</div>
							{/* Submit Button */}
							<div className="w-full px-4 mb-4">
								<button
									type="submit"
									className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-md text-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contactpage;
