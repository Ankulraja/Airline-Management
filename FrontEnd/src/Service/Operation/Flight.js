import { toast } from "react-hot-toast";
import { setAllFlightData } from "../../Slices/flightSlice";
import { apiConnector } from "../apiConnector";
import { FlightEndpoint } from "../apis";
import { setFlightData } from "../../Slices/flightSlice";

const {
  GET_ALL_FLIGHT_DATA,
  CREATE_FLIGHT_DATA,
  MODIFY_FLIGHT_DATA,
  DELETE_FLIGHT_DATA,
} = FlightEndpoint;

export function createFlightData(formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Creating New Flight Route");
    try {
      const result = await apiConnector("POST", CREATE_FLIGHT_DATA, formData);
      // console.log("Response while creating flight.......", result.data);
      toast.dismiss(toastId);
      navigate("/dashboard/admin/flight-data");
    } catch (e) {
      toast.dismiss(toastId);
      console.log("error while creating flight", e);
    }
  };
}

export function getAllFlightData() {
  return async (dispatch) => {
    try {
      const toastId = toast.loading("Fetching Data...");
      //   console.log("Fetching All Flight Data");
      const result = await apiConnector("GET", GET_ALL_FLIGHT_DATA);
      //   console.log("Response of all Flight Data", result.data);
      if (!result.data?.success) {
        throw new Error(result.data?.message);
      }
      dispatch(setFlightData(result.data.response));
      localStorage.setItem(
        "allFlightData",
        JSON.stringify(result.data.response)
      );
      toast.dismiss(toastId);
    } catch (e) {
      console.log("Error while fetching the Data", e);
    }
  };
}

export function modifyFlightData(formData, navigate) {
  return async (dispathc) => {
    const toastId = toast.loading("Data Modification on the process...");
    try {
      const result = await apiConnector("POST", MODIFY_FLIGHT_DATA, formData);
      //  console.log("Response after ModifyFlightData...........", result);
      localStorage.removeItem("oneFlightData");
      toast.dismiss(toastId);
      toast.success("Modified Successfully")
      navigate("/dashboard/admin/flight-data");
    } catch (e) {
      console.log("Error while ModifyingFlightData", e);
      toast.dismiss(toastId);
    }
  };
}

export function deleteFlightData( flightId, navigate ) {
  return async (dispatch) => {
    const toastId = toast.loading("Data Modification on the process...");
    try {
      const result = await apiConnector("POST", DELETE_FLIGHT_DATA, {flightId});
      console.log("Response while deletingflight....", result.data);
      toast.dismiss(toastId);
      toast.success("Deleted Successfully")
      navigate("/dashboard/admin/flight-data");
    } catch (e) {
      console.log("Error while deleting the flight", e);
      toast.dismiss(toastId);
    }
  };
}
