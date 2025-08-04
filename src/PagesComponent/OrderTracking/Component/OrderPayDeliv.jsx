import { AiOutlineIssuesClose } from "react-icons/ai"
import { IoCubeOutline } from "react-icons/io5"
import { MdArrowOutward } from "react-icons/md"
import { TbTruck } from "react-icons/tb"


const OrderPayDeliv = () => {
  return (
    <>
           <div className="cartContainer w-[90%] flex flex-wrap lg:flex-nowrap gap-6 border m-auto">
  {/* Product List Section */}
  <div className="p-4 w-full lg:w-1/2 border rounded-lg">
    <div className="rounded-lg overflow-hidden">
      <div className="p-4">
        {/* Individual Product Item */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className={`flex items-center mb-4 ${
              index === 2 ? "border-b pb-5" : ""
            }`}
          >
            <img
              className="w-20 h-20 object-contain rounded-lg mr-4"
              src="/assets/images/beefStack.png"
              alt="Product"
            />
            <div className="flex-1">
              <h2 className="font-Inter font-[400] text-[24px] leading-[32px] py-3">
                Beef Stack
              </h2>
              <div className="three flex items-center gap-2">
                <div className="border-r-2 px-2 border-[#D0D5DD]">Spicy</div>
                <div className="border-r px-2">Raita</div>
                <div className="px-2">Extra Sauce</div>
              </div>
            </div>
            <div className="dollar">
              <div className="text-[#1D2939] font-Inter font-[600] text-[20px] leading-[30px]">
                $12.00
              </div>
              <div className="font-Inter text-end text-[#667085] font-[400] text-[16px] leading-[24px]">
                Qty: 1
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Payment Section */}
  <div className="payment w-full lg:w-1/4  p-4 rounded-lg flex flex-col space-y-8">
    <div className="visa">
      <h1 className="font-Inter font-[500] text-black text-[25px] leading-[32px]">
        Payment
      </h1>
      <div className="flex gap-2">
        <span className="font-Inter text-[#667085] font-[400] text-[15px] leading-[21px]">
          Visa**56
        </span>
        <img src="/assets/images/Payment.png" alt="Payment" />
      </div>
    </div>
    <div className="help">
      <h2 className="font-Inter font-[500] text-black text-[25px] leading-[32px]">
        Need Help
      </h2>
      <div className="orderIssues space-y-4">
        {[
          { icon: <AiOutlineIssuesClose />, label: "Order Issues" },
          { icon: <TbTruck />, label: "Delivery Info" },
          { icon: <IoCubeOutline />, label: "Returns" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div>{item.icon}</div>
            <div className="font-Inter font-[500] text-[19px] text-[#667085] leading-[30px]">
              {item.label}
            </div>
            <MdArrowOutward />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Delivery Section */}
  <div className="delivery w-full lg:w-1/4 border p-4 rounded-lg">
    <div className="visa">
      <h1 className="font-Inter font-[500] text-black text-[25px] leading-[32px]">
        Delivery
      </h1>
      <div className="flex flex-col">
        <span className="font-Inter text-[#667085] font-[400] text-[15px] leading-[21px]">
          Address
        </span>
        <div className="orderIssues  p-4 rounded-lg mt-2">
          <div>
            <div>847 Jewess Bridge Apt.</div>
            <div>174 London, UK</div>
            <div>474-769-3919</div>
          </div>
        </div>
      </div>
    </div>
    <div className="cart text-white  rounded-lg mt-4">
    <div className="totalCart ">
            <div className="flex-1 max-w-4xl mx-auto mt-6 space-y-6 lg:mt-0 lg:w-full">
              <div className="p-4 space-y-4  border-gray-200 rounded-[5p] shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-[600] text-[18px] leading-[21.6px] text-gray-900 font-Barlow dark:text-white">
                Order Summary   
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-[Manrope] text-[15px] leading-[22.5px] font-normal text-[#231F40]  font-Manrope ">
                      Discount
                      </dt>
                      <dd className="text-base  font-[Manrope] text-[15px] leading-[22.5px] font-normal text-[#231F40]  font-Manrope ">
                        $10
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Delivery:
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        $00.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Discount:
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $10.00
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      $134.00
                    </dd>
                  </dl>
                </div>

                <div className="">
                  <form>
                    <label
                      
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"></div>
                    
                    </div>
                 
                  </form>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</div>
    </>
  )
}

export default OrderPayDeliv