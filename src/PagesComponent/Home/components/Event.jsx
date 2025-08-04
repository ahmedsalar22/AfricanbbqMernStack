const Event = () => {
  return (
    <div className="flex items-center justify-center my-[60px] sm:my-0">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div
          className="flex justify-end w-full max-w-6xl mx-auto sm:min-h-screen"
          style={{
            backgroundImage: 'url("/assets/images/dinning.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            className="bg-[#CD2128DB] p-6 md:w-[60%] lg:w-[60%] xl:[60%] w-[100%] sm:w-full sm:h-screen"
            style={{
              clipPath: `polygon(
                ${
                  window.innerWidth >= 1024
                    ? "20.2% 0.8%, 100% 0%, 100% 100%, 0% 100%"
                    : "0% 0%, 100% 0%, 100% 100%, 0% 100%"
                }
              )`,
            }}
          >
            <div className="flex flex-col items-end justify-center mb-5 sm:items-center sm:justify-center form sm:h-full">
              <div className="w-full mb-4 text-3xl font-bold text-white border-b md:w-2/3 heading">
                Book an Event
              </div>
              <form className="xl:w-[70%] lg:w-[70%] md:[80%] w-[100%]  rounded-lg shadow-lg">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-lg font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-lg font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="last_name"
                      className="block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-lg font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block mb-2 text-lg font-medium text-gray-900"
                    >
                      Select Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block mb-2 text-lg font-medium text-gray-900"
                    >
                      Select Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="visitors"
                      className="block mb-2 text-lg font-medium text-gray-900"
                    >
                      Number of Persons
                    </label>
                    <input
                      type="number"
                      id="visitors"
                      className="block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Number of persons"
                      required
                    />
                  </div>
                </div>
                <div className="w-full mt-6">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
