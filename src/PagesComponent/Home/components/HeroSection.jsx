import { useState } from "react";

export default function HeroSecton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Categories");

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle the selection of an item from the dropdown
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false); // Close the dropdown after selecting an item
  };
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/assets/images/HeroBackground.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col items-center  justify-center gap-10 py-20 sm:flex-row heroSecctionHome"
      >
        <div className="text w-full sm:w-[45%]   md:ml-10 lg:w-[40%] text-center sm:text-left">
          <div className="headingpara">
            <h2 className="font-OleoScript font-[700] md:text-[20px] lg:text-[25px] xl:text-[30px]  text-[#CD2128]">
              Satisfy Your Cravings
            </h2>
            <h1 className="font-Barlow font-[700] text-white md:text-[20px] lg:text-[30px] xl:text-[32px] sm:text-[40px]    ">
              Delicious Foods With Wonderful Eating
            </h1>
            <p className="font-Manrope text-white font-[400] text-[16px] sm:text-[18px] lg:text-[20px]  sm:leading-[27px] lg:leading-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              fugit minimaet debitis ut distinctio optio.
            </p>
            <div className="flex flex-col  items-center gap-3 sm:flex-row dropdownSearch">
              <div className="w-full  mt-3  dropdropdown sm:w-auto">
                <button
                  id="dropdownDefaultButton"
                  onClick={toggleDropdown} // Add click handler
                  className="bg-white text-black rounded-[100px] focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-blue-800"
                  type="button"
                >
                  <div className="flex flex-col items-start px-4  ">
                    <div className="text-[#cd2128] ">Menu</div>
                    <div> {selectedItem}</div>
                  </div>

                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    id="dropdown"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg absolute mt-2 shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => handleSelectItem("Dashboard")}
                        >
                          Categories
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => handleSelectItem("Settings")}
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => handleSelectItem("Earnings")}
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => handleSelectItem("Sign out")}
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="searchbar  w-full sm:w-[70%] mt-2">
                <form className="max-w-md">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative ">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-[100px] ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for food..."
                      required
                    />
                    <button
                      type="submit"
                      className="absolute   inset-y-0 flex items-center text-gray-500 end-0 pe-3 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex  xl:pr-8 items-end justify-center mt-3 sm:justify-end">
              <button className="bg-[#CD2128] text-white py-3 px-12 rounded-[30px] w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="image w-full  sm:w-[50%] lg:w-[30%] mt-4 sm:mt-0">
          <img
            src="/assets/images/chicken.png"
            alt="Delicious food"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
