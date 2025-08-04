import { useState } from "react";

const EventInfo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["29 Sep", "06 Oct", "13 Oct"];

  const events = [
    {
      time: "11:00 AM - 12:00 PM",
      title: "Lorem Ipsum is simply dummy text of the printing",
      description:
        "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    },
    {
      time: "2:00 AM - 3:00 AM",
      title: "Lorem Ipsum is simply dummy text of the printing",
      description:
        "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    },
    {
      time: "3:00 AM - 4:00 AM",
      title: "Lorem Ipsum is simply dummy text of the printing",
      description:
        "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    },
  ];

  // Event details data array
  const eventDetails = [
    {
      label: "Date:",
      content: "September 5, 2025 – September 12, 2025",
    },
    {
      label: "Time:",
      content: "10:00 am – 10:00 pm (UTC+0)",
    },
    {
      label: "Venue:",
      content: "Chicago",
    },
  ];

  const pricingDetails = [
    {
      title: "DEFAULT",
      subtitle: "(99966 seats remaining)",
    },
    {
      label: "Per Person:",
      value: "$50",
    },
  ];

  return (
    <>
      <div className="container w-full ">
        <div className="semi py-[10%] w-[80%] flex flex-wrap b lg:flex-nowrap mx-auto">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="w-full h-64 md:h-80">
                  <img
                    src="/assets/images/party.png" // Replace with your image URL
                    alt="Event"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-6">
                  <h2 className="mb-4 text-2xl font-bold">Event Information</h2>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold">Event About</h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <ul className="mb-6 text-gray-600 list-disc list-inside">
                    {[
                      "Creating a co-founder agreement",
                      "Importance of defined roles",
                      "Creating a co-founder agreement",
                      "Importance of defined roles",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  {/* Closing Section */}
                  <p className="leading-relaxed text-gray-600">
                    Are you a founder that is building a new better future for
                    women? Are you working with another co-founder or
                    considering finding one? Learn how to build a co-founder
                    relationship more effectively at virtual events!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <div className="w-full max-w-3xl overflow-hidden bg-white shadow-lg rounded-xl">
                <div className="flex justify-around border-b border-gray-200">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 text-center py-3 font-semibold text-sm transition-colors duration-200 ease-in-out ${
                        activeTab === index
                          ? "border-b-4 border-blue-500 text-blue-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="p-6 space-y-4">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-4 py-4 border-b border-gray-200 md:flex-row last:border-b-0"
                    >
                      <div className="bg-[#EDF0FF] font-Gothic A1 font-[700] text-[13px] leading-[26px] text-[#2F2F89] px-4 py-2 rounded-[36px] text-sm flex-shrink-0">
                        {event.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 font-semibold text-gray-800">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {event.description}
                        </p>
                        <div className="flex-shrink-0 w-12 h-12 mt-2 overflow-hidden bg-gray-200 rounded-lg">
                          <img
                            src="https://via.placeholder.com/48"
                            alt="Event Thumbnail"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full mt-8 lg:w-1/2 lg:mt-0">
            <div className="sticky flex items-center justify-center p-4 top-4">
              <div className="w-full max-w-md p-6 bg-white rounded-lg">
                {/* Event Details */}
                <div className="mb-6 space-y-10">
                  {eventDetails.map((detail, index) => (
                    <p
                      key={index}
                      className="py-3 mb-2 text-sm text-gray-800 border-b"
                    >
                      <span className="font-semibold">{detail.label}</span>{" "}
                      {detail.content}
                    </p>
                  ))}
                </div>

                {/* Pricing Section */}
                <div className="border bg-[#FFFFFF] rounded-lg p-4">
                  <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Pricing
                  </h3>
                  {pricingDetails.map((pricing, index) => (
                    <div key={index} className="mb-4">
                      {pricing.title ? (
                        <>
                          <p className="font-semibold text-purple-700">
                            {pricing.title}
                          </p>
                          <p className="text-gray-500">{pricing.subtitle}</p>
                        </>
                      ) : (
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm text-gray-800">
                            {pricing.label}
                          </p>
                          <p className="text-sm text-gray-800">
                            {pricing.value}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Quantity Selector */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <button className="px-3 py-1 text-gray-800 bg-gray-200 rounded-md">
                        -
                      </button>
                      <span className="mx-3 text-gray-800">0</span>
                      <button className="px-3 py-1 text-gray-800 bg-gray-200 rounded-md">
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-800">Subtotal: $0</p>
                  </div>

                  {/* Total Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-800">Total:</p>
                    <p className="text-sm text-gray-800">$0</p>
                  </div>

                  {/* Booking Button */}
                  <button className="w-full py-2 text-white bg-gray-300 rounded-md cursor-not-allowed">
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventInfo;
