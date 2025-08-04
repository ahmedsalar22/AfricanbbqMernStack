import { useDispatch } from "react-redux";
import { logout } from "../../../redux/authSlice"; // Path to your authSlice

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  const dispatch = useDispatch(); // Get the dispatch function

  const handleLogout = () => {
    // Dispatch the logout action to update Redux state
    dispatch(logout());

    // Show toast notification
    toast.success("You have been logged out!", {
      position: "top-right",
      autoClose: 3000, // Hide the toast after 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={handleLogout}
        className="px-6 py-2 text-white transition duration-200 bg-red-600 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
      <ToastContainer />
    </div>
  );
};

export default Logout;
