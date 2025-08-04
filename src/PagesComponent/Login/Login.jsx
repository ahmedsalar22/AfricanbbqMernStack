import { useDispatch } from "react-redux";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../../redux/authSlice"; // Importing the actions
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(loginRequest());
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const headers = {
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(
        "https://afrikanbbq.devssh.xyz/api/user/login", // Replace with your API endpoint
        formData,
        { headers }
      );

      console.log("Login successful:", response.data);
      alert("Login successful!");

      dispatch(
        loginSuccess({
          token: response.data.token,
          user: response.data.user,
        })
      );

      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid email or password. Please try again.");
      dispatch(loginFailure("Invalid email or password. Please try again."));

      // Hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen loginContainer lg:flex-row">
      {/* Image Section */}
      <div className="hidden w-full image   md:block lg:w-1/2">
        <img
          src="/assets/images/LoginImageij.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="w-full p-4 form lg:w-1/2">
        <div className="flex flex-col justify-center signup sm:h-auto lg:h-screen">
          <div className="w-full max-w-md p-8 mx-auto border-gray-300 rounded-2xl">
            <div className="mb-12 text-center">
              <a href="javascript:void(0)">
                <img
                  src="/assets/images/Afrikanbbq.png"
                  alt="logo"
                  className="inline-block w-32 lg:w-40"
                />
              </a>
            </div>

            {/* Top Alert for error message */}
            {errorMessage && (
              <div className="absolute top-0 left-0 w-full px-4 py-2 text-center text-white bg-red-600 rounded-b-lg">
                <span>{errorMessage}</span>
              </div>
            )}

            <form>
              <div>
                <h1 className="font-Poppins font-extrabold text-[24px] md:text-[30.1px] leading-[36px] md:leading-[45.15px]">
                  Login
                </h1>
                <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
                  Email Address
                </label>
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500"
                  placeholder="Password"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 mt-2 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="font-Poppins mt-2 font-[600] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.25px] text-[#777777] ml-3"
                >
                  Remember my preference
                </label>
              </div>

              <div className="forgotpas">
                <div className="font-Poppins mt-2 font-[400] text-sm md:text-[15.38px] leading-[22.97px] text-[#3D4152]">
                  Forgot Password?
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="font-Poppins font-[500] w-full py-3 text-sm md:text-[17.5px] leading-[22px] md:leading-[26.25px] tracking-wider rounded-md text-white bg-[#CD2128] focus:outline-none relative flex justify-center items-center"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
                  ) : (
                    "Sign Me In"
                  )}
                </button>
              </div>

              <div className="socialsection">
                <div className="flex items-center justify-center mt-1 continueSection">
                  <div className="w-1/4 border-b"></div>
                  <div className="px-3 font-Poppins font-[400] text-sm md:text-[13.38px] leading-[22px] md:leading-[22.97px] text-[#777777]">
                    Continue With
                  </div>
                  <div className="w-1/4 border-b"></div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 mt-3 mainContainer">
                  <div className="flex gap-2 border rounded-[8.75px] py-3 px-5 items-center justify-center">
                    <div className="img">
                      <img
                        className="w-4 md:w-5"
                        src="/assets/images/facebook.png"
                        alt=""
                      />
                    </div>
                    <span className="font-Poppins font-[500] text-xs md:text-[12.5px] leading-[10px] md:leading-[10.25px] text-[#7E808C]">
                      Facebook
                    </span>
                  </div>
                  <div className="flex gap-2 border rounded-[8.75px] py-3 px-5 items-center justify-center">
                    <div className="img">
                      <img
                        className="w-4 md:w-5"
                        src="/assets/images/google.png"
                        alt=""
                      />
                    </div>
                    <span className="font-Poppins font-[500] text-xs md:text-[12.5px] leading-[10px] md:leading-[10.25px] text-[#7E808C]">
                      Google
                    </span>
                  </div>
                  <div className="flex gap-2 border rounded-[8.75px] py-3 px-5 items-center justify-center">
                    <div className="img">
                      <img
                        className="w-4 md:w-5"
                        src="/assets/images/linkedin.png"
                        alt=""
                      />
                    </div>
                    <span className="font-Poppins font-[500] text-xs md:text-[12.5px] leading-[10px] md:leading-[10.25px] text-[#7E808C]">
                      LinkedIn
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-center text-[#777777]">
                Already have an account?{" "}
                <a
                  href="javascript:void(0);"
                  className="ml-1 font-semibold text-[#CD2128] hover:underline"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
