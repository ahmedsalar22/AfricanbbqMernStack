import { FaFacebookF } from "react-icons/fa6";
const FooterComp = () => {
  return (
    <>
      <footer>
        <div
          className="w-full contaner "
          style={{
            backgroundImage:
              'linear-gradient(rgba(35, 31, 64, 0.88), rgba(35, 31, 64, 0.88)), url("/assets/images/footerBackground.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-wrap lg:flex-nowrap w-[95%] py-[40px] m-auto space-x-0 md:space-x-10 items-center justify-center">
            <div className="flex flex-col w-full md:items-center gap-y-10 logocontainer md:w-auto">
              <div>
                <img
                  src="/assets/images/footerLogo.png"
                  alt=""
                  className="mx-auto md:mx-0"
                />
              </div>
              <div className="text-center  text-white lg:text-[15px] para md:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <div>
                    Soluta facere delectus qui placeat inventore consectetur
                  </div>
                  repellendus optio debitis.
                </p>
                <div className="flex justify-center gap-2 mt-3 md:justify-start">
                  {Array(6)
                    .fill(null)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="bg-[#CD2128] text-[12px] p-2 rounded-[15.5px]"
                      >
                        <FaFacebookF />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-10 pt-10 md:pt-[10%] w-full md:w-auto">
              <div className="flex flex-col w-full space-y-5 lg:w-[30%] md:w-[20%]">
                <div>
                  <div className="text-white font-[Barlow] font-[800] xl:text-[22px] lg:text-[13px]   heading text-center md:text-left   ">
                    Our company
                  </div>
                  <p className="w-[50%] mx-auto md:w-[64%] md:mx-0 h-[2px] bg-red-600 "></p>
                </div>
                <div>
                  <li className="text-center lg:text-[15px] md:text-[11px]  text-white md:text-left">
                    About African BBQ
                  </li>
                  <li className="text-center lg:text-[15px] md:text-[12px] text-white md:text-left">
                    Jobs
                  </li>
                </div>
              </div>
              <div className="flex flex-col w-full space-y-5 lg:w-[30%] md:w-[20%]">
                <div className="mx-auto w-fit md:mx-0">
                  <div className="text-white font-[Barlow] font-[800]   lg:text-[13px] xl:text-[22px]  heading text-center md:text-left">
                    OUR BBQ
                  </div>
                  <p className="w-[50%]   md:w-full  md:mx-0 h-[2px] bg-red-600 "></p>
                </div>
                <div className="text-center">
                  <li className="text-white  lg:text-[15px] xl:text-[15px] md:text-[13px] text-centers md:text-left ">
                    Ingredients
                  </li>
                  <li className="text-white  lg:text-[15px] xl:text-[15px] md:text-[13px]  text-centers md:text-left ">
                    Ingredients
                  </li>
                  <li className="text-white  lg:text-[15px] xl:text-[15px] md:text-[13px]  text-centers md:text-left ">
                    Ingredients
                  </li>
                </div>
              </div>
              <div className="flex flex-col w-full space-y-5   lg:w-[35%] md:w-[20%]">
                <div>
                  <div className="text-white font-[Barlow] font-[800] lg:text-[10px] md:text-[11px] xl:text-[22px] leading-[26px] heading text-center md:text-left">
                    CUSTOMER SERVICE
                  </div>
                  <p className="w-[50%] mx-auto md:w-[56%] md:mx-0 h-[2px] bg-red-600 "></p>
                </div>
                <div>
                  <li className="text-center text-white lg:text-[12px] md:text-[11px] md:text-left">
                    Customer Support
                  </li>
                  <li className="text-center text-white   lg:text-[11px] md:text-[11px] md:text-left">
                    FAQs
                  </li>
                  
                  <li className="text-center text-white md:text-[11px]   lg:text-[11px] md:text-left">
                    Privacy
                  </li>
                  <li className="text-center text-white  md:text-[11px]  lg:text-[11px] md:text-left">
                    Legal
                  </li>
                </div>
              </div>
              <div className="flex flex-col w-full space-y-5  lg:w-[30%] md:w-[20%]">
                <div className="mx-auto w-fit md:mx-0">
                  <div className="text-white font-[Barlow] font-[800] md:text-[15px] xl:text-[22px] lg:text-[15px] heading text-center md:text-left">
                    Contact Us
                  </div>
                  <p className="w-[50%] mx-auto md:w-full md:mx-0 h-[2px] bg-red-600 "></p>
                </div>
                <div className="text-white">
                  <div className="h-[52%]  pl-0 md:text-[13px] lg:text-[12px] lg:pl-0 border-b-2 border-orange-500 text-center md:text-left">
                    +44 (0) 20 9994 7740  
                  </div>
                  <div className="h-[52%] pl-0 md:text-[13px] lg:pl-[0px] lg:text-[12px] border-b-2 border-orange-500 text-center md:text-left">
                    themefaxbd@gmail.com
                  </div>
                  <div className="h-[52%] pl-0 md:text-[13px] lg:pl-[0px] lg:text-[12px] border-b-2 border-orange-500 text-center md:text-left">
                    Blackwell Street, Dry Creek, Alaska
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full font-[Manrope] font-[600] text-center text-white p-2 bg-[#CD2128]" >
        Copyright © AfrikanBBQ 2024. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default FooterComp;
