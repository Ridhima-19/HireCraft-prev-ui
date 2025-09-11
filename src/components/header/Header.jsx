import { useState, useRef, useEffect, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../global-state/userContext";
import { getProfile } from "./../../routes/api";
import UserDropdown from "./userDropDown";
import { ApiService } from "../../../util/apiService";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userContext = useContext(UserContext);
  const { state, dispatch } = userContext;
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

  const populateUserContext = ()=>{
    const token = localStorage.getItem("token");
    if (token) {
      getProfile().then((response) => {
        dispatch({
          type: "LOGIN_USER",
          payload: { user: response.data },
        });
      });
    }
  }

  const handleLogout = () => {
    const instance = ApiService.getInstance();
    instance.logout();
    navigate("/login");
    dispatch({type: "LOGOUT_USER"});
    setOpen(false);
  };

    useEffect(() => {
      populateUserContext();
  }, []);

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
        {!!state.user && <UserDropdown
         user={state.user} 
         open={open} 
         setOpen={setOpen}
         handleLogout={handleLogout}
          />}
      </div>
    </header>
  );
}
