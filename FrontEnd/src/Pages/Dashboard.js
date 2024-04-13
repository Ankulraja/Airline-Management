import React, { useState } from "react";
import { TbArrowsExchange } from "react-icons/tb";
import Slider from "../Components/Common.js/Slider";
import Footer from "../Components/Common.js/Footer";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import DashboardSlider from "../Components/Core/Dashboard/DashboardSlider";
const Dashboard = () => {
  const [formData, setFormData] = useState({
    flightFrom: "",
    flightTo: "",
    date: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("FormData", formData);
  };
  const changeHandler = (event) => {
    setFormData((old) => {
      return {
        ...old,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className="bg-gradient-to-b relative from-gray-300  to-blue-600 flex flex-col items-center  text-black font-serif pt-20">
      <div className="w-full  h-[45vh] border-solid ">
        <DashboardSlider></DashboardSlider>
      </div>
      <div className=" z-10 py-10 absolute top-[23%] left-[3%]  rounded-lg bg-white flex flex-col items-center">
        <h4 className="text-4xl font-bold mb-8 w-full text-center py-2 text-white bg-red-600">
          Book Your Trip
        </h4>

        {/* Form  */}
        <form
          onSubmit={submitHandler}
          className=" mx-10 h-full  mt-1  flex flex-col gap-3  items-center "
        >
          <input
            className=" h-12 rounded-md w-[300px] border-solid border-2 border-grey-900 pl-2"
            type="text"
            required
            placeholder="From"
            name="flightFrom"
            value={formData.flightFrom}
            onChange={changeHandler}
          ></input>

          <div className="text-2xl">
            <CgArrowsExchangeAltV />
          </div>

          <input
            className=" h-12 rounded-md w-[300px] border-solid border-2 border-grey-900 px-2"
            type="text"
            name="flightTo"
            required
            value={formData.flightTo}
            placeholder="To"
            onChange={changeHandler}
          ></input>

          <input
            className=" h-12  text-gray-400 rounded-md w-[300px] border-solid border-2 border-grey-900 px-2"
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={changeHandler}
          ></input>
          <button
            type="submit"
            className="bg-blue-900 font-serif py-3 px-9 mt-7 text-white rounded-md"
          >
            Search Flight
          </button>
        </form>
      </div>

      {/* Welcome Card */}
      <div className="flex justify-end items-end text-black text-4xl mt-[18%] w-full pr-10 font-serif">
        Welcome To{" "}
        <span className="w-12 h-12 mx-3  ">
          {" "}
          <img alt="loading..." src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1708422225/samples/Logo_llkrfe.png" />{" "}
        </span>{" "}
        Airline Dashboard
      </div>
      <div className="w-11/12 mx-auto mt-20 border-solid text-gray-200 ">
        <h2 className="font-bold text-3xl p-5">Offers</h2>
        <div className="w-[90%] h-[200px] flex  gap-10 ">
          {/* Card-1 */}
          <div
            className="w-[250px] h-[160px] rounded-md flex flex-col gap-2 border border-gray-500 px-1 py-1 "
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/green-paint-wall-background-texture_53876-23269.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708333200&semt=ais)",
            }}
          >
            <h2 className="text-xl font-bold ">Get Upto 10% Off</h2>
            <p className="">From APPS website bookings</p>
            <p className="bg-white py-1 text-blue-800 px-1 rounded-lg w-[80px] text-black text-[10px]">
              App With Benifit
            </p>
            <div className="flex justify-between">
              <p>No expiry</p>
              <p className="text-[10px]">T&C apply*</p>
            </div>
          </div>

          {/* Card-2 */}
          <div
            className="w-[250px] h-[160px] rounded-md flex flex-col gap-2 border text-gray-700 border-gray-500 px-1 py-1 "
            style={{
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/227/64/929/light-line-color-wallpaper-preview.jpg)",
            }}
          >
            <h2 className="text-xl font-bold ">Get flat INR 400*</h2>
            <p className="">Cashback or upto 10% Cashback</p>
            <p className="bg-white py-1 text-blue-800 px-1 rounded-lg w-[80px] text-black text-[10px]">
              Mobiki
            </p>
            <div className="flex justify-between">
              <p>No expiry</p>
              <p className="text-[10px]">T&C apply*</p>
            </div>
          </div>

          {/* Card-3 */}
          <div
            className="w-[250px] h-[160px] rounded-md  text-gray-700 flex flex-col gap-2 border border-gray-500 px-1 py-1 "
            style={{
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/338/138/476/background-spot-light-surface-wallpaper-preview.jpg)",
            }}
          >
            <h2 className="text-xl font-bold ">Get Upto 10% Off</h2>
            <p className="">From APPS website bookings</p>
            <p className="bg-white py-1 text-blue-800 px-1 rounded-lg w-[80px] text-black text-[10px]">
              App With Benifit
            </p>
            <div className="flex justify-between">
              <p>No expiry</p>
              <p className="text-[10px]">T&C apply*</p>
            </div>
          </div>

          {/* Card-4 */}
          <div
            className="w-[250px] h-[160px] rounded-md flex flex-col gap-2 border border-gray-500 px-1 py-1 "
            style={{
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/278/71/807/texture-pattern-background-light-wallpaper-thumb.jpg)",
            }}
          >
            <h2 className="text-xl font-bold ">Get Upto 10% Off</h2>
            <p className="">From APPS website bookings</p>
            <p className="bg-white py-1 text-blue-800 px-1 rounded-lg w-[80px] text-black text-[10px]">
              App With Benifit
            </p>
            <div className="flex justify-between">
              <p>No expiry</p>
              <p className="text-[10px]">T&C apply*</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] h-[120px] my-12">
        <img
        alt="loading..."
          className="w-full h-full"
          src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1708369158/samples/Screenshot_2024-02-20_at_12.28.54_AM_dcghq7.png"
        ></img>
      </div>
      {/* Footer */}
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Dashboard;
