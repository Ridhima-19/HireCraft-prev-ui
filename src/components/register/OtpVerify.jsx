

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function OtpVerify({ email, onBack }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [counter, setCounter] = useState(30);
  const [isDisabled, setIsDisabled] = useState(true);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
    }
  }, [counter]);

  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp === "123456") {
      toast.success("OTP Verified");
      localStorage.setItem("token", "dummyToken");

      setTimeout(() => {
        navigate("/PostJD");
      }, 1500);
    } else {
      toast.error("Invalid OTP!");
    }
  };

  const handleResend = () => {
    setCounter(30);
    setIsDisabled(true);
    setOtp(["", "", "", "", "", ""]);
    toast("OTP resent to your email");
    inputsRef.current[0].focus();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 ring-1 ring-gray-100 p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Verify Your Email</h2>
        <p className="text-center text-gray-600 mb-6">Enter the 6-digit code sent to your email</p>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-center space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Verify OTP
          </button>
        </form>

        <div className="flex justify-between items-center mt-4 text-sm">
          {isDisabled ? (
            <span className="text-gray-600">Resend OTP in {counter}s</span>
          ) : (
            <button
              onClick={handleResend}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Resend OTP
            </button>
          )}

          <button onClick={onBack} className="text-gray-600 hover:text-gray-800">
            Edit Email/Password
          </button>
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}