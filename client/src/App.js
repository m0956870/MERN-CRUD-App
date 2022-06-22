import "./App.css";
import React, { createContext, useReducer } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

import AllData from "./pages/AllData";

import Signup from "./pages/basic/Signup";
import Login from "./pages/basic/Login";
import Logout from "./pages/basic/Logout";
import Errorpage from "./pages/basic/Errorpage";

import ForgetPassword from "./pages/basic/ForgetPassword";
import ResetPassword from "./pages/basic/ResetPassword";


import { reducer, initialState } from "./reducer/UserReducer";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:route" element={<Profile />} />

            <Route path="/alldata" element={<AllData />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Errorpage />} />

            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
