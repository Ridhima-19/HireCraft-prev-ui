import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ApiService } from "../../../util/apiService";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    const instance = ApiService.getInstance();
    instance.logout();
    navigate("/login");
    setOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-semibold text-[#0B1C3F]">HireCraft</span>
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
          to="/jd-list"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-[#0B1C3F]"
          }
        >
          List JD
        </NavLink>
      </nav>

      {/* Profile dropdown */}
      <div className="relative" ref={dropdownRef}>
        <FaUserCircle
          className="text-2xl text-[#0B1C3F] cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
