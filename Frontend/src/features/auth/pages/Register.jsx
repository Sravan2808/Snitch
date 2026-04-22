import React, { useState } from "react";
import fashionImage from "../../../assets/fashion_editorial_dark.png";
import { useAuth } from "../hook/useAuth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    password: "",
    isSeller: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({
      email: formData.email,
      password: formData.password,
      contact: formData.contactNumber,
      fullName: formData.fullName,
      isSeller: formData.isSeller,
    });
    navigate("/")
  };

  return (
    <div className="min-h-dvh lg:h-dvh bg-[#161308] text-[#eae2cf] font-sans selection:bg-[#FFD700] selection:text-[#161308] flex flex-col lg:flex-row overflow-x-hidden lg:overflow-y-hidden">
      {/* Left Column: Brand / Editorial Space (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#110e05] overflow-hidden items-center justify-center border-r border-[#1f1b10]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity grayscale-50"
          style={{ backgroundImage: `url(${fashionImage})` }}
        ></div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent via-[#110e05]/80 to-[#110e05]"></div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#FFD700] opacity-[0.05] blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#FFD700] opacity-[0.04] blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-2xl px-16 xl:px-24">
          <div className="mb-12 transform hover:scale-105 transition-transform duration-500 origin-left">
            <h1 className="text-5xl xl:text-7xl font-light tracking-tighter mb-4 text-white drop-shadow-lg">
              SNITCH
            </h1>
            <div className="w-16 h-[2px] bg-linear-to-r from-[#ffe16d] to-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
          </div>
          <p className="text-2xl xl:text-3xl font-light text-[#d0c6ab] leading-snug tracking-tight drop-shadow-md">
            Curated fashion.
            <br />
            <span className="text-white font-normal">Redefined elegance.</span>
          </p>
          <div className="mt-16 flex items-center gap-6 group cursor-pointer w-max">
            <div className="w-12 h-12 rounded-full border border-[#4d4732] group-hover:border-[#FFD700] flex items-center justify-center text-[#999077] group-hover:text-[#FFD700] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]">
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
            <span className="text-sm uppercase tracking-widest text-[#999077] group-hover:text-[#eae2cf] transition-colors duration-300">
              Join the void
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Registration Form */}
      <div className="w-full lg:w-1/2 min-h-dvh lg:h-dvh flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-4 xl:px-10 relative">
        {/* Mobile-only background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#FFD700] opacity-[0.03] blur-[100px] rounded-full pointer-events-none lg:hidden"></div>

        <div className="w-full max-w-md xl:max-w-lg bg-[#1f1b10]/95 backdrop-blur-xl p-5 sm:p-8 md:p-10 lg:p-7 xl:p-8 rounded-2xl sm:rounded-3xl lg:rounded-3xl shadow-2xl lg:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#2a2516] relative overflow-hidden z-10">
          <div className="relative z-10">
            <div className="mb-6 sm:mb-8 lg:hidden">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#999077]">
                Snitch
              </p>
              <div className="mt-2 h-px w-16 bg-linear-to-r from-[#ffe16d] to-[#FFD700]"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-light mb-2 tracking-tight leading-tight">
              Create an{" "}
              <span className="text-[#FFD700] font-medium">Account</span>
            </h2>
            <p className="text-[#d0c6ab] mb-6 sm:mb-8 lg:mb-6 text-xs sm:text-sm tracking-wide">
              Enter your details to join Snitch.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 lg:space-y-4 xl:space-y-5"
            >
              {/* Full Name */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-[#999077] mb-2 sm:mb-3 group-focus-within:text-[#FFD700] transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#110e05] border-b border-[#4d4732] focus:border-[#FFD700] px-3 py-3 sm:px-4 sm:py-4 lg:py-2.5 text-sm sm:text-base lg:text-base xl:text-lg text-[#eae2cf] placeholder-[#393528] outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-[#999077] mb-2 sm:mb-3 group-focus-within:text-[#FFD700] transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-[#110e05] border-b border-[#4d4732] focus:border-[#FFD700] px-3 py-3 sm:px-4 sm:py-4 lg:py-2.5 text-sm sm:text-base lg:text-base xl:text-lg text-[#eae2cf] placeholder-[#393528] outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-[#999077] mb-2 sm:mb-3 group-focus-within:text-[#FFD700] transition-colors">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#110e05] border-b border-[#4d4732] focus:border-[#FFD700] px-3 py-3 sm:px-4 sm:py-4 lg:py-2.5 text-sm sm:text-base lg:text-base xl:text-lg text-[#eae2cf] placeholder-[#393528] outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Password */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-[#999077] mb-2 sm:mb-3 group-focus-within:text-[#FFD700] transition-colors">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-[#110e05] border-b border-[#4d4732] focus:border-[#FFD700] px-3 py-3 sm:px-4 sm:py-4 lg:py-2.5 text-sm sm:text-base lg:text-base xl:text-lg text-[#eae2cf] placeholder-[#393528] outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Is Seller Checkbox */}
              <div className="pt-1 sm:pt-2 lg:pt-1">
                <label className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group w-max">
                  <div className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
                    <input
                      type="checkbox"
                      name="isSeller"
                      checked={formData.isSeller}
                      onChange={handleChange}
                      className="peer appearance-none w-5 h-5 sm:w-6 sm:h-6 border border-[#4d4732] bg-[#110e05] checked:bg-[#FFD700] checked:border-[#FFD700] rounded sm:rounded-md transition-all duration-300 cursor-pointer"
                    />
                    <svg
                      className="absolute w-3 h-3 sm:w-4 sm:h-4 text-[#221b00] opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm tracking-wide text-[#d0c6ab] group-hover:text-[#eae2cf] transition-colors">
                    Register as a Seller
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4 lg:pt-2">
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-[#ffe16d] to-[#FFD700] text-[#221b00] font-bold py-3 sm:py-4 lg:py-3 rounded-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.2em] text-[11px] sm:text-sm"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="mt-5 sm:mt-7 lg:mt-5 text-center">
              <p className="text-xs sm:text-sm text-[#999077]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#FFD700] hover:underline underline-offset-4 tracking-wide"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
