import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ChikenSlider = () => {
  const slides = [
    {
      type: "content",
      background:
        'linear-gradient(rgba(35, 31, 64, 0.88), rgba(35, 31, 64, 0.88)),url("/assets/images/beefStick.png")',
      title: "$5.00 Cashback",
      subtitle1: "Easy To Order Our",
      subtitle2: "Recommended Food",
    },
    {
      type: "image",
      src: "/assets/images/fireChicken.png",
    },
    {
      type: "image",
      src: "/assets/images/fireChicken.png",
    },
    {
      type: "image",
      src: "/assets/images/fireChicken.png",
    },
    {
      type: "image",
      src: "/assets/images/fireChicken.png",
    },
  ];

  return (
    <>
      <div className="sliderContainer w-[100%] flex items-center justify-center">
        <Swiper
          className="mySwiper"
          slidesPerView={1} // Show one slide per screen
          spaceBetween={0} // No space between slides
          loop={true} // Loop the slides
          navigation // Optional: adds navigation arrows
          pagination={{ clickable: true }} // Optional: adds pagination bullets
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.type === "content" ? (
                <div
                  className="relative flex flex-col items-center justify-center first"
                  style={{
                    backgroundImage: slide.background,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "450px",
                    width: "80%", // 80% width
                    margin: "0 auto", // Center the container
                  }}
                >
                  <div className="absolute inset-0 opacity-70"></div>
                  <div className="text-[#CD2128] xl:text-[35px] leading-[20px] font-[500]">
                    {slide.title}
                  </div>
                  <div>
                    <div className="font-Barlow font-[700] xl:text-[40px] lg:text-[30px] md:text-[20px] text-white">
                      {slide.subtitle1}
                    </div>
                    <div className="font-Barlow font-[700] xl:text-[40px] lg:text-[30px] md:text-[20px] text-white">
                      {slide.subtitle2}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-[80%] h-[450px] mx-auto">
                  <img
                    className="object-cover w-full h-full"
                    src={slide.src}
                    alt=""
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ChikenSlider;
