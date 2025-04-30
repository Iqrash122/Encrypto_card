import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../assets/signup.png";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const isEmailActive = emailFocused || email !== "";
  const isPasswordActive = passwordFocused || password !== "";
  const [name, setName] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const isNameActive = nameFocused || name !== "";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side Image & Text */}
      <div className="right-side relative w-full lg:w-[38%] h-[300px] lg:h-auto 2xl:h-[945px] xl:h-[785px] ">
        <img
          src={login}
          alt="Signup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center  bg-opacity-40">
          <h2 className="text-[40px] lg:text-[40px] font-bold text-yellow-500 mb-2 lg:mb-4">
            Welcome!
          </h2>
          <p className="text-[18px] lg:text-[18px] max-w-[440px]">
            To keep connected with us, please login with your info
          </p>
          <Link
            to="/"
            className="mt-4 lg:mt-8 w-[60%] py-2 lg:py-2 xl:py-3 2xl:py-3 rounded-full text-[16px] lg:text-[15px] font-semibold text-white border-yellow-500 border-2 hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-[55%] flex justify-center items-center px-4 py-8 lg:px-28">
        <div className="w-full ">
          <h1 className="text-[28px] lg:text-[38px] font-bold text-center mb-6">
            Create Account
          </h1>

          {/* Name Input */}
          <div className="relative mb-6">
            <input
              autoComplete="off"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              placeholder="Name"
              className="w-full pl-10 pr-4 py-3 border-2 border-yellow-500 rounded-md text-black bg-transparent placeholder-transparent focus:outline-none"
            />
            <label
              className={`absolute left-10 px-1 bg-white transition-all duration-200 text-yellow-500 pointer-events-none ${
                isNameActive ? "text-xs -top-2.5" : "text-base top-3"
              }`}
            >
              Name
            </label>
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Email Input */}
          <div className="relative mb-6">
            <input
              autoComplete="off"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              placeholder="Email or phone"
              className="w-full pl-10 pr-4 py-3 border-2 border-yellow-500 rounded-md text-black bg-transparent placeholder-transparent focus:outline-none"
            />
            <label
              className={`absolute left-10 px-1 bg-white transition-all duration-200 text-yellow-500 pointer-events-none ${
                isEmailActive ? "text-xs -top-2.5" : "text-base top-3"
              }`}
            >
              Email
            </label>
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <input
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-3 border-2 border-yellow-500 rounded-md text-black bg-transparent placeholder-transparent focus:outline-none"
            />
            <label
              className={`absolute left-10 px-1 bg-white transition-all duration-200 text-yellow-500 pointer-events-none ${
                isPasswordActive ? "text-xs -top-2.5" : "text-base top-3"
              }`}
            >
              Password
            </label>
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(true)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="w-[60%] bg-black text-yellow-400 py-3 rounded-full font-semibold border-2 border-transparent hover:bg-transparent hover:border-yellow-500 hover:text-black transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
