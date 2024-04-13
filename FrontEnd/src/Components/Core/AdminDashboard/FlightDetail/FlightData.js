import FlightCard from "./FlightCard";
import { useDispatch ,useSelector} from "react-redux";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import {getAllFlightData} from "../../../../Service/Operation/Flight"
const FlightData = () => {
  const dispatch = useDispatch();
  const {allFlightData} = useSelector((state)=> state.flight)
  // console.log("AllFlight Data", allFlightData)
  const getAllFlight = async () => {
    try {
      dispatch(getAllFlightData());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(()=>{
    getAllFlight();
  },[])
  
  // const flightDataInfo = [
  //   {
  //     from: "Delhi",
  //     to: "Mumbai",
  //     departureTime: "4:12",
  //     arrivalTime: "11:20",
  //     flightName: "Boing7782ac",
  //     mode: "Non-stop",
  //     economicalFare: "5,300",
  //     primiumFare: "7,400",
  //     businessFare: "9,700",
  //   },
  //   {
  //     from: "Delhi",
  //     to: "Mumbai",
  //     departureTime: "4:12",
  //     arrivalTime: "11:20",
  //     flightName: "Boing7782ac",
  //     mode: "Non-stop",
  //     economicalFare: "5,300",
  //     primiumFare: "7,400",
  //     businessFare: "9,700",
  //   },
  // ];

  return (
    <div className="w-full px-4  ">
      {allFlightData?.map((value, index) => {
        return <FlightCard data={value} key={index}></FlightCard>;
      })}
    </div>
  );
};
export default FlightData;
