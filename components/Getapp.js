import Image from "next/image";
import Link from "next/link";
import React from "react";

const Getapp = () => {
	return (
		<div className="bg-[#fcffff]  flex lg:flex-row flex-col items-center justify-around lg:p-20 ">
			<div className="w-[90vw]">
				<h1 className="text-3xl lg:text-6xl font-bold leading-[2.5rem] lg:leading-[4.5rem] mx-8 mt-8   lg:m-3 ">
					Always have us
					<br />
					<span className="text-[#5DBAC1]"> at your fingertips</span>
				</h1>
				<h3 className=" font-semibold lg:text-xl pl-3 py-1">
					Always There When You Need Us
				</h3>
				<div className="h-[2px] w-10 bg-[#5DBAC1] my-2 ml-3"></div>
				<p className="lg:w-[38rem] pl-3 py-2 text-lg font-semibold text-slate-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil,
					unde rem aliquid alias excepturi consectetur. Libero tenetur
					repellendus, enim itaque blanditiis incidunt similique nam!
				</p>
				<div className="lg:mx-[14rem] mx-[5.6rem] my-7">
					<Link href="/CommingSoon">
						<button
							type="button"
							className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 "
						>
							GET APP
						</button>
					</Link>
				</div>
			</div>
			<div>
				<div className=" bg-cyan-50 -mt-[4rem] rounded-full h-[60vh] w-[60vh] relative ">
					<div className="flex h-[75vh] w-[70vh] absolute -top-[2.5rem] -left-[2rem]">
						<Image
							src="/media/mobile.png"
							alt=""
							height={9999}
							width={9999}
							className="f-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Getapp;
