import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1216px]">
      <div
        className="
          h-[52px] w-full rounded-[24px] bg-white 
          shadow-[0_0.6px_4px_rgba(0,0,0,0.2)]
          flex items-center justify-between px-6
        "
      >
        {/* Logo */}
        <div className="text-[20px] font-extrabold text-[#4880ff] font-['Nunito_Sans']">
          Hirecraft
        </div>

        {/* Links (desktop) */}
        <div className="hidden md:flex gap-[54px] text-[14px] text-black font-['Inter']">
          <a href="#process" className="hover:text-[#4880ff]">Our Process</a>
          <a href="#overview" className="hover:text-[#4880ff]">Overview</a>
          <a href="#pricing" className="hover:text-[#4880ff]">Pricing</a>
        </div>

        {/* Right side buttons (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/login"
            className="uppercase text-[14px] text-black font-bold font-['Inter'] hover:text-[#4880ff]"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="uppercase text-white bg-black rounded-[30px] px-5 py-2 text-[14px] font-bold font-['Inter'] hover:bg-gray-800 transition"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            mt-2 rounded-[24px] bg-white shadow-[0_0.6px_4px_rgba(0,0,0,0.2)]
            flex flex-col gap-4 px-6 py-4 font-['Inter'] text-[14px]
          "
        >
          <a href="#process" onClick={() => setOpen(false)}>Our Process</a>
          <a href="#overview" onClick={() => setOpen(false)}>Overview</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="/login" className="uppercase font-bold" onClick={() => setOpen(false)}>
            Sign In
          </a>
          <a
            href="/register"
            className="uppercase text-white bg-black rounded-full px-5 py-2 font-bold text-center hover:bg-gray-800 transition"
            onClick={() => setOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}