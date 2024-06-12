import Image from "next/image";
import React from "react";

const FeatureHomepage = () => {
	return (
		<div className="bgFeature relative lg:h-[85vh] h-[130vh] overflow-x-hidden ">
			<div className="  flex flex-col  lg:flex-row items-center justify-center  font-['Berlin_Sans_FB'] ">
				<div className="left lg:w-1/2 p-2 lg:ml-20">
					<h1 className="text-7xl text-gray-500 py-3 font-light">Ranked#1</h1>
					<h3 className="text-4xl text-gray-700 font-light leading-[3rem]">
						Special S-mart Feature &gt; Totally <br /> Different from others
						&gt; No worry to <br />
						Vacant hostel/PG
					</h3>
				</div>
				<div className="rgt  ">
					<Image
						src="/media/SERVICES.png"
						className="object-cover"
						width={850}
						height={850}
					/>
				</div>
			</div>
			<div className="footer_bg_one "></div>
			<div className="footer_bg_two"></div>
		</div>
	);
};

export default FeatureHomepage;
