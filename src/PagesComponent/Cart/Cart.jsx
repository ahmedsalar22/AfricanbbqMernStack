import CartBanner from "./component/cartBanner";
import TableComponent from "./component/TableComponent";
import TotalCartComp from "./component/TotalCartComp";

const Cart = () => {
  return (
    <>
      <CartBanner
        heading={"Cart View"}
        subheadingOne={"Home"}
        subHeadingTwo={"Cart View"}
      />
      <TableComponent />
      <TotalCartComp />
    </>
  );
};

export default Cart;
