import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/header/Header";
import PostJD from "../components/postjd/PostJD";
import Login from "../components/login/login";
import Register from "../components/register/register";
import OtpVerify from "../components/register/OtpVerify";
import JobList from "../components/joblist/JobList";
import CandidateTable from "../components/jd-report/candidateTable";

import { AuthGuard } from "./authGuard"; // adjust path

// Public route wrapper
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

      {/* Protected Routes (wrapped in AuthGuard) */}
      <Route element={<AuthGuard />}>
        {/* Nested protected routes */}
        <Route path="/PostJD" element={<PostJD />} />
        <Route path="/jd-list" element={<JobList />} />
        <Route path="/jd-report" element={<CandidateTable />} />
      </Route>
    </Routes>
  );
}
