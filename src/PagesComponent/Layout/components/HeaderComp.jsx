import Logout from "./logout";

export default function HeaderComp() {
  return (
    <>
      <div className="header  bg-[#231F40] flex w-full items-center justify-center">
        <div className="w-[83%] mx-auto flex flex-wrap justify-between gap-4 md:gap-5">
          {/* Left Box (Red Box) */}
          <div
            className="bg-[#CD2128] w-full md:w-[50%] flex flex-col md:flex-row justify-center gap-4 py-3 md:py-4 ml-4 md:ml-6"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 95% 100%, 5% 100%)",
            }}
          >
            <div className="flex items-center justify-center gap-2 emailbox">
              <img src="/assets/images/emailicon.png" alt="" className="w-5" />
              <div className="text-sm text-white md:text-base">
                examplemail@gmail.com
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 phoneBox">
              <img src="/assets/images/phoneIcon.png" alt="" className="w-5" />
              <div className="text-sm text-white md:text-base">+1234567890</div>
            </div>
          </div>
          {/* Right Box (Icons) */}
          <div className="flex items-center justify-center w-full gap-3 md:w-auto">
            <div>
              <img
                src="/assets/images/twitter-red.png"
                alt=""
                className="w-5"
              />
            </div>
            <div>
              <img
                src="/assets/images/facebook-red.png"
                alt=""
                className="w-5"
              />
            </div>
            <div>
              <img
                src="/assets/images/linkedin-red.png"
                alt=""
                className="w-5"
              />
            </div>
            <div>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
