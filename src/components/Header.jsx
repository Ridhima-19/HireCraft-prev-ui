

import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      <div className="flex items-center space-x-4">
        { <button
          className="text-2xl text-[#0B1C3F] focus:outline-none"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          <FaBars />
        </button> }

        {/* <span className="text-2xl font-semibold text-[#0B1C3F]">
          Recruiter  Dashboard
        </span> */}

        <span className="text-2xl font-semibold text-[#0B1C3F]">
          Recruiter Dashboard
        </span>
      </div>

      <nav className="flex items-center space-x-6 text-sm font-medium text-gray-700">
        <Link to="/post-jd" className="hover:text-[#0B1C3F]">
          Upload JD
        </Link>
        <Link to="/select-candidates" className="hover:text-[#0B1C3F]">
          Select Candidate
        </Link>
        <Link to="/view-applications" className="hover:text-[#0B1C3F]">
          View Applications
        </Link>

        <FaUserCircle className="text-2xl text-[#0B1C3F]" />
      </nav>
    </header>
  );
}
