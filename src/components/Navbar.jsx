import React from "react";
import { useNavigate } from "react-router-dom";
import ListNavbar from "./ListNavbar";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-white sticky top-0 z-50">
      <h2 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => navigate("/")}>
        Vamos Barbershop
      </h2>
      <ListNavbar />

      <div className="flex items-center space-x-6">
        {/* Tombol Booking */}
        <button
          onClick={() => navigate("/booking")}
          className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition"
        >
          Booking
        </button>

        {/* Notifikasi */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <i className="fas fa-bell text-gray-600 text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">
              3
            </span>
          </div>

          {/* Settings */}
          <i className="fas fa-cog text-gray-600 text-lg"></i>

          {/* Hello & Avatar */}
          <div className="flex items-center gap-2 border-l pl-4">
            <span className="text-sm text-gray-700">
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
