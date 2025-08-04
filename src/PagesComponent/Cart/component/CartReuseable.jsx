import { Link } from "react-router-dom";

const CartReuseable = () => {
  return (
    <>
      <div className="totalCart ">
        <div className="flex-1 max-w-4xl mx-auto mt-6 space-y-6 lg:mt-0 lg:w-full">
          <div className="p-4 space-y-4 bg-[#EEF6EB] border border-gray-200 rounded-[5p] shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <p className="text-xl font-[600] text-[18px] leading-[21.6px] text-gray-900 font-Barlow dark:text-white">
              Total Cart (02)
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-[Manrope] text-[15px] leading-[22.5px] font-normal text-[#231F40]  font-Manrope ">
                    Subtotal:
                  </dt>
                  <dd className="text-base  font-[Manrope] text-[15px] leading-[22.5px] font-normal text-[#231F40]  font-Manrope ">
                    $124.00
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
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"></div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-4 text-sm rounded-[30px] text-gray-900 border border-gray-300  ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Coupon Code"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white rounded-[30px] absolute end-2.5 bottom-2 bg-[#CD2128]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-6 py-2 "
                  >
                    Apply
                  </button>
                </div>
                <div className="checkout">
                <Link to={"/checkout"}>
                <button className="bg-[#CD2128] text-white font-Manrope font-[600] text-[16px] leading-[24px] mt-4 rounded-[30px] px-6 py-2 w-full">
                    Checkout
                  </button>
                </Link>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartReuseable;
