import Image from "next/image";
import React from "react";

const GetAppFirst = () => {
	return (
		<div className="bgFeature relative h-[85vh] overflow-x-hidden">
			<div className="  flex items-center justify-center gap-5 font-['Berlin_Sans_FB'] ">
				<div className="left mt-3">
					<a
						href="/CommingSoon"
						className={`text-5xl text-orange-600 border-black  border-2 mb-3 text-start no-underline  pl-1 pr-8 ml-4 rounded-xl py-1 inline-block`}
					>
						WOW
					</a>
					<h1 className="text-4xl text-gray-500 text-center pb-3  font-light">
						Accessibility Anywhere, Anytime: <br /> Seamlessly manage your
						business from <br /> any device, Mobile-Tab-Desktop <br />{" "}
						Compatibility
					</h1>
					<h3 className="text-3xl text-center text-gray-700 font-light leading-[3rem]">
						Tailored Applications for Every Platform
					</h3>
					<ul className="text-xl flex gap-[6rem] items-center ">
						<li className="border px-3 y-2 border-black rounded  ">IOS</li>
						<li className="border px-3 y-2 border-black rounded  ">ANDROID</li>
						<li className="border px-3 y-2 border-black rounded  "> WINDOWS</li>
					</ul>
				</div>
				<div className="rgt mt-5">
					<Image src="/media/wow.png" width={600} height={800} />
				</div>
			</div>
			<div className="footer_bg_one "></div>
			<div className="footer_bg_two"></div>
		</div>
	);
};

export default GetAppFirst;
