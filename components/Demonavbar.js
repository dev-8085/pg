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
      setIsSticky(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      {/* Logo */}
      <div className="relative">
        <div className="hidden lg:block fixed top-0 left-0 z-50" style={{ width: "10rem" }}>
          <Image
            src="/media/Logo1.png"
            alt="logo"
            width={160}
            height={80}
            priority
            className="ml-3 h-auto w-full"
          />
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-2">
          <Link href="/">
            <Image src="/media/Logo1.png" alt="logo" width={140} height={60} className="h-auto" />
          </Link>
          <button onClick={toggleNavbar}>
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

        {/* Top Bar */}
        <div className="hidden lg:flex flex-col items-center justify-between">
          <div className="bg-white h-12 w-full font-semibold">
            <div className="flex justify-between ml-[13rem] mr-[3rem] items-center h-full">
              <div className="flex items-center gap-2">
                <Image src="/media/shree.jpg" alt="Shree" width={30} height={30} className="h-auto" />
                <h3 className="uppercase text-[#ED7C25] text-lg">
                  Shivom <span className="text-black">Group</span>
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <h3 className="text-sm">Available On</h3>
                <div className="flex gap-3 items-center pt-1">
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

      {/* Sticky Navbar */}
      <div
        className={`hidden lg:block z-40 transition-all ${
          isSticky ? "sticky top-0" : "fixed top-0"
        }`}
      >
        <div className="bg-black h-12 w-full flex items-center px-[15rem] relative">
          {/* Left - Nav Links */}
          <ul className="flex gap-10 text-white uppercase">
            {NavLink.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={`${
                    pathname === link.link ? "text-orange-400" : "text-white"
                  } hover:text-orange-400 font-semibold no-underline`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right - GET APP at corner */}
<div className="absolute right-0 pr-[5rem]">
  <Link
    href="/GetApp"
    className={`${
      pathname === "/GetApp" ? "text-orange-400" : "text-white"
    } hover:text-orange-400 font-semibold no-underline`}
  >
    <button className="px-4 py-1 border border-orange-400 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-white transition-all font-semibold">
      GET APP
    </button>
  </Link>
</div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md z-50 w-full absolute">
          <div className="px-4 pt-2 pb-4">
            {NavLink.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                onClick={() => setIsOpen(false)}
                className={`block font-semibold p-2 rounded-lg ${
                  pathname === link.link ? "bg-gray-200 text-orange-700" : "text-black"
                } hover:text-orange-700 no-underline`}
              >
                {link.title.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
