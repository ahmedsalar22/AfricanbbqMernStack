import CartBanner from "../Cart/component/cartBanner";
import Layout from "../Layout/Layout";
import EventCards from "./Component/EventCards";
import EventSearchBar from "./Component/EventSearchBar";

const EventPackage = () => {
  return (
    <>
    <Layout>
    <CartBanner
        heading={"Event Package"}
        subheadingOne={"Home"}
        subHeadingTwo={"Event Package"}
      />
      <div className="w-full py-8 bg-gray-100">
        <div className="w-[80%] m-auto">
          <EventSearchBar />
          <EventCards />
        </div>
      </div>
    </Layout>
 
    </>
  );
};

export default EventPackage;
