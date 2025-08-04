import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavbarComp() {
  const [isOpen, setIsOpen] = useState(false);
  const { product: products } = useSelector((state) => state.cartProuduct);

  return (
    <>
      <header
        style={{
          backgroundImage: "url('/public/Assets/images/paperNav.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container   mx-auto flex items-center justify-between py-4 px-5 lg:w-[77%]">
          {/* Logo */}
          <div className="mt-1 logo">
            <img src="/assets/images/HeaderLogo.png" alt="Logo" />
          </div>

          {/* Centered Links (Large Devices) */}
          <nav className="items-center justify-center hidden space-x-5 md:flex">
            <Link to={"/"}>
              <a className="hover:text-black border-none bg-[transparent] font-[Manrope] font-bold text-[16px] leading-[36px]">
                Home
              </a>
            </Link>
            <Link to={"/aboutus"}>
              <a className="hover:text-black border-none bg-[transparent] font-[Manrope] font-bold text-[16px] leading-[36px]">
                About
              </a>
            </Link>
            <Link to={"/menu"}>
              <a className="hover:text-black border-none bg-[transparent] font-[Manrope] font-bold text-[16px] leading-[36px]">
                Menu
              </a>
            </Link>

            <Link to={"/contact"}>
              <a className="hover:text-black border-none bg-[transparent] font-[Manrope] font-bold text-[16px] leading-[36px]">
                Contact
              </a>
            </Link>
            <Link to={"/eventpackage"}>
              <a className="hover:text-black border-none bg-[transparent] font-[Manrope] font-bold text-[16px] leading-[36px]">
                Events Packages
              </a>
            </Link>
          </nav>

          {/* Icons (Large Devices) */}
          <div className="hidden relative md:flex gap-3 items-center w-[10%] justify-end my-5">
            <div className="p-3  rounded-[20px] bg-[#ffebda] cart">
              <Link to={"/cart"} className="flex">
                <div className="">
                  <FaShoppingCart />
                </div>
                {products.length > 0 && (
                  <div className="absolute bg-red-600 rounded-[100%] px-2 py-[1px] text-white right-11 text-sm -top-4 ">
                    <span className=" cart-count">{products.length}</span>
                  </div>
                )}
              </Link>
            </div>
            <div className="p-3 rounded-[20px] bg-[#ffebda] search">
              <Link to={"/contact"}>
                <FaUser />
              </Link>
            </div>
          </div>

          {/* Hamburger Icon for Mobile (Medium and Small Devices) */}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 md:hidden">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Medium and Small Devices) */}
        {isOpen && (
          <div className="flex flex-col items-center p-4 space-y-4 md:hidden bg-gray-50">
            <a href="/" className="hover:text-black">
              Home
            </a>
            <a href="/about" className="hover:text-black">
              About
            </a>
            <a href="/employers" className="hover:text-black">
              Employers
            </a>
            <a href="/services" className="hover:text-black">
              Services
            </a>
            <a href="/mission" className="hover:text-black">
              Mission
            </a>
            <a href="/meettheteam" className="hover:text-black">
              Meet the Team
            </a>
          </div>
        )}
      </header>
    </>
  );
}
