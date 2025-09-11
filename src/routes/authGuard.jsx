import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./../components/global-state/userContext";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../components/layout/layout";

export const AuthGuard = () => {
  const { state } = useContext(UserContext);
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <AnimatePresence>
      {state.isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-gray-50 z-50"
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 text-lg font-medium">
              Loading, please wait...
            </p>
          </div>
        </motion.div>
      ) : (
        <Layout />
      )}
    </AnimatePresence>
  );
};
