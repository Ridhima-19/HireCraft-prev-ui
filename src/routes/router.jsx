import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import PostJD from "../components/postjd/PostJD";
import Login from "../components/login/login";
import Register from "../components/register/register";
import OtpVerify from "../components/register/OtpVerify";


import CandidateList from "../pages/CandidateList";
import ViewApplications from "../pages/ViewApplications";

// Protected Route Component
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

export default function AppRouter() {
  
  return (
    <Routes>
      {/* Default → Login */}
      <Route path="/" element={<Navigate to="/register" replace />} />

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<OtpVerify />} />

      {/* Protected (dashboard layout) */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="flex bg-gray-100 min-h-screen overflow-hidden">
              

              {/* Main Content */}
              <div className="flex flex-col flex-1 overflow-y-auto">
                <Header />
                <div className="flex justify-center items-center flex-1 p-6">
                  <Routes>
                    <Route path="/PostJD" element={<PostJD />} />
                    <Route path="/candidates" element={<CandidateList />} />
                    <Route
                      path="/view-applications"
                      element={<ViewApplications />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
