import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PostJD from "./components/PostJD";
import CandidateList from "./pages/CandidateList";
import ViewApplications from "./pages/ViewApplications"; 

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen overflow-hidden">
        {/* Sidebar */}
        { <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-0"
          } overflow-hidden`}
        >
          <Sidebar />
        </div> }

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* <Header setSidebarOpen={setSidebarOpen} /> */}
           <Header setSidebarOpen={setSidebarOpen} />

          <div className="flex justify-center items-center flex-1 p-6">
            <Routes>
              <Route path="/" element={<PostJD />} />
              <Route path="/post-jd" element={<PostJD />} />
              <Route path="/candidates" element={<CandidateList />} />
              <Route path="/view-applications" element={<ViewApplications />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;





