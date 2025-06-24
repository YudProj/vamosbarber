import { AiFillBell } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";
import ListNavbar from "./ListNavbar";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-black sticky top-0 z-50">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
        <img
          src="/img/logo.png" // ganti path sesuai file logo kamu
          alt="Logo Vamos"
          className="w-10 h-10"
        />
        <h2 className="text-[22px] font-bold text-white">
          Vamos Barbershop
        </h2>
      </div>

      <ListNavbar />


      <div className="flex items-center space-x-6">
        {/* Tombol Booking */}

        <button
          onClick={() => navigate("/booking")}
          className="bg-white text-white px-4 py-2 rounded-full hover:bg-white transition">
          Booking
        </button>

        {/* Notifikasi */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <AiFillBell />
            <i className=" text-white text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full px-1.5">
              3
            </span>
          </div>

          {/* Settings */}
          <i className="fas fa-cog text-white text-lg"></i>

          {/* Hello & Avatar */}
          <div className="flex items-center gap-2 border-l pl-4">
            <span className="text-sm text-white">
              Hello, <strong>Yudha</strong>
            </span>
            <img
              src="/img/avatar.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
