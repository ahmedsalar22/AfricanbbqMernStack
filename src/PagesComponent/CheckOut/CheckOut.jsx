import CartBanner from "../Cart/component/cartBanner";
import BillingAddress from "./Components/BillingAddress";
import { SelectAddress } from "./Components/SelectAddress";

const CheckOut = () => {
  return (
    <>
      <CartBanner heading={"Checkout"}  subheadingOne={"Home"} subHeadingTwo={"Checkout"} />
      <SelectAddress  />
      <BillingAddress />
    </>
  );
};

export default CheckOut;
