import { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { Link } from "react-router-dom";

const EventCards = () => {
    const eventsData = [
        { id: 1, title: "Albuquerque International Balloon Fiesta", date: "Fri, 15 Sep 2023 - Sat, 16 Sep 2023", organizers: "90 to 100", image: "/assets/images/TruthPower.png" },
        { id: 2, title: "Coachella Music Festival", date: "Fri, 12 Apr 2024 - Sun, 14 Apr 2024", organizers: "100 to 200", image: "/assets/images/TruthPower.png" },
        { id: 3, title: "Lollapalooza", date: "Fri, 28 Jul 2024 - Sun, 30 Jul 2024", organizers: "150 to 250", image: "/assets/images/TruthPower.png" },
        { id: 4, title: "Glastonbury Festival", date: "Wed, 19 Jun 2024 - Sun, 23 Jun 2024", organizers: "200 to 300", image: "/assets/images/TruthPower.png" },
        { id: 5, title: "Burning Man", date: "Mon, 26 Aug 2024 - Mon, 02 Sep 2024", organizers: "250 to 350", image: "/assets/images/TruthPower.png" },
        { id: 6, title: "Burning Man", date: "Mon, 26 Aug 2024 - Mon, 02 Sep 2024", organizers: "250 to 350", image: "/assets/images/TruthPower.png" },
        { id: 7, title: "Burning Man", date: "Mon, 26 Aug 2024 - Mon, 02 Sep 2024", organizers: "250 to 350", image: "/assets/images/TruthPower.png" },
        { id: 8, title: "Burning Man", date: "Mon, 26 Aug 2024 - Mon, 02 Sep 2024", organizers: "250 to 350", image: "/assets/images/TruthPower.png" },
        { id: 9, title: "Burning Man", date: "Mon, 26 Aug 2024 - Mon, 02 Sep 2024", organizers: "250 to 350", image: "/assets/images/TruthPower.png" },
        { id: 10, title: "Burning Man", date: "Mon, 26 Aug 2024 - Mon, 02 Sep 2024", organizers: "250 to 350", image: "/assets/images/TruthPower.png" },
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const pageSize = 9;
      const totalPages = Math.ceil(eventsData.length / pageSize);
    
      const startIndex = (currentPage - 1) * pageSize;
      const visibleEvents = eventsData.slice(startIndex, startIndex + pageSize);
    
      const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
  return (
    <>
         <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {visibleEvents.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden bg-white rounded-md shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-40"
                />
                <div className="flex items-end justify-center p-4">
                  <div className="flex flex-col">
                    <h3 className="font-[Gothic A1] font-[800] text-[20px] leading-[28px]">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="mt-2">
                        <BiCalendar />
                      </div>
                      <p className="font-[Gothic A1] font-[400] text-[14px] text-[#5D616A] mt-2">
                        {event.date}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      <div className="Gothic A1">Organized By</div>
                      <span className="font-medium text-[#CD2128]">
                        {event.organizers}
                      </span>
                    </p>
                  </div>
                  <Link to={"/eventdetails"} >
                  <button className="mt-4 text-[#000000] font-GothicA1 border-2 border-[#000000] font-[700] text-[13px] leading-[14px] p-2 px-6 rounded-md hover:bg-blue-700">
                    Detail
                  </button>
                  </Link>
                  
                </div>
              </div>
            ))}
          </main>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              className={`px-4 py-2 rounded-full border ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full border ${
                  currentPage === index + 1
                    ? "bg-[#CD2128] text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-4 py-2 rounded-full border ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
    </>
  )
}

export default EventCards