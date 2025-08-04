import { useState } from "react";
import CartBanner from "../Cart/component/cartBanner";
import PopulorCardComp from "../Home/components/PopulorCardComp";

const Menu = () => {
  const products = [
    {
      id: 1,
      name: "Hyderabadi Biryani",
      price: 65,
      discountPrice: 90,
      category: "Biryani",
      imageUrl: "/assets/images/card-chicken.png", 
    },
    {
      id: 2,
      name: "Daria Shevtsova",
      price: 80,
      discountPrice: null,
      category: "Chicken",
      imageUrl: "/assets/images/card-chicken.png",
    },
    {
      id: 3,
      name: "Spicy Burger",
      price: 100,
      discountPrice: 110,
      category: "Burger",
      imageUrl: "/assets/images/card-chicken.png",
    },
    {
      id: 4,
      name: "Fried Chicken",
      price: 89,
      discountPrice: null,
      category: "Dessert",
      imageUrl: "/assets/images/card-chicken.png",
    },
    {
      id: 5,
      name: "Mozzarella Sticks",
      price: 75,
      discountPrice: null,
      category: "Kebab",
      imageUrl: "/assets/images/card-chicken.png",
    },
    {
      id: 6,
      name: "Popcorn Chicken",
      price: 69,
      discountPrice: 80,
      category: "Snack",
      imageUrl: "/assets/images/card-chicken.png",
    },
    {
      id: 7,
      name: "Chicken Wings",
      price: 79,
      discountPrice: 90,
      category: "Noodles",
      imageUrl: "/assets/images/card-chicken.png",
    },
    {
      id: 8,
      name: "Onion Rings",
      price: 110,
      discountPrice: null,
      category: "Grill",
      imageUrl: "/assets/images/card-chicken.png",
    },
    {
        id: 8,
        name: "Onion Rings",
        price: 110,
        discountPrice: null,
        category: "Grill",
        imageUrl: "/assets/images/card-chicken.png",
      },
      {
        id: 8,
        name: "Onion Rings",
        price: 110,
        discountPrice: null,
        category: "Grill",
        imageUrl: "/assets/images/card-chicken.png",
      },
      {
        id: 8,
        name: "Onion Rings",
        price: 110,
        discountPrice: null,
        category: "Grill",
        imageUrl: "/assets/images/card-chicken.png",
      },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.ceil(products.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const visibleProducts = products.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <CartBanner heading={"Popular Food Menu"}
        subheadingOne={"Home"}
        subHeadingTwo={"Popular Food Menu"} />
      <div className="conatiner w-[100%] py-[40px]">
        <div className="semi border p-3 w-[80%] flex gap-3 rounded-[100px] bg-[#EEF6EB] m-auto">
          <input
            className="py-3 px-5 w-[50%]  rounded-[30px]"
            type="text"
            placeholder="Search..."
          />

          <form className="w-[35%]">
            <select
              id="countries"
              className="bg-gray-50 w-full py-3 rounded-[30px] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Default Sorting</option>
              <option value="US">Price</option>
              <option value="CA">Popularity</option>
              <option value="FR">Ratings</option>
            </select>
          </form>
          <button className="font-Manrope font-[600] text-[16px] leading-[24px] rounded-[30px] p-2 w-[15%] text-white bg-[#CD2128]">
            Search
          </button>
        </div>

        <div className="cards flex gap-3 flex-wrap w-[85%] p-[40px] m-auto">
          {visibleProducts.map((product) => (
            <PopulorCardComp key={product.id} product={product} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 pagination">
          <button
            className={`px-4 py-2 rounded-full border ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border ${
                currentPage === index + 1
                  ? "bg-[#CD2128] text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className={`px-4 py-2 rounded-full border ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
