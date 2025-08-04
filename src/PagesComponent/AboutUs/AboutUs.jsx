import CartBanner from "../Cart/component/cartBanner";
import CustomerService from "../Home/components/CustomerService";
import Testimonial from "../Home/components/Testimonial";
import AboutCompany from "./Components/AboutCompany";
import ExperienceSection from "./Components/ExperienceSection";
import TheBest from "./Components/TheBest";
import VIsionCards from "./Components/VIsionCards";

const AboutUs = () => {
  const customerServiceData = [
    { count: "425 +", imageSrc: "/assets/images/circleImg.png" },
    { count: "300 +", imageSrc: "/assets/images/circleImg.png" },
    { count: "150 +", imageSrc: "/assets/images/circleImg.png" },
    { count: "200 +", imageSrc: "/assets/images/circleImg.png" },
    { count: "500 +", imageSrc: "/assets/images/circleImg.png" },
  ];
  return (
    <>
      <CartBanner
        heading={"About Us"}
        subheadingOne={"Home"}
        subHeadingTwo={"About Us"}
      />

      <div className="container  py-[40px] w-[95%] sm:w-[90%] mx-auto flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center justify-center gap-6">
        <ExperienceSection />
        <AboutCompany />
      </div>
      <VIsionCards />
      <TheBest />
      <CustomerService data={customerServiceData} />
      <Testimonial />
    </>
  );
};

export default AboutUs;
