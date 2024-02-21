import React from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-hot-toast";
import { navigate, useNavigate } from "react-router-dom";

const Otp = ({ setISLoggedIn }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  function submitHandler() {
    console.log("hey");
    setISLoggedIn(true);
    toast.success("Your account is created");
    navigate("/dashboard");
  }

  return (
    <div>
      <div
        className=" text-white flex justify-center items-center w-[100vw] h-[100vh] "
        style={{
          backgroundImage: 'url("https://wallpaperaccess.com/full/254381.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="absolute h-[220px] flex flex-col items-center  gap-6  bg-gray-500 border bg-opacity-40 border-black p-10 rounded-md right-[400px] top-[200px]">
          <h1 className="text-4xl text-black font-serif">Enter Your OTP</h1>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input {...props} className="text-4xl rounded-sm text-black" />
            )}
          />
          <button
            onClick={submitHandler}
            className="absolute bottom-1 left-2 border border-black bg-orange-500 p-2 rounded text-black text-[1.5xl] font-bold font-sans hover:text-white transition-all duration-200"
          >
            Submit
          </button>
          <div className="absolute bottom-1 right-2 text-blue-800 font-sans font-semibold hover:underline cursor-pointer">
            Resend OTP
          </div>
        </div>
      </div>
    </div>
  );
};
export default Otp;
