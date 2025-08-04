import CartBanner from "../Cart/component/cartBanner";
import EventInfo from "./Component/EventInfo";

const EventDetails = () => {
  return (
    <>
      <CartBanner
        heading={"Event Details"}
        subheadingOne={"Home"}
        subHeadingTwo={"Event Details"}
      />
      <EventInfo />
    </>
  );
};

export default EventDetails;
