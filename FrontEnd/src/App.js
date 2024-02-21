// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Otp from "./Pages/Otp";
import { SignupDataIdProvider } from "./Context/SignupData";

import { useState } from "react";
import { PrivateRoute } from "./Components/PrivateRoute";
function App() {
  const [isLoggedIn, setISLoggedIn] = useState(false);

  return (
    <SignupDataIdProvider>   
      <div>
        <div className="w-screen h-full flex flex-col">
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
              path="/otp"
              element={<Otp setISLoggedIn={setISLoggedIn} />}
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </SignupDataIdProvider>
  );
}

export default App;
