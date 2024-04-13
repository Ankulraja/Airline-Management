import React, { useState } from "react";
import { CgArrowsExchange } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createFlightData,
  modifyFlightData,
  deleteFlightData,
} from "../../../../Service/Operation/Flight";

function AddFlight() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { oneFlightData } = useSelector((state) => state.flight);
  // console.log("DATA",oneFlightData);
  // console.log("DATA 2.................",oneFlightData.departureTime);

  const [formData, setFormData] = useState({
    flightFrom: `${oneFlightData?.flightFrom ?? ""}`,
    flightTo: `${oneFlightData?.flightTo ?? ""}`,
    flightName: `${oneFlightData?.flightName ?? ""}`,
    departureTime: oneFlightData?.departureTime
      ? oneFlightData?.departureTime.slice(0, -5)
      : "",
    arrivalTime: oneFlightData?.arrivalTime
      ? oneFlightData?.arrivalTime.slice(0, -5)
      : "",
    flightMode: `${oneFlightData?.flightMode ?? ""}`,
    businessFare: `${oneFlightData?.businessFare ?? ""}`,
    economicalFare: `${oneFlightData?.economicalFare ?? ""}`,
    premiumFare: `${oneFlightData?.premiumFare ?? ""}`,
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (oneFlightData) {
      const finalData = {
        ...formData,
        flightId: oneFlightData._id,
      };
      // console.log("form modify",finalData)
      dispatch(modifyFlightData(finalData, navigate));
    } else {
      dispatch(createFlightData(formData, navigate));
    }
  }

  const deleteHandler = () => {
    const flightId = oneFlightData._id;
    dispatch(deleteFlightData(flightId,navigate));
  };

  return (
    <div className="flex items-center justify-center bg-slate-200 w-full h-full">
      <div className="relative h-[500px]  min-w-[420px] bg-transparent bg-slate-300 rounded-3xl p-2 border border-gray-600 hover:border-black duration-200">
        <form className="" onSubmit={submitHandler}>
          <div className="flex justify-center ">
            <label className=" w-full flex flex-col items-start ml-3 mt-1">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-3">
                From<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="flightFrom"
                onChange={changeHandler}
                placeholder="From"
                value={formData.flightFrom}
                className="bg-gray-800 rounded-[0.5rem] ml-2 font-serif text-gray-50 p-[10px] w-[150px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
            <CgArrowsExchange className="text-[100px] mr-5" />
            <label className="w-full flex flex-col items-start  mt-1">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-3">
                To<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="flightTo"
                onChange={changeHandler}
                placeholder="To"
                value={formData.flightTo}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[150px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
          </div>

          {/* Flight Name */}
          <label className="ml-[15%] w-full flex flex-col items-start mx-auto -mt-3">
            <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-[25%] ">
              Flight Name<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="flightName"
              onChange={changeHandler}
              placeholder="Indigo"
              value={formData.flightName}
              className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[300px] h-10 border-b-2 border-b-blue-200"
            />
          </label>

          <div className="flex justify-center relative mt-4">
            <label className=" absolute left-2 flex flex-col items-start  mt-1">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-1">
                departure<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="datetime-local"
                name="departureTime"
                onChange={changeHandler}
                value={formData.departureTime}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[180px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
            <label className="absolute right-2  flex flex-col items-start mx-auto mt-1">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-1">
                arrival<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="datetime-local"
                name="arrivalTime"
                onChange={changeHandler}
                value={formData.arrivalTime}
                // value={"15 2024 13:30:00"}
                // value={"Mon Apr 15 2024 13:30:00 GMT+0530 (India Standard Time)"}
                // value={"2024-04-18T07:13"}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[180px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
          </div>
          {/* Flight Mode */}

          <label className="right-[29%] absolute top-[280px] flex flex-col items-start mx-auto -mt-2">
            <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-[30%]">
              Flight Mode<sup className="text-pink-500">*</sup>
            </p>
            <select
              required
              name="flightMode"
              onChange={changeHandler}
              value={formData.flightMode}
              className="bg-gray-800 rounded-[0.5rem] ml-2 font-serif text-gray-50 p-[10px] w-[180px] h-10 border-b-2 border-b-blue-200"
            >
              <option value="">Select Flight Mode</option>
              <option value="Non-Stop">Non-Stop</option>
              <option value="Connect">Connect</option>
            </select>
          </label>
          <div className="absolute bottom-16 flex -left-11 -mt-2">
            <label className="ml-[15%] w-full flex flex-col items-start mx-auto -mt-3">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-[25%] ">
                Economy<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="number"
                name="economicalFare"
                onChange={changeHandler}
                placeholder="10,000"
                value={formData.economicalFare}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[100px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
            <label className="ml-[15%] w-full flex flex-col items-start mx-auto -mt-3">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-[25%] ">
                Premium<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="number"
                name="premiumFare"
                onChange={changeHandler}
                placeholder="20,000"
                value={formData.premiumFare}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[100px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
            <label className="ml-[15%] w-full flex flex-col items-start mx-auto -mt-3">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-[25%] ">
                Business <sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="number"
                name="businessFare"
                onChange={changeHandler}
                placeholder="15,000"
                value={formData.businessFare}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[100px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
          </div>
          {/* Add other form fields similarly */}
          {oneFlightData ? (
            <div className="">
              <div
                onClick={deleteHandler}
                className="flex items-center absolute justify-center w-[150px]  left-[8%] bottom-2 rounded-2xl border-2 p-2 border-gray-600 hover:border-gray-950 duration-200 hover:bg-slate-400"
              >
                Delete
              </div>
              <button
                type="submit"
                className="flex items-center absolute justify-center w-[150px]  right-[8%] bottom-2 rounded-2xl border-2 p-2 border-gray-600 hover:border-gray-950 duration-200 hover:bg-slate-400"
              >
                Modify
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="flex items-center absolute justify-center w-[400px]  right-[8%] bottom-2 rounded-2xl border-2 p-2 border-gray-600 hover:border-gray-950 duration-200 hover:bg-slate-400"
            >
              Create
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddFlight;
