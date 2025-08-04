import DailyOffer from "./components/DailyOffer";
import Event from "./components/Event";
import FriedChicken from "./components/FriedChicken";
import HeroSecton from "./components/HeroSection";
import Maaarquee from "./components/Maaarquee";
import Popular from "./components/Popular";
import ChikenSlider from "./components/ChikenSlider";
import Testimonial from "./components/Testimonial";
import CustomerService from "./components/CustomerService";
import BlogsCards from "./components/BlogsCards";

export default function Home() {
 
  const customerServiceData = [
    { count: "425 +", imageSrc: "/assets/images/circleImg.png" , text :"Customer Serve" },
    { count: "300 +", imageSrc: "/assets/images/circleImg.png" ,text : "Experience Chef"},
    { count: "150 +", imageSrc: "/assets/images/circleImg.png",text :" Happy Customer" },
    { count: "200 +", imageSrc: "/assets/images/circleImg.png",text :"Winning Award" },
    
  ];

  return (
    <>
      <div className="MainContainer">
        <Maaarquee />
        <HeroSecton />
        <DailyOffer />
        <Event />
        <Popular />
        <FriedChicken />
        <ChikenSlider />
        <Testimonial />
        <CustomerService data={customerServiceData} />
        <BlogsCards />
      </div>
    </>
  );
}
