const cardData = [
  {
    id: 1,
    title: "Fresh food",
    description:
      "Objectively pontificate quality models before intuitive information.",
    image: "/assets/images/Truck.png",
  },
  {
    id: 2,
    title: "Organic produce",
    description:
      "Dynamically innovate proactive testing procedures before enterprise-wide collaboration.",
    image: "/assets/images/Truck.png",
  },
  {
    id: 3,
    title: "Local sourcing",
    description:
      "Rapidiously transition multimedia-based solutions with synergistic value.",
    image: "/assets/images/Truck.png",
  },
  {
    id: 4,
    title: "Sustainable practices",
    description:
      "Proactively simplify collaborative services and reliable models.",
    image: "/assets/images/Truck.png",
  },
];

const TheBest = () => {
  return (
    <>
      <div className="bestContaier flex flex-wrap md:flex-nowrap w-[80%] mx-auto py-[60px] space-x-10">
        <div className="w-full md:w-[60%]">
          <div className="heading">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate aspernatur molestiae minima pariatur consequatur
              voluptate sapiente deleniti soluta.
            </p>
          </div>
          <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-6">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="transform skew-y-0 -skew-x-12 card rounded-[10px] w-full flex items-center border-l-4 border-[#CD2128] justify-center bg-[#F1F0FA]"
              >
                <div className="bg-[#CD2128] p-3 rounded-[30px] relative right-6">
                  <img src={card.image} alt="Icon" />
                </div>
                <div className="p-3 px-1">
                  <h2 className="font-Barlow font-[700] text-lg leading-[24px]">
                    {card.title}
                  </h2>
                  <p className="font-[Manrope] text-[400] text-[13px] leading-[24px]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[40%] mt-6 md:mt-0">
          <img
            src="/assets/images/whyChoose.png"
            alt="Why choose us"
            className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-full mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default TheBest;
