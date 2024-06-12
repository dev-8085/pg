import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllInOneApp = () => {
	return (
		<div className=" w-full h-[80vh] ">
			<div className="flex lg:flex-row gap-10 lg:gap-0 flex-col items-center justify-between ">
				<div className="flex flex-col lg:ml-20 items-center gap-4">
					<h1 className="lg:text-3xl pt-10 px-7  text-[#ED7C24] text-center font-bold  ">
						Revolutionize Hostel Management with Our <br /> All-in-One App
					</h1>
					<div className="hidden lg:block  w-[16rem] p-10 border-2 shadow bg-gray-50 rounded text-sm ">
						<h6>Your Complete Solution for Efficiency, Growth, and Success!</h6>
					</div>
					<Link href="/CommingSoon">
						<button
							type="button"
							class=" focus:outline-none text-white  bg-[#ED7C24] hover:bg-[#d26c1d] focus:ring-4 focus:ring-[#f7974f] font-medium rounded-lg text-sm px-5  py-2.5 me-2 mb-2 "
						>
							Get App
						</button>
					</Link>
				</div>
				<div>
					<Image
						src="/media/SERVICES.png"
						alt="services"
						height={1024}
						width={1024}
						className=" lg:h-[28rem] lg:w-[80rem] mt-4"
					/>
				</div>
			</div>
		</div>
	);
};

export default AllInOneApp;
