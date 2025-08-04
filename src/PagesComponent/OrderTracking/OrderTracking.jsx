
import CartBanner from "../Cart/component/cartBanner";
import OrderPayDeliv from "./Component/OrderPayDeliv";

import OrderTracker from "./Component/OrderTracker";


const OrderTracking = () => {
  return (
    <>
      <CartBanner heading={"Checkout"}  subheadingOne={"Home"} subHeadingTwo={"Checkout"} />
      <div className="orderTracking py-[40px] w-[100%]">
       <OrderTracker/>
       <OrderPayDeliv/>

       
     
      </div>
    </>
  );
};

export default OrderTracking;
