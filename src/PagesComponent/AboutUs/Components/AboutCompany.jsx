

const AboutCompany = () => {
  return (
    <>
        <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[50%]   space-y-5">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="font-Oleo Script font-[700] text-[22px] text-[#CD2128]">
                About Company
              </h2>
              <img
                src="/assets/images/spoon.png"
                alt="Spoon icon"
                className="w-[40px] sm:w-[50px]"
              />
            </div>
            <h3 className="font-Barlow font-[800] text-[18px] sm:text-[20px] lg:text-[24px]">
              Healthy Foods Provider
            </h3>
          </div>

        
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-Manrope font-[400] leading-[22px] sm:leading-[26px] lg:leading-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            aspernatur molestiae minima pariatur consequatur voluptate sapiente
            deleniti soluta.
          </p>

        
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <div className="w-[50px] sm:w-[80px]">
                <img
                  className="w-full h-auto object-contain"
                  src="/assets/images/Tick.png"
                  alt="Tick icon"
                />
              </div>
              <div className="text-left">
                <h1 className="font-Barlow font-[700] text-[16px] sm:text-[18px] lg:text-[20px]">
                  Trusted Partner
                </h1>
                <p className="font-Manrope font-[400] text-[12px] sm:text-[14px] lg:text-[16px]">
                  Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.
                  Minus, Officiis Placeat Iusto Quasi Adipisci Impedit Delectus
                  Beatae Ab Maxime.
                </p>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default AboutCompany