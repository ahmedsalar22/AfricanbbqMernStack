import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addProduct, removeProduct } from "../../../redux/cartSlice";

const PopulorCardComp = ({ product }) => {
  const { product: products } = useSelector((state) => state.cartProuduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token); // Get token from Redux state

  const handleAddToCart = () => {
    if (!token) {
      // Show alert if not logged in
      Swal.fire({
        title: "Login Required",
        text: "You need to be logged in to add items to the cart.",
        icon: "warning",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#CD2128",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });

      return;
    }

    // If logged in, proceed with adding to cart
    dispatch(addProduct(product));
  };

  return (
    <div className="card">
      <div className="bg-white border border-gray-200 rounded-lg shadow max-w-72 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={product.imageUrl}
            alt={product.name}
          />
        </a>
        <div className="p-5">
          <div className="w-full flex justify-end relative bottom-[38px]">
            <button className="p-1 px-5 text-white bg-[#CD2128]">
              {product.category}
            </button>
          </div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          <div className="flex w-[80%] justify-end gap-1 items-center">
            <img src="/assets/images/star.png" alt="Star" />
            <span>-</span>
            <span>{product.ratings || 0}</span>
          </div>
          <div className="dollars w-full justify-center font-Barlow font-[700] text-[22px] leading-[26.4px] text-[#CD2128] flex items-center">
            ${product.price.toFixed(2)}
          </div>
          <div className="flex justify-between mt-3 buttonIcons">
            {products.some((cart) => cart.name === product.name) ? (
              <button
                className="p-2 px-4 text-white bg-[#CD2128]"
                onClick={() => dispatch(removeProduct(product))}
              >
                Remove
              </button>
            ) : (
              <button
                className="p-2 px-4 text-white bg-[#CD2128]"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            )}
            <div className="icons">
              <img src="/assets/images/heartBox.png" alt="Favorite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulorCardComp;
