import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold mb-4 md:mb-0">
          Vamos <span className="text-white">Barbershop</span>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/vamosbarber/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            WhatsApp
          </a>
          <a
            href="https://www.youtube.com/@captainbarbershopid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            YouTube
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 Vamos Barbershop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
