

import Search from "@/components/Search";
import Image from "next/image";
import React from "react";

const Findpage = () => {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="relative overflow-hidden ">
				<Image
					src="/media/search-bg-6.gif"
					alt=""
					height={1024}
					width={1600}
					// layout="fill"
					// objectFit="cover"
					className="object-cover -mt-[23rem]"
				/>
			</div>
			<div className="absolute z-10 text-center top-[10rem]">
				<h1 className="text-4xl lg:text-7xl ">
					Find Your Hostels and PGs
				</h1>
				<h3 className="text-lg lg:text-xl p-5 font-semibold">
					Wherever you prefer. Whenever you need
				</h3>

				<div className="mx-[13rem]">
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Findpage;
