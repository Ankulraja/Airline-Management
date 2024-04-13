// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/Common.js/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Otp from "./Pages/Otp";
import { Toaster } from "react-hot-toast";
import { SignupDataIdProvider } from "./Context/SignupData";
import AdminDashboard from "./Components/Core/AdminDashboard/AdminDash";
import AddFlight from "./Components/Core/AdminDashboard/FlightDetail/AddFlight.js"
import { useState } from "react";
import { PrivateRoute } from "./Components/Core/Auth/PrivateRoute";
import Error from "./Components/Common.js/Error";
import UserDash from "./Components/Core/UserDashboard/UserDash";
import FlightData from "./Components/Core/AdminDashboard/FlightDetail/FlightData";
function App() {
  const [isLoggedIn, setISLoggedIn] = useState(false);

  return (
    <SignupDataIdProvider>
      <div>
        <div className="w-screen h-full flex flex-col">
          <Toaster></Toaster>
          <NavBar isLoggedIn={isLoggedIn} setISLoggedIn={setISLoggedIn} />

          <Routes>
            <Route path="/" element={<Home setISLoggedIn={setISLoggedIn} />} />
            <Route
              path="/login"
              element={<Login setISLoggedIn={setISLoggedIn} />}
            />
            <Route
              path="/about"
              element={<About setISLoggedIn={setISLoggedIn} />}
            />
            <Route
              path="/signup"
              element={<Signup setISLoggedIn={setISLoggedIn} />}
            />
            <Route
              path="/verify-email"
              element={<Otp setISLoggedIn={setISLoggedIn} />}
            />

            <Route
              path="/dashboard"
              element={
                // <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
                // {/* </PrivateRoute> */}
              }
            />

            <Route
              // path="/admin-dashboard"
              element={
                // <PrivateRoute isLoggedIn={isLoggedIn}>
                <AdminDashboard></AdminDashboard>
                // </PrivateRoute>
              }
            >
              <Route
                path="/dashboard/admin/flight-data"
                element={<FlightData></FlightData>}
              ></Route>
              <Route
                path="/dashboard/admin/create-flight"
                element={<AddFlight></AddFlight>}
              ></Route>
            </Route>

            {/* <Route
              path="/user-dashboard"
              element={
                // <PrivateRoute isLoggedIn={isLoggedIn}>
                  <UserDash></UserDash>
                // </PrivateRoute>
              }
            />        */}
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
        </div>
      </div>
    </SignupDataIdProvider>
  );
}

export default App;
