import React from "react";
import Slider from "../Components/Common/Slider";
import Footer from "../Components/Common/Footer";
import DashboardSlider from "../Components/Common/DashboardSlider";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFlightData } from "../Service/Operation/Flight";

const Dashboard = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [formData, setFormdata]=useState({
      flightFrom:"",flightTo:"",date:""
  });

 async function submitHandler(event) {
  event.preventDefault();
  console.log(formData); 
  dispatch(searchFlightData(formData,navigate));
}
    
    function changeHandler(event) {
    setFormdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  
  return (
    <div className="bg-gradient-to-b relative from-gray-300  to-blue-600 flex flex-col items-center  text-black font-serif pt-20">
    <div className="w-full h-[45vh] border-solid flex align-center justify-between  ">
      
      <div className="px-6 z-10 h-[300px] absolute top-[15%] left-[5%]  rounded-lg bg-gray-600 flex flex-col items-center">
        
        <form className=" mx-auto w-[97%] h-full  mt-1 flex flex-col gap-10  items-center justify-center"
        onSubmit={submitHandler}>
          <input
            className=" h-12 rounded-md w-[300px] border-solid border-2 border-grey-900 pl-2"
            required
            type="text"
            onChange={changeHandler}
            placeholder="From"
            value={formData.flightFrom}
            name="flightFrom"
          ></input>
          
          <input
            className=" h-12  text-gray-400 rounded-md w-[300px] border-solid border-2 border-grey-900 px-2"
            required
            onChange={changeHandler}
            type="date"
            value={formData.date}
            name="date"
          ></input>
        </form>
      </div>
      <div className="w-[30%] z-10 h-[300px] absolute top-[10%] left-[35%] rounded-lg flex flex-col items-center gap-[2px]">
      <h4 className=" text-4xl font-bold my-5 w-full text-center py-2 text-white bg-red-600 rounded-md border-2 border-gray-900">Book Your Trip</h4>
        <img alt="loading....." src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1712861660/UploadOnly/single-line-drawing-of-paper-plane-removebg-preview_fwgihw.png"
        className="w-[450px]"></img>
        
      </div>

      <div className="px-6 z-10 h-[300px] absolute top-[15%] right-[5%] rounded-lg bg-gray-600  flex flex-col items-center justify-center gap-10">
      <form className=" flex flex-col items-center justify-center"
      onSubmit={submitHandler}>
              <input
              required
            className=" h-12 rounded-md w-[300px] border-solid border-2 border-grey-900 px-2"
            type="text"
            onChange={changeHandler}
            placeholder="To"
            value={formData.flightTo}
            name="flightTo"
          ></input>
          <button className="bg-blue-600 w-[300px] font-serif py-3 px-9 mt-7 text-white rounded-md border hover:bg-blue-900 transition-all duration-200">
            Search Flight
          </button>
          </form>
      </div>
      </div>

{/* 2nd part */}
    <div className='flex justify-center items-center text-black text-4xl mt-[10%] w-full pr-10 font-serif border-b-2 rounded-lg'>
    Welcome To <span className="w-12 h-12 mx-3 r-50% "> < img src="https://res.cloudinary.com/dppgyjdcg/image/upload/v1712938967/priyanshu/Logo_llkrfe-removebg_d0zll7.png"/> </span> Airline Dashboard
    </div>
      <div className="w-full mt-[5%]  h-[45vh] border-solid ">
        <DashboardSlider></DashboardSlider>
      </div>

      
      {/* Footer */}
      <div className="w-full h-[50px] mt-[14%]">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Dashboard;