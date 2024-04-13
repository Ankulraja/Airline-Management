import authReducer from "../Slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../Slices/profile";
import cartReducer from "../Slices/cartSlice";
import flightReducer  from "../Slices/flightSlice"
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  cart: cartReducer,
  flight: flightReducer
});

export default rootReducer;
