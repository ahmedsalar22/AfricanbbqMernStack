import { FaUser } from "react-icons/fa";

export default function CustomerService(props) {
  // eslint-disable-next-line react/prop-types
  const { data } = props;
  return (
    <div
      className="customer-service mt-16 w-full h-auto] relative"
      style={{
        backgroundImage:
          ' linear-gradient(rgba(35, 31, 64, 0.88), rgba(35, 31, 64, 0.60)),url("/assets/images/rice.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-wrap items-center justify-center gap-5 py-12">
        {data?.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <img
              src={item.imageSrc}
              alt={`Customer service item ${index + 1}`}
            />
            <div className="relative bottom-[80px] text-3xl -mt-14">
              {item.count}
            </div>
            <div className="relative -mt-4">
              <div className="bg-[#CD2128] rounded-[25px] p-4">
                <FaUser />
              </div>
            </div>
            <div className="text-[Manrope] font-[700] text-[20px] ">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
