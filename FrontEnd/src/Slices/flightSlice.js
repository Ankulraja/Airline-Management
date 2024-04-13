import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oneFlightData: localStorage.getItem("oneFlightData")
  ? JSON.parse(localStorage.getItem("oneFlightData"))
  : null,
  allFlightData: localStorage.getItem("allFlightData")
    ? JSON.parse(localStorage.getItem("allFlightData"))
    : null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlightData(state, value) {
      state.allFlightData = value.payload;
    },
    setOneFlightData(state, value) {
      state.oneFlightData = value.payload;
    },
    
    
  },
});
export const { setFlightData,setOneFlightData} = flightSlice.actions;
export default flightSlice.reducer;
