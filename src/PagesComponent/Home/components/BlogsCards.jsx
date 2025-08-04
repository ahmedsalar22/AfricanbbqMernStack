import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const BlogsCards = () => {
  const slidesData = [
    {
      cards: [
        {
          image: "/assets/images/summer-menu.png",
          authorImage: "/assets/images/john-doe.png",
          authorName: "John Doe",
          date: "30 Jan 2024",
          title1: "Introducing Our New Summer",
          title2: "Menu!",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos, odit beatae sequi…",
          readMore: "Read More",
          likes: 120,
        },
        {
          image: "/assets/images/summer-menu.png",
          authorImage: "/assets/images/john-doe.png",
          authorName: "Jane Doe",
          date: "29 Jan 2024",
          title1: "Delightful Summer Recipes",
          title2: "You Must Try!",
          description:
            "Discover fresh and exciting recipes perfect for summer…",
          readMore: "Read More",
          likes: 95,
        },
        {
          image: "/assets/images/summer-menu.png",
          authorImage: "/assets/images/john-doe.png",
          authorName: "Mark Smith",
          date: "28 Jan 2024",
          title1: "Refreshing Beverages",
          title2: "For the Season",
          description: "Quench your thirst with these amazing summer drinks…",
          readMore: "Read More",
          likes: 78,
        },
      ],
    },
    {
      cards: [
        {
          image: "/assets/images/summer-menu.png",
          authorImage: "/assets/images/john-doe.png",
          authorName: "John Doe",
          date: "30 Jan 2024",
          title1: "Introducing Our New Summer",
          title2: "Menu!",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos, odit beatae sequi…",
          readMore: "Read More",
          likes: 120,
        },
        {
          image: "/assets/images/summer-menu.png",
          authorImage: "/assets/images/john-doe.png",
          authorName: "Jane Doe",
          date: "29 Jan 2024",
          title1: "Delightful Summer Recipes",
          title2: "You Must Try!",
          description:
            "Discover fresh and exciting recipes perfect for summer…",
          readMore: "Read More",
          likes: 95,
        },
        {
          image: "/assets/images/summer-menu.png",
          authorImage: "/assets/images/john-doe.png",
          authorName: "Mark Smith",
          date: "28 Jan 2024",
          title1: "Refreshing Beverages",
          title2: "For the Season",
          description: "Quench your thirst with these amazing summer drinks…",
          readMore: "Read More",
          likes: 78,
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-full Blogscards">
        <div className="semi w-[90%] md:w-[100%] py-[80px] m-auto">
          <div className="heading xl:ml-40 lg:ml-20">
            <div className="flex heading-one">
              <div>
                <h2 className="font-Oleo Script font-[700] text-[30px] leading-[28.8px] text-[#CD2128]">
                  News & Blogs
                </h2>
              </div>
              <img src="/assets/images/spoon.png" alt="" />
            </div>

            <div className="font-Barlow font-[800] text-[30px]">
              Our Latest Foods Blog
            </div>
          </div>

          <div className="cards py-[30px]">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-wrap justify-center gap-4 mt-2">
                    {slide.cards.map((card, cardIndex) => (
                      <div
                        className="w-full card sm:w-1/2 md:w-1/3 lg:w-1/4"
                        key={cardIndex}
                      >
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                            <img
                              className="rounded-t-lg"
                              src={card.image}
                              alt=""
                            />
                          </a>
                          <div className="px-5">
                            <div className="container-img">
                              <div className="relative flex justify-end w-full btn bottom-4">
                                <button className="bg-[#CD2128] text-white py-2 px-4 rounded-[7px]">
                                  restaurent
                                </button>
                              </div>
                              <div className="flex items-center gap-2">
                                <div>
                                  <img
                                    className="rounded-[40px] border-white shadow border-4"
                                    src={card.authorImage}
                                    alt=""
                                  />
                                </div>
                                <div className="flex flex-col ">
                                  <div className="font-Barlow font-[600] text-[17px] leading-[20px]">
                                    {card.authorName}
                                  </div>
                                  <div className="font-Manrope font-[400] text-[13px] leading-[19px]">
                                    {card.date}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-start">
                              <a href="#">
                                <h5 className="mb-2 text-[19px] font-bold tracking-tight text-gray-900 dark:text-white">
                                  {card.title1}
                                </h5>
                              </a>
                              <a href="#">
                                <h5 className="mb-2 text-[19px] font-bold tracking-tight text-gray-900 dark:text-white">
                                  {card.title2}
                                </h5>
                              </a>
                            </div>
                            <p className="mb-3 text-start font-Barlow font-[400] text-[16px] leading-[24px] text-[#231F40]">
                              {card.description}
                            </p>
                            <div className="flex justify-between pt-3 pb-3 border-t ReadMore">
                              <div className="font-Manrope font-600 text-16px leading-[24px]">
                                {card.readMore}
                              </div>
                              <div className="font-Manrope text-[16px] text-[#CD2128]">
                                {card.likes}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsCards;
