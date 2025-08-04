import  { useState } from "react";
import PopulorCardComp from "./PopulorCardComp";

const Popular = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Menu");

  const categories = ["All Menu", "Burger", "Chicken", "Pizza", "Desserts"];

  const products = [
    {
      id: 1,
      imageUrl: "/assets/images/burger.jpg",
      name: "Hyderabadi Biryani",
      category: "Chicken",
      ratings: 24,
      price: 65.0,
    },
    {
      id: 2,
      imageUrl: "/assets/images/daria.jpg",
      name: "Daria Shevtsova",
      category: "Chicken",
      ratings: 18,
      price: 50.0,
    },
    {
      id: 3,
      imageUrl: "/assets/images/burger.jpg",
      name: "Spicy Burger",
      category: "Burger",
      ratings: 30,
      price: 70.0,
    },
    {
      id: 4,
      imageUrl: "/assets/images/dresserts.jpg",
      name: "Fried Chicken",
      category: "Desserts",
      ratings: 12,
      price: 40.0,
    },
    {
      id: 5,
      imageUrl: "/assets/images/mozila.jpg",
      name: "Mozzarella Sticks",
      category: "Kabab",
      ratings: 22,
      price: 75.0,
    },
    {
      id: 6,
      imageUrl: "/assets/images/chicken-wings.jpg",
      name: "Chicken Wings",
      category: "Noodles",
      ratings: 22,
      price: 75.0,
    },
    {
      id: 7,
      imageUrl: "/assets/images/onion-rings.jpg",
      name: "Onion Rings",
      category: "Grill",
      ratings: 22,
      price: 75.0,
    },
    {
      id: 8,
      imageUrl: "/assets/images/dresserts.jpg",
      name: "Fried Chicken",
      category: "Dressert",
      ratings: 12,
      price: 40.0,
    },
  
  ];

  
  const filteredProducts =
    selectedCategory === "All Menu"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="w-full popularContainer">
      <div className="semi w-[90%] lg:w-[80%] mx-auto">
       
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 headingsButton">
          <div className="heading">
            <div className="flex items-center gap-2 heading-one">
              <h2 className="font-Oleo Script font-[700] text-[24px] leading-[28.8px] text-[#CD2128]">
                Food Menu
              </h2>
              <img
                src="/assets/images/spoon.png"
                alt="Spoon"
                className="w-6 h-6"
              />
            </div>
            <div className="font-Barlow font-[800] text-[24px] md:text-[35px] leading-[30px] md:leading-[42px]">
              Popular Delicious Foods
            </div>
          </div>

          {/* Buttons Section */}
          <div className="mt-4 overflow-x-auto">
            <div className="flex gap-3 w-max flex-nowrap">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-2 px-4 whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-[#CD2128] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <PopulorCardComp key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
