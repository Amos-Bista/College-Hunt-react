// src/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../../pages/home";
import StudentDashboard from "../../pages/studentDashboard";
import CollegeProfile from "../../pages/collegeProfile";
import Form from "../home/loginModal";
import Navbar from "./navbar";

function AppRouter() {
  return (
    <Router>
      <div>
       < Navbar/>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/collegeprofile" element={<CollegeProfile />} />
          <Route path="/signin" element={<Form />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default AppRouter;
