import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-semibold text-[#0B1C3F]">
          HireCraft
        </span>
      </div>

      
      <nav className="flex-1 flex justify-center space-x-8 text-sm font-medium text-gray-700">
        <NavLink
          to="/PostJD"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-[#0B1C3F]"
          }
        >
          Upload JD
        </NavLink>

        <NavLink
          to="/select-candidates"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-[#0B1C3F]"
          }
        >
          Select Candidate
        </NavLink>

        <NavLink
          to="/view-applications"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-[#0B1C3F]"
          }
        >
          View Applications
        </NavLink>
      </nav>

      
      <div className="flex items-center">
        <FaUserCircle className="text-2xl text-[#0B1C3F] cursor-pointer" />
      </div>
    </header>
  );
}
