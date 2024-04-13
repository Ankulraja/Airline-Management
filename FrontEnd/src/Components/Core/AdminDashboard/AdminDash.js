import { useEffect, useState } from "react";
import { PiArrowsLeftRightThin } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import { useLocation,matchPath } from "react-router-dom";
import {useDispatch} from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import {setOneFlightData} from "../../../Slices/flightSlice"
const AdminDash = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [referesh,setRefersh] = useState(true);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
  });
  const changeHandler = (event) => {
    setFormData((old) => ({
      ...old,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submit", formData);
  };
  const backHandler =()=>{
    setRefersh(!referesh)
    localStorage.removeItem("oneFlightData");
    dispatch(setOneFlightData(null))

  }
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  useEffect(()=>{

  },[referesh])

  return (
    <div className="w-screen min-h-screen bg-slate-200 pt-8 border border-blu-500">
      <div className="w-10/12 mx-auto py-16 relative">
        <form
          onSubmit={submitHandler}
          className="w-8/12 relative mx-auto flex flex-row justify-between items-center"
        >
          <input
            onChange={changeHandler}
            placeholder="From"
            name="from"
            value={formData.from}
            className="h-10 shadow shadow-fuchsia-200 text-xl font-bold rounded-lg px-3 w-40 file:"
          ></input>
          <div className="w-1/2 flex justify-center items-center text-5xl">
            <PiArrowsLeftRightThin></PiArrowsLeftRightThin>
          </div>
          <input
            onChange={changeHandler}
            placeholder="TO"
            name="to"
            value={formData.to}
            className="h-10 shadow shadow-fuchsia-200 text-xl font-bold rounded-lg px-3 w-40 file:"
          ></input>
          <button
            type="submit"
            className="absolute right-[45%] top-[100%] ml-10 py-3 px-4 bg-yellow-300 text-black rounded-lg font-bold"
          >
            Submit
          </button>
        </form>
        <Link to={"/dashboard/admin/create-flight"}>
          <button onClick={backHandler} className="absolute right-0 ml-10 py-3 px-4 bg-blue-900 text-white rounded-lg font-bold  hover:bg-blue-600 hover:border-blue-800 active:scale-95">
            Add Flight
          </button>
        </Link>
        <Link to={"/dashboard/admin/flight-data"}>
          <button onClick={backHandler} className={`${matchRoute("/dashboard/admin/create-flight") ? ("font-bold flex justify-center items-center gap-2"):("invisible")} `}>
            <FaArrowLeftLong></FaArrowLeftLong> Back
          </button>
        </Link>
      </div>
      <div className="w-full h-[570px] bg-slate-200  pt-10 mx-auto overflow-y-scroll">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default AdminDash;
