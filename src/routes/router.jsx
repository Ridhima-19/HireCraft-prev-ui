import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import PostJD from "../components/postjd/PostJD";
import Login from "../components/login/login";
import Register from "../components/register/register";
import OtpVerify from "../components/register/OtpVerify";
import JobList from "../components/joblist/JobList";


import ViewApplications from "../pages/ViewApplications";
import CandidateTable from "../components/jd-report/candidateTable";

// Protected Route Component
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/jd-list" replace /> : children;
}

export default function AppRouter() {
  return (
    <Routes>
      {/* Default → Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/otp"
        element={
          <PublicRoute>
            <OtpVerify />
          </PublicRoute>
        }
      />

      {/* Protected (dashboard layout) */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="flex bg-gray-100 min-h-screen overflow-hidden">
              {/* Main Content */}
              <div className="flex flex-col flex-1 overflow-y-auto">
                <Header />
                  <Routes>
                    <Route path="/PostJD" element={<PostJD />} />
                    <Route path="/jd-list" element={<JobList />} />
                    <Route path="/jd-report" element={<CandidateTable />} />
                  </Routes>
                </div>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

