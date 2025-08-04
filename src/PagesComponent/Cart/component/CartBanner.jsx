import { FaHome } from "react-icons/fa";
const CartBanner = ({ heading, subheadingOne, subheadingTwo }) => {
  return (
    <>
      <div
        className="relative w-full "
        style={{
          backgroundImage: 'url("/assets/images/rice.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "350px",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="banner w-[90%] md:w-[70%]  mx-auto relative flex flex-col justify-center h-full text-center md:text-left">
          <div className="text-white font-[Barlow] font-[600] text-[32px] md:text-[50px] leading-[40px] md:leading-[60px]">
            {heading}
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-white md:justify-start">
            <div className="font-Manrope flex items-center gap-1 font-[600] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              <FaHome /> {subheadingOne} -
              <span className="text-[#CD2128]">{subheadingOne}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBanner;
