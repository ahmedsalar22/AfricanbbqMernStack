const FriedChicken = () => {
  return (
    <>
      <div className="flex w-full py-[70px] weeklyContainer">
        <div className="semi w-[90%] md:w-[80%] m-auto">
          <div className="flex flex-wrap gap-4 cards">
            <div
              className="card w-full sm:w-[80%] md:w-[100%] lg:w-[48%] rounded-[10px] p-4 md:pl-6 flex items-center"
              style={{
                backgroundImage: 'url("/assets/images/friedChicken.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "300px",
              }}
            >
              <div className="flex flex-col items-start justify-center w-full h-full p-4 space-y-2 rounded-[10px]">
                <div className="font-Oleo Script font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-[#CD2128]">
                  Weekly Best Seller
                </div>
                <div className="font-Barlow font-[700] text-[20px] sm:text-[22px] md:text-[28px] text-[#231F40]">
                  Fried Chicken
                </div>
                <div className="font-Manrope font-[400] text-[12px] sm:text-[14px] md:text-[16px] text-[#231F40]">
                  Neque porro quisquam est qui dolor
                  <div>ipsum quia dolor sit amet sed.</div>
                </div>
                <div className="w-[50%] sm:w-[30%] md:w-[20%] border-b border-cyan-800">
                  <button className="text-sm text-[#231F40]">Shop Now</button>
                </div>
              </div>
            </div>

            <div
              className="card w-full sm:w-[80%] md:w-[100%] lg:w-[48%] rounded-[10px] p-4 md:pl-6 flex items-center"
              style={{
                backgroundImage: 'url("/assets/images/friedChicken.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "300px", // Fixed height for image
              }}
            >
              <div className="flex flex-col items-start justify-center w-full h-full p-4 space-y-2  rounded-[10px]">
                <div className="font-Oleo Script font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-[#CD2128]">
                  Weekly Best Seller
                </div>
                <div className="font-Barlow font-[700] text-[20px] sm:text-[22px] md:text-[28px] text-[#231F40]">
                  Fried Chicken
                </div>
                <div className="font-Manrope font-[400] text-[12px] sm:text-[14px] md:text-[16px] text-[#231F40]">
                  Neque porro quisquam est qui dolor
                  <div>ipsum quia dolor sit amet sed.</div>
                </div>
                <div className="w-[50%] sm:w-[30%] md:w-[20%] border-b border-cyan-800">
                  <button className="text-sm text-[#231F40]">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriedChicken;
