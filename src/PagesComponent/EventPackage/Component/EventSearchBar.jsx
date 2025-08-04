const EventSearchBar = () => {
  return (
    <>
      <header className="mb-8 w-full">
        <div className="flex flex-wrap items-center bg-white p-4 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Find your next event"
            className="px-4 py-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[20%] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
          />
          <select className="ml-4 px-5 py-2 border-l border-gray-300 bg-white w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[20%] mb-4 sm:mb-0">
            <option>Event Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
          </select>
          <select className="ml-4 px-5 py-2 border-l border-r border-gray-300 bg-white w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[20%] mb-4 sm:mb-0">
            <option>Event Category</option>
            <option>Music</option>
            <option>Festival</option>
          </select>
          <button className="ml-auto px-6 py-2 w-full sm:w-auto">
            <img src="/assets/images/Button.png" alt="" />
          </button>
        </div>
      </header>
    </>
  );
};

export default EventSearchBar;
