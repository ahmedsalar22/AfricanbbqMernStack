

import { FaHome } from "react-icons/fa";
import CartReuseable from "../../Cart/component/CartReuseable";

export const SelectAddress = () => {
  return (
    <>
      <div className="AddressCartCOntainer py-[40px] w-full">
        <div className="flex flex-col w-full gap-4 m-auto semi md:w-4/5 md:flex-row md:gap-3">
          <div className="w-full address md:w-3/5">
            <div className="flex flex-col md:flex-row justify-between border-b-2 border-[#f7cba4] selectAddress mb-4 md:mb-0">
              <div className="font-Barlow font-[600] text-[20px] md:text-[25px] leading-[26px] md:leading-[30px]">
                Select Address
              </div>
              <div>
                <button className="bg-[#CD2128] font-[Manrope] font-[600] text-[12px] md:text-[15px] py-2 mb-2 md:mb-0 px-4 md:px-5 rounded-[30px] text-white">
                  New Address
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 py-5 md:gap-3 cards">
              {/* Card 1 */}
              <div className="card w-full md:w-[100%] lg:w-[100%] xl:w-[49%] rounded-[5px] bg-[#F3F7FB] mx-auto">
                <div className="flex items-center gap-2 p-2 py-3 w-[90%] mx-auto border-b-2 border-[#f7cba4] iconsContainer">
                  <div>
                    <input type="radio" name="address" id="address1" />
                  </div>
                  <div className="text-[#CD2128]">
                    <FaHome />
                  </div>
                  <div className="text-[#CD2128] font-Manrope font-[600] text-[14px] md:text-[14px] leading-[21px]">
                    Home
                  </div>
                </div>
                <div className="p-4 font-[700] text-[16px] md:text-[16px] leading-[24px] border text-Manrope content">
                  <div>Blackwell Street, Dry Creek, Alaska</div>
                  <div>Blackwell</div>
                  <div>Street, Dry Creek, Alaska.</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="card w-full md:w-[100%] lg:w-[100%] xl:w-[49%] rounded-[5px] bg-[#F3F7FB] mx-auto">
                <div className="flex items-center gap-2 p-2 py-3 w-[90%] mx-auto border-b-2 border-[#f7cba4] iconsContainer">
                  <div>
                    <input type="radio" name="address" id="address2" />
                  </div>
                  <div className="text-[#CD2128]">
                    <FaHome />
                  </div>
                  <div className="text-[#CD2128] font-Manrope font-[600] text-[14px] md:text-[14px] leading-[21px]">
                    Home
                  </div>
                </div>
                <div className="p-4 font-[700] text-[16px] md:text-[16px] leading-[24px] border text-Manrope content">
                  <div>Blackwell Street, Dry Creek, Alaska</div>
                  <div>Blackwell</div>
                  <div>Street, Dry Creek, Alaska.</div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="card w-full md:w-[100%] lg:w-[100%] xl:w-[49%] rounded-[5px] bg-[#F3F7FB] mx-auto">
                <div className="flex items-center gap-2 p-2 py-3 w-[90%] mx-auto border-b-2 border-[#f7cba4] iconsContainer">
                  <div>
                    <input type="radio" name="address" id="address3" />
                  </div>
                  <div className="text-[#CD2128]">
                    <FaHome />
                  </div>
                  <div className="text-[#CD2128] font-Manrope font-[600] text-[14px] md:text-[14px] leading-[21px]">
                    Home
                  </div>
                </div>
                <div className="p-4 font-[700] text-[16px] md:text-[16px] leading-[24px] border text-Manrope content">
                  <div>Blackwell Street, Dry Creek, Alaska</div>
                  <div>Blackwell</div>
                  <div>Street, Dry Creek, Alaska.</div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="card w-full md:w-[100%] lg:w-[100%] xl:w-[49%] rounded-[5px] bg-[#F3F7FB] mx-auto">
                <div className="flex items-center gap-2 p-2 py-3 w-[90%] mx-auto border-b-2 border-[#f7cba4] iconsContainer">
                  <div>
                    <input type="radio" name="address" id="address4" />
                  </div>
                  <div className="text-[#CD2128]">
                    <FaHome />
                  </div>
                  <div className="text-[#CD2128] font-Manrope font-[600] text-[14px] md:text-[14px] leading-[21px]">
                    Home
                  </div>
                </div>
                <div className="p-4 font-[700] text-[16px] md:text-[16px] leading-[24px] border text-Manrope content">
                  <div>Blackwell Street, Dry Creek, Alaska</div>
                  <div>Blackwell</div>
                  <div>Street, Dry Creek, Alaska.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:w-2/5 md:mt-0">
            <CartReuseable />
          </div>
        </div>
      </div>
    </>
  );
};
