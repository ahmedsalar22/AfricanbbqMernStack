// import axios from "axios";
// import { useState } from "react";

// export default function SignUP() {
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("first_name", firstName);
//     formData.append("last_name", lastName);
//     formData.append("phone", phone);
//     formData.append("password", password);
//     formData.append("password_confirmation", confirmPassword);

//     try {
//       const response = await axios.post(
//         "https://afrikanbbq.devssh.xyz/api/user/register",
//         formData
//       ); // Axios automatically handles Content-Type header
//       console.log("Signup successful:", response.data);
//       alert("Signup successful!");
//     } catch (error) {
//       console.error("Error during signup:", error);
//       setErrorMessage("Signup failed. Please try again.");
//     }
//   };
//   return (
//     <>
//       <div className="flex flex-col w-full min-h-screen loginContainer lg:flex-row">
//         <div className="flex items-center   justify-center xl:mt-[15%]     hidde  n xl:block lg:block lg:mt-36 xl:w-[70%] image lg:w-[70%] md:hidden">
//           <img
//             src="/assets/images/signUpSecons.png"
//             alt=""
//             className="object-cover w-[65%]  2xl:w-[50%] xl:w-[70%]    mx-auto"
//           />
//         </div>

//         <div className="w-full px-3 xl:px-0 form lg:mt-12 md:mt-3 lg:w-1/2">
//           <div className="flex flex-col justify-center signup sm:h-auto lg:h-screen">
//             <div className="w-full max-w-md mx-auto border-gray-300 rounded-2xl">
//               <div className="text-center ">
//                 <a href="javascript:void(0)">
//                   <img
//                     src="/assets/images/Afrikanbbq.png"
//                     alt="logo"
//                     className="inline-block lg:w-32 xl:mt-56 lg:mt-10"
//                   />
//                 </a>
//               </div>

//               <form onSubmit={handleSignUp}>
//                 <div>
//                   <h1 className="font-Poppins mt-10 font-extrabold text-[24px] md:text-[30.1px]  ">
//                     SignUp
//                   </h1>

//                   {/* Error Message */}
//                   {errorMessage && (
//                     <div className="mt-2 text-sm text-center text-red-500">
//                       {errorMessage}
//                     </div>
//                   )}
//                   <div>
//                     <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
//                       Email Address
//                     </label>
//                     <div className="relative w-full">
//                       <input
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         name="email"
//                         type="text"
//                         className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
//                         placeholder="hello@example.com"
//                       />
//                       <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
//                         <img
//                           src="/assets/images/inputIcon.png"
//                           alt="icon"
//                           className="w-5 h-5"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
//                       First Name
//                     </label>
//                     <div className="relative w-full">
//                       <input
//                         value={firstName}
//                         onChange={(e) => {
//                           setFirstName(e.target.value);
//                         }}
//                         name="first-name"
//                         type="text"
//                         className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
//                         placeholder=""
//                       />
//                       <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
//                         <img
//                           src="/assets/images/inputIcon.png"
//                           alt="icon"
//                           className="w-5 h-5"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
//                       Last Name
//                     </label>
//                     <div className="relative w-full">
//                       <input
//                         value={lastName}
//                         onChange={(e) => {
//                           setLastName(e.target.value);
//                         }}
//                         name="last-name"
//                         type="text"
//                         className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
//                         placeholder="hello@example.com"
//                       />
//                       <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
//                         <img
//                           src="/assets/images/inputIcon.png"
//                           alt="icon"
//                           className="w-5 h-5"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
//                       Phone
//                     </label>
//                     <div className="relative w-full">
//                       <input
//                         value={phone}
//                         onChange={(e) => {
//                           setPhone(e.target.value);
//                         }}
//                         name="phone"
//                         type="text"
//                         className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
//                         placeholder="Phone Numbers"
//                       />
//                       <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
//                         <img
//                           src="/assets/images/inputIcon.png"
//                           alt="icon"
//                           className="w-5 h-5"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
//                       Password
//                     </label>
//                     <div className="relative w-full">
//                       <input
//                         value={password}
//                         onChange={(e) => {
//                           setPassword(e.target.value);
//                         }}
//                         name="password"
//                         type="password"
//                         className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
//                         placeholder="Password"
//                       />
//                       <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
//                         <img
//                           src="/assets/images/inputIcon.png"
//                           alt="icon"
//                           className="w-5 h-5"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
//                       Confirm Password
//                     </label>
//                     <div className="relative w-full">
//                       <input
//                         onChange={(e) => {
//                           setConfirmPassword(e.target.value);
//                         }}
//                         name="confirm password"
//                         type="password"
//                         className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
//                         placeholder="Comnfirm Password"
//                       />
//                       <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
//                         <img
//                           src="/assets/images/inputIcon.png"
//                           alt="icon"
//                           className="w-5 h-5"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center">
//                     <input
//                       id="remember-me"
//                       name="remember-me"
//                       type="checkbox"
//                       className="w-4 h-4 mt-2 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
//                     />
//                     <label
//                       htmlFor="remember-me"
//                       className="font-Poppins mt-2 font-[600] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.25px] text-[#777777] ml-3"
//                     >
//                       Remember my preference
//                     </label>
//                   </div>

//                   <div className="forgotpas">
//                     <div className="font-Poppins mt-2 font-[400] text-sm md:text-[15.38px] leading-[22.97px] text-[#3D4152]">
//                       Forgot Password?
//                     </div>
//                   </div>

//                   <div className="mt-8">
//                     <button
//                       type="submit"
//                       className="font-Poppins font-[500] w-full py-3 text-sm md:text-[17.5px] leading-[22px] md:leading-[26.25px] tracking-wider rounded-md text-white bg-[#CD2128] focus:outline-none"
//                     >
//                       Sign Me In
//                     </button>
//                   </div>

//                   <div className="socialsection">
//                     <div className="flex items-center justify-center mt-1 continueSection">
//                       <div className="w-1/4 border-b"></div>
//                       <div className="px-3 font-Poppins font-[400] text-sm md:text-[13.38px] leading-[22px] md:leading-[22.97px] text-[#777777]">
//                         Continue With
//                       </div>
//                       <div className="w-1/4 border-b"></div>
//                     </div>

//                     <div className="flex flex-wrap items-center justify-center gap-2 mt-3 mainContainer">
//                       <div className="flex gap-2 border rounded-[8.75px] py-3 px-5 items-center justify-center">
//                         <div className="img">
//                           <img
//                             className="w-4 md:w-5"
//                             src="/assets/images/facebook.png"
//                             alt=""
//                           />
//                         </div>
//                         <span className="font-Poppins font-[500] text-xs md:text-[12.5px] leading-[10px] md:leading-[10.25px] text-[#7E808C]">
//                           Facebook
//                         </span>
//                       </div>
//                       <div className="flex gap-2 border rounded-[8.75px] py-3 px-5 items-center justify-center">
//                         <div className="img">
//                           <img
//                             className="w-4 md:w-5"
//                             src="/assets/images/google.png"
//                             alt=""
//                           />
//                         </div>
//                         <span className="font-Poppins font-[500] text-xs md:text-[12.5px] leading-[10px] md:leading-[10.25px] text-[#7E808C]">
//                           Google
//                         </span>
//                       </div>
//                       <div className="flex gap-2 border rounded-[8.75px] py-3 px-5 items-center justify-center">
//                         <div className="img">
//                           <img
//                             className="w-4 md:w-5"
//                             src="/assets/images/linkedin.png"
//                             alt=""
//                           />
//                         </div>
//                         <span className="font-Poppins font-[500] text-xs md:text-[12.5px] leading-[10px] md:leading-[10.25px] text-[#7E808C]">
//                           LinkedIn
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <p className="mt-6 text-sm text-center text-[#777777]">
//                     Already have an account?{" "}
//                     <a
//                       href="javascript:void(0);"
//                       className="ml-1 font-semibold text-[#CD2128] hover:underline"
//                     >
//                       Login here
//                     </a>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// src/components/SignUp.js
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../../redux/authSlice"; // Import Redux actions

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("password_confirmation", confirmPassword);

    try {
      const response = await axios.post(
        "https://afrikanbbq.devssh.xyz/api/user/register",
        formData
      );

      // Dispatch Redux action to store the token and user info
      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      alert("Signup successful!");
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("Signup failed. Please try again.");
      dispatch(loginFailure(error.message)); // Store error in Redux state
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen loginContainer lg:flex-row">
      <div className="flex items-center justify-center xl:mt-[15%] hidde xl:block lg:block lg:mt-36 xl:w-[70%] image lg:w-[70%] md:hidden">
        <img
          src="/assets/images/signUpSecons.png"
          alt=""
          className="object-cover w-[65%] 2xl:w-[50%] xl:w-[70%] mx-auto"
        />
      </div>

      <div className="w-full px-3 xl:px-0 form lg:mt-12 md:mt-3 lg:w-1/2">
        <div className="flex flex-col justify-center signup sm:h-auto lg:h-screen">
          <div className="w-full max-w-md mx-auto border-gray-300 rounded-2xl">
            <div className="text-center">
              <a href="javascript:void(0)">
                <img
                  src="/assets/images/Afrikanbbq.png"
                  alt="logo"
                  className="inline-block lg:w-32 xl:mt-56 lg:mt-10"
                />
              </a>
            </div>

            <form onSubmit={handleSignUp}>
              <div>
                <h1 className="font-Poppins mt-10 font-extrabold text-[24px] md:text-[30.1px]">
                  SignUp
                </h1>

                {/* Error Message */}
                {errorMessage && (
                  <div className="mt-2 text-sm text-center text-red-500">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
                    Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="text"
                    className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
                    First Name
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name="first-name"
                    type="text"
                    className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
                  />
                </div>

                <div>
                  <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    name="last-name"
                    type="text"
                    className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
                  />
                </div>

                <div>
                  <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    type="text"
                    className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
                  />
                </div>

                <div>
                  <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
                  />
                </div>

                <div>
                  <label className="font-Poppins font-bold text-sm md:text-[15.38px] leading-[22.97px] mt-3 text-[#777777] mb-2 block">
                    Confirm Password
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirm-password"
                    type="password"
                    className="font-Poppins font-[400] text-sm md:text-[17.5px] leading-[22px] md:leading-[26.5px] text-[#6E6E6E] bg-white border border-gray-300 w-full px-4 py-3 rounded-[8.75px] outline-blue-500 pr-10"
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="font-Poppins font-[500] w-full py-3 text-sm md:text-[17.5px] leading-[22px] md:leading-[26.25px] tracking-wider rounded-md text-white bg-[#CD2128] focus:outline-none"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
