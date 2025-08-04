const BillingAddress = () => {
  return (
    <>
      <div className="billingAddress  w-[100%]">
        <div className="semi w-[80%] m-auto">
          <div className="  border-b-2 p-2  xl:w-[60%] lg:w-[60%] md:[60%] w-full  border-[#f7cba4] selectAddress">
            <div className="font-Barlow font-[600] text-[25px] leading-[30px]">
              Billing Address
            </div>
            <div></div>
          </div>

          <div className=" xl:w-[60%] lg:w-[60%]  md:full  form ">
            <form action="">
              {/* Name Fields */}
              <div className="flex flex-wrap justify-between gap-4 py-2">
                <input
                  className="w-full md:w-[48%] px-2 py-2 border rounded-lg"
                  placeholder="First Name *"
                  type="text"
                  required
                />
                <input
                  className="w-full md:w-[48%] px-2 py-2 border rounded-lg"
                  placeholder="Last Name *"
                  type="text"
                  required
                />
              </div>

              {/* Company Name */}
              <div className="py-2">
                <input
                  className="w-full px-2 py-2 border rounded-lg"
                  placeholder="Company Name (Optional)"
                  type="text"
                />
              </div>

              {/* Address Fields */}
              <div className="flex flex-wrap justify-between gap-4 py-2">
                {/* Country Selection */}
                <div className="w-full md:w-[48%]">
                  <select
                    id="country"
                    className="w-full px-2 py-2 border rounded-lg bg-gray-50"
                    required
                  >
                    <option value="">Select Country *</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>

                {/* Street Address */}
                <div className="w-full md:w-[48%]">
                  <input
                    className="w-full px-2 py-2 border rounded-lg"
                    placeholder="Street Address *"
                    type="text"
                    required
                  />
                </div>

                {/* Town/City */}
                <div className="w-full md:w-[48%]">
                  <input
                    className="w-full px-2 py-2 border rounded-lg"
                    placeholder="Town / City *"
                    type="text"
                    required
                  />
                </div>

                {/* State */}
                <div className="w-full md:w-[48%]">
                  <input
                    className="w-full px-2 py-2 border rounded-lg"
                    placeholder="State *"
                    type="text"
                    required
                  />
                </div>

                {/* ZIP Code */}
                <div className="w-full md:w-[48%]">
                  <input
                    className="w-full px-2 py-2 border rounded-lg"
                    placeholder="ZIP Code *"
                    type="text"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="w-full md:w-[48%]">
                  <input
                    className="w-full px-2 py-2 border rounded-lg"
                    placeholder="Phone *"
                    type="text"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="w-full md:w-[48%]">
                  <input
                    className="w-full px-2 py-2 border rounded-lg"
                    placeholder="Email *"
                    type="email"
                    required
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="py-4">
                <div className="  border-b-2 p-2 w-[100%] border-[#f7cba4] selectAddress">
                  <div className="font-Barlow font-[600] text-[25px] leading-[30px]">
                    Additional Information
                  </div>
                </div>
                <textarea
                  className="w-full px-2 py-2 mt-2 border rounded-lg"
                  placeholder="Notes about your order, e.g., special notes for delivery"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingAddress;
