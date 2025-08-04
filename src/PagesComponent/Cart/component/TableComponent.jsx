import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, resetCart } from "../../../redux/cartSlice"; // Import actions

const TableComponent = () => {
  const dispatch = useDispatch(); // To dispatch actions
  const { product: products } = useSelector((state) => state.cartProuduct);
  console.log(products, "cartProduct");

  return (
    <div className="w-full tableContainer py-[70px]">
      <div className="w-4/5 mx-auto semi">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border">
                <th
                  scope="col"
                  className="px-5 text-center py-3 border bg-[#CD2128]"
                >
                  <span className="font-Manrope font-[800] text-[16px] text-white leading-[24px]">
                    Image
                  </span>
                </th>
                <th
                  scope="col"
                  className="font-Manrope font-[800] text-[16px] text-center border bg-[#CD2128] text-white leading-[24px] px-6 py-3"
                >
                  Details
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-Manrope font-[800] text-[16px] text-center border bg-[#CD2128] text-white leading-[24px]"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-Manrope font-[800] text-[16px] text-center border bg-[#CD2128] text-white leading-[24px]"
                >
                  Qty
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border font-Manrope font-[800] text-[16px] text-center bg-[#CD2128] text-white leading-[24px]"
                >
                  Total
                </th>
                <th
                  onClick={() => dispatch(resetCart())}
                  scope="col"
                  className="px-6 cursor-pointer hover:text-black py-3 border font-Manrope font-[800] text-[16px] text-center bg-[#CD2128] text-white leading-[24px]"
                >
                  Clear All
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4 border">
                      <img
                        src={item.imageUrl}
                        className="w-16 max-w-full max-h-full md:w-44"
                        alt="Product"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 border dark:text-white">
                      <div className="heading font-[Roboto] text-[18px] leading-[27px]">
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-[Barlow] font-[700] text-[#231F40] text-[18px] leading-[21.6px] text-center border">
                      {item.price}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-white bg-[#CD2128] border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                          onClick={() => dispatch(decrement({ id: item.id }))} // Dispatch decrement
                        >
                          <span className="sr-only">Decrease Quantity</span>
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 18 2"
                            fill="none"
                          >
                            <path
                              d="M1 1h16"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          className="px-3 py-1 text-center border rounded-[30px] bg-gray-50 w-14"
                          value={item.quantity} // Bind quantity value
                          readOnly
                        />
                        <button
                          className="inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-white bg-[#CD2128] border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                          onClick={() => dispatch(increment({ id: item.id }))} // Dispatch increment
                        >
                          <span className="sr-only">Increase Quantity</span>
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M9 1v16M1 9h16"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-[Barlow] font-[700] text-[#231F40] text-[18px] leading-[21.6px] text-center border">
                      {item.price * item.quantity} {/* Total Price */}
                    </td>
                    <td className="px-6 py-4 font-[Barlow] font-[700] text-[#231F40] text-[18px] leading-[21.6px] text-center border"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
