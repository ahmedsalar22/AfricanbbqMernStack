const CallContactUs = () => {
  return (
    <>
      <div className="CallContainer py-[70px] w-full">
        <div className="semi w-full md:w-[80%] flex flex-col md:flex-row border m-auto">
          <div className="w-full md:w-1/2">
            <div className="call flex py-6 items-center justify-center flex-col bg-[#F3F7FB]">
              <div className="border-b-2 border-b-[#CD21285C] w-[90%] flex flex-col items-center">
                <h1 className="font-Barlow font-[600] text-[30px] leading-[36px] text-[#CD2128]">
                  Call
                </h1>
                <p className="font-Barlow font-[600] text-[15px] leading-[36px]">
                  +1347-430-9510
                </p>
                <p className="font-Barlow font-[600] text-[15px] leading-[36px]">
                  +9658745554002
                </p>
              </div>
            </div>
            <div className="call flex p-6 items-center justify-center flex-col bg-[#F3F7FB]">
              <div className="border-b-2 border-b-[#CD21285C] w-[90%] flex flex-col items-center">
                <h1 className="font-Barlow font-[600] text-[30px] leading-[36px] text-[#CD2128]">
                  Call
                </h1>
                <p className="font-Barlow font-[600] text-[15px] leading-[36px]">
                  +1347-430-9510
                </p>
                <p className="font-Barlow font-[600] text-[15px] leading-[36px]">
                  +9658745554002
                </p>
              </div>
            </div>
            <div className="call flex py-6 items-center justify-center flex-col bg-[#F3F7FB]">
              <div className=" w-[90%] flex flex-col items-center">
                <h1 className="font-Barlow font-[600] text-[30px] leading-[36px] text-[#CD2128]">
                  Call
                </h1>
                <p className="font-Barlow font-[600] text-[15px] leading-[36px]">
                  +1347-430-9510
                </p>
                <p className="font-Barlow font-[600] text-[15px] leading-[36px]">
                  +9658745554002
                </p>
              </div>
            </div>

            {/* Repeated Call Section Removed for Clarity */}
          </div>
          <div className="w-full md:w-1/2 bg-[#F3F7FB] mx-auto max-w-xl">
            <form
              action="#"
              method="POST"
              className="rounded px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Us
              </h2>

              <div className="mb-4">
                <div className="flex items-center rounded shadow appearance-none border focus-within:ring focus-within:ring-indigo-500">
                  <span className="px-3 py-2 text-[#f6d7d8] bg-[#f6d7d8]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="flex items-center rounded shadow appearance-none border focus-within:ring focus-within:ring-indigo-500">
                    <span className="px-3 py-2 text-[#f6d7d8] bg-[#f6d7d8]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12v4m0 0v4m0-4H8m8 0H8"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center bg-gray-100 rounded shadow appearance-none border focus-within:ring focus-within:ring-indigo-500">
                    <span className="px-3 py-2 text-[#f6d7d8] bg-[#f6d7d 8]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7-3m0 0l7 3m-7-3v6"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center bg-gray-100 rounded shadow appearance-none border focus-within:ring focus-within:ring-indigo-500">
                  <span className="px-3 py-2 text-[#f6d7d8] bg-[#f6d7d8]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center bg-gray-100 rounded shadow appearance-none border focus-within:ring focus-within:ring-indigo-500">
                  <span className="px-3 py-10 text-[#f6d7d8] bg-[#f6d7d8]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 8h10M7 12h4"
                      />
                    </svg>
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message here..."
                    className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-red-600 font-Manrope font-[600] text-[16px] leading-[24px] text-white py-2 px-6 rounded-[30px] hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallContactUs;
