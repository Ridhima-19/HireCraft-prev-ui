import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDropdown({ user, open, setOpen, handleLogout}) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-52 bg-white border rounded-lg shadow-lg z-50"
    >
      {/* User info card */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {user?.username || "User Name"}
            </p>
            <p className="text-xs text-gray-500">
              {user?.email || "user@example.com"}
            </p>
          </div>
        </div>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
}
