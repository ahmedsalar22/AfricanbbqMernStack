const DailyOffer = () => {

  const cardsData = [
    {
      id: 1,
      title: "Dal Makhani",
      description: "Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.",
      imageUrl: "/assets/images/dailyOffer.jpg",
      discountBadgeUrl: "/assets/images/40%off.png",
      icons: [
        "/assets/images/heartLogo.png",
        "/assets/images/heartLogo.png",
        "/assets/images/heartLogo.png",
      ],
    },
    {
      id: 2,
      title: "Dal Makhani",
      description: "Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.",
      imageUrl: "/assets/images/dailyOffer.jpg",
      discountBadgeUrl: "/assets/images/40%off.png",
      icons: [
        "/assets/images/heartLogo.png",
        "/assets/images/heartLogo.png",
        "/assets/images/heartLogo.png",
      ],
    },
    {
      id: 3,
      title: "Dal Makhani",
      description: "Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.",
      imageUrl: "/assets/images/dailyOffer.jpg",
      discountBadgeUrl: "/assets/images/40%off.png",
      icons: [
        "/assets/images/heartLogo.png",
        "/assets/images/heartLogo.png",
        "/assets/images/heartLogo.png",
      ],
    },
  ];

  return (
    <div className="offerOftheday py-[60px] flex bg-[#EEF6EB] w-full">
      <div className="semi w-[80%] mx-auto">
        <div className=" heading xl:ml-20 lg:ml-20">
          <div className="flex heading-one">
            <div>
              <h2 className="font-Oleo Script  font-[700] text-[30px] leading-[28.8px] text-[#CD2128]">
                Daily offer
              </h2>
            </div>
            <img src="/assets/images/spoon.png" alt="" />
          </div>
          <div className="font-Barlow font-[800] text-[30px] ">up to 75% off for this day</div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-10 cards">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="card flex p-3 relative bg-white max-w-[320px] w-full"
            >
              <div>
                <img className="w-full" src={card.imageUrl} alt="" />
              </div>
              <div className="flex items-center justify-center text">
                <div className="headingpara">
                  <div className="font-Barlow font-[700] text-[20px] leading-[30px]">
                    {card.title}
                  </div>
                  <div className="font-Barlow pb-2 font-[600] text-[14px] leading-[20px]">
                    {card.description}
                  </div>
                  <div className="flex gap-2 icons">
                    {card.icons.map((icon, index) => (
                      <div key={index}>
                        <img src={icon} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="icon absolute top-[18%] left-[25%]">
                    <img src={card.discountBadgeUrl} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyOffer;
