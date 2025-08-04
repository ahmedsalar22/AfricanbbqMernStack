import CartBanner from "../Cart/component/cartBanner";
import CallContactUs from "./Components/CallContactUs";
import MapComp from "./Components/MapComp";

const Contact = () => {
  return (
    <>
    <CartBanner heading={"Contact With Us"}
        subheadingOne={"Home"}
        subHeadingTwo={"Cart View"}/>
     <CallContactUs/>
     <MapComp/>
   
    </>
  );
};

export default Contact;
