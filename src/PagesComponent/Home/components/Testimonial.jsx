import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonial = () => {
  const testimonials = [
    {
      name: "isita islam",
      location: "nyc usa",
      image: "/assets/images/testimonialCardImage.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium quaerat nihil magnam a porro eaque numquam",
    },
    {
      name: "isita islam",
      location: "nyc usa",
      image: "/assets/images/testimonialCardImage.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium quaerat nihil magnam a porro eaque numquam",
    },
    {
      name: "isita islam",
      location: "nyc usa",
      image: "/assets/images/testimonialCardImage.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium quaerat nihil magnam a porro eaque numquam",
    },
    {
      name: "isita islam",
      location: "nyc usa",
      image: "/assets/images/testimonialCardImage.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium quaerat nihil magnam a porro eaque numquam",
    },
  ];

  return (
    <>
      <div className="testimonialSection py-[70px]   w-[100%]">
        <div className="container w-[80%]  m-auto">
        <div className=" heading xl:ml-5  lg:ml-20">
        <div className="flex heading-one">
          <div>
            <h2 className="font-Oleo Script  font-[700] text-[30px] leading-[28.8px] text-[#CD2128]">
              Daily offer
            </h2>
          </div>
          <img src="/assets/images/spoon.png" alt="" />
        </div>

        <div className="font-Barlow font-[800] text-[30px] ">
          up to 75% off for this day
        </div>
      </div>

          <div className="cardsContainer h-auto flex flex-wrap gap-10 justify-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide className="py-10 lg:px-5 px-2 " key={index}>
                  <div className="card relative w-full  ">
                    <div className="boxImage w-[55%] xl:h-[38vh] md:h-[33vh] lg:h-[45vh] h-[35vh] absolute -top-3 -left-2">
                      <img
                        className="rounded-[25px] "
                        src="/assets/images/box.png"
                        alt=""
                      />
                    </div>
                    <div className="card rounded-[25px] h-[32vh] md:h-[30vh] lg:h-[40vh] xl:h-[35vh]   py-[12%] bg-[#231F40] ml-2 mt-2 relative">
                      <div className="img h-28 absolute -top-14 lg:left-28 xl:left-48 left-20  md:left-16  w-32 ">
                        <img
                          className="w-full h-full"
                          src={testimonial.image}
                          alt=""
                        />
                      </div>
                       <div className="headingIcon px-4 flex  gap-5 justify-between pt-2 text-white">
                        {/* <div  className="img border xl:w-[13%] lg:w-[25%] ">
                          <img loading="lazy" className="w-full object-cover h-full"  src="/assets/images/commaleft.png" alt="" />
                        </div> */}
                        <FaQuoteRight className="text-[red]"/>
                        <div className="mainheading mt-4">
                          <div className="heading-one leading-none  font-[Barlow] font-[700] xl:text-[30px] lg:text-[20px]  text-white">
                            {testimonial.name}
                          </div>
                          <div className="heading-2 text-[Manrope] font-[400] xl:text-[18px] lg:text-[16px] leading-[27px]">
                            {testimonial.location}
                          </div>
                        </div>
                        <FaQuoteLeft className="text-[red]"/>

                        {/* <div  className="img border xl:w-[13%] lg:w-[25%] ">
                          <img loading="lazy" className="w-full object-cover h-full"  src="/assets/images/commaleft.png" alt="" />
                        </div> */}
                      </div> 
                      <div className="para text-white container text-[12px] text-center xl:w-[90%] lg:text-[14px] md:text-[12px] mx-auto   pt-5">
                        {testimonial.text}
                      </div> 
                    </div>
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

export default Testimonial;
