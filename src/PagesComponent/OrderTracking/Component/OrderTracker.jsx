    import { CiDeliveryTruck } from "react-icons/ci";
    const OrderTracker = () => {
      return (
        <div className="semi w-[80%]  m-auto">
          <div className="orderId flex  justify-between items-center  w-[80%] m-auto">
            <div className="font-[Inter] font-[600] text-[35px] leading-[56px]">
              Order ID: 3354654654526
            </div>

            <div className="flex gap-2">
              <button className="py-2 px-7 border rounded-[12px] text-[#667085] font-[600] text-[20.65px] leading-[30px]">
                Invoice
              </button>
              <button className="py-2 px-7 border  text-white rounded-[12px] bg-[#CD2128] font-[600] text-[20.65px] leading-[30px]">
                Track order
              </button>
            </div>
          </div>
          <div className="orderDate w-[80%] border-b border-[#D0D5DD] m-auto flex items-center gap-2 py-4">
            <div className="font-Inter text-[#CD2128] font-[600] text-[30px] leading-[35px]">
              <CiDeliveryTruck />
            </div>
            <h2 className="font-Inter text-[#CD2128] font-[600] text-[23px] leading-[35px]">
              Order date: Dec 03, 2024
            </h2>
          </div>
          <section className="relative py-24">
            <div className="px-4 mx-auto max-w-7xl md:px-5 lg:px-5">
              <div className="inline-flex flex-col items-start justify-start w-full gap-8 lg:gap-10">
                <div className="flex flex-col items-start justify-center w-full sm:items-center gap-8s">
                  <ol className="flex items-start w-full gap-3 sm:items-center sm:gap-0">
                    <li className="flex w-full relative justify-center  text-[#CD2128] text-base font-semibold after:content-[''] after:w-full after:h-0.5 after:border after:border-solid after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3 xl:after:left-52 lg:after:left-48 md:after:left-36 sm:after:left-28 after:left-20">
                      <div className="z-10 flex flex-col items-center block sm:whitespace-nowrap">
                        <span className="w-6 h-3 mt-2  bg-[#CD2128] text-center border-2 border-transparent  rounded-[16px] flex justify-center items-center mx-auto mb-1 text-base font-bold text-white lg:w-10 lg:h-7"></span>
                        Order Confirmed
                        <span className="text-[#667085]  text-base font-normal text-center">
                          8:00 AM
                        </span>
                      </div>
                    </li>
                    <li className="flex w-full relative justify-center text-[#D0D5DD] text-base font-semibold after:content-[''] after:w-full after:h-0.5 after:border after:border-solid after:bg-indigo-200 after:inline-block after:absolute lg:after:top-5 after:top-3 xl:after:left-52 lg:after:left-48 md:after:left-36 sm:after:left-28 after:left-20">
                      <div className="z-10 flex flex-col items-center block sm:whitespace-nowrap">
                        <span className="w-6 h-3 mt-2 bg-[#D0D5DD] text-center border-2 border-transparent  rounded-[16px] flex justify-center items-center mx-auto mb-1 text-base font-bold text-[#667085] lg:w-10 lg:h-7"></span>
                        Order Received
                        <span className="text-[#D0D5DD] text-base font-normal text-center">
                          04:23 PM
                        </span>
                      </div>
                    </li>
                    <li className="flex w-full relative justify-center text-[#D0D5DD] text-base font-semibold">
                      <div className="z-10 flex flex-col items-center block sm:whitespace-nowrap">
                        <span className="w-6 h-3 mt-2 bg-[#D0D5DD] text-center border-2 border-transparent  rounded-[16px] flex justify-center items-center mx-auto mb-1 text-base font-bold text-white lg:w-10 lg:h-7"></span>
                        To Deliver{" "}
                        <span className="text-[#D0D5DD] text-base font-normal text-center">
                          Estimated date: Feb 15,
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default OrderTracker;
