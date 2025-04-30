import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../assets/login.png";
import Logo from "../assets/logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isEmailActive = emailFocused || email !== "";
  const isPasswordActive = passwordFocused || password !== "";

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-3/4 flex flex-col px-6 sm:px-10 md:px-20 py-10">
        <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48  mb-8 self-start">
          <img src={Logo} alt="Main Logo" />
        </div>

        <div className="w-full flex flex-col justify-center lg:mt-30 mt-0">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] font-bold text-center mb-6">
            Log in to Encrypto Card
          </h1>

          {/* Email Input */}
          <div className="relative w-full flex items-center mb-6">
            <input
              autoComplete="false"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              placeholder="Email or phone"
              className="w-full indent-8 border-2 border-yellow-500 rounded-md px-3 py-3 text-black bg-transparent placeholder-transparent focus:outline-none"
            />
            <label
              className={`absolute left-10 px-1 bg-white transition-all duration-200 text-yellow-500 pointer-events-none ${
                isEmailActive ? "text-xs -top-2.5" : "text-base top-4"
              }`}
            >
              Email
            </label>
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Password Input */}
          <div className="relative w-full flex items-center mb-6">
            <input
              autoComplete="false"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              placeholder="Password"
              className="w-full indent-8 border-2 border-yellow-500 rounded-md px-3 py-3 text-black bg-transparent placeholder-transparent focus:outline-none"
            />
            <label
              className={`absolute left-10 top px-1 bg-white transition-all duration-200 text-yellow-500 pointer-events-none ${
                isPasswordActive ? "text-xs -top-2.5" : "text-base top-4"
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

          <div className="flex justify-center">
            <p className="text-center text-sm text-gray-800 font-semibold relative inline-block after:content-[''] after:block after:w-full after:h-[1px] after:bg-gradient-to-r after:from-yellow-400 after:to-transparent after:mt-1 mb-6 cursor-pointer">
              Forgot your password?
            </p>
          </div>

          <div className="flex justify-center items-center">
            <button className="w-[70%] sm:w-[60%] md:w-[50%] bg-black text-yellow-400 py-3 rounded-full font-semibold hover:bg-transparent hover:border-yellow-500 hover:border-2 hover:text-black cursor-pointer">
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (Hidden on small screens) */}
      <div className=" right-side relative w-full lg:w-[55%] xl:w-[38%] 2xl:w-[38%] h-[300px] lg:h-auto 2xl:h-[945px] xl:h-[785px]">
        <img
          src={login}
          alt="Login screen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full text-white p-6 text-center  bg-opacity-40">
          <h2 className="text-[40px] xl:text-[60px] 2xl:text-[75px] font-bold text-yellow-500 mb-4">
            Hello!
          </h2>
          <p className="mb-4 text-[18px] xl:text-[20px] 2xl:text-[25px] w-[90%]">
            Enter Your Details and Start Journey With Us?
          </p>
          <Link
            to="signup"
            className="mt-4 lg:mt-8 w-[60%] py-2 lg:py-3 rounded-full text-[16px] lg:text-[20px] font-semibold text-white border-yellow-500 border-2 hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
