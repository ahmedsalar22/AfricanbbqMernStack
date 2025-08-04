const ExperienceSection = () => {
  return (
    <>
      <div className="relative w-full sm:w-[85%] md:w-[75%] lg:w-[50%] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-contain bg-no-repeat bg-[url('/assets/images/overLayAbout.png')] flex items-center justify-center">
        <div className="expBox bg-[#CD2128] absolute top-5 sm:top-8 md:top-10 right-4 sm:right-6 md:right-12 border-4 flex flex-col items-center justify-center rounded-full p-4 sm:p-6 lg:p-8">
          <h1 className="font-Barlow font-[700] text-white text-lg sm:text-[24px] lg:text-[32px]">
            12+
          </h1>
          <p className="font-Barlow text-white font-[700] text-sm sm:text-[14px] lg:text-[16px]">
            Years
          </p>
          <p className="font-Barlow text-white font-[700] text-sm sm:text-[14px] lg:text-[16px]">
            Experience
          </p>
        </div>

        <div className="card absolute bottom-3 sm:bottom-6 md:bottom-10 right-3 sm:right-6 md:right-10 w-[90%] sm:w-[75%] md:w-[70%] lg:w-[60%]">
          <div className="rounded-tl-[40px] rounded-br-[40px] border-[5px] text-center p-4 bg-[#231F40]">
            <p className="text-white text-[12px] sm:text-[14px] lg:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis architecto reiciendis.
            </p>
            <div className="flex justify-end pr-3 mt-2 text-white">
              <span className="text-xs text-red-600">John Deo</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
