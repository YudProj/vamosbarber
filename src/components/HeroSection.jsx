import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#f9f6f1] w-full py-12">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Gambar kiri */}
          <div className="w-full lg:w-1/3">
            <img
              src="/img/barbershop.jpg"
              alt="Barbershop Icon"
              className="w-full h-auto rounded-xl object-cover"
            />
            <div className="mt-4 text-sm text-gray-700">
              <h1 className="font-bold text-lg">Jl. Srikandi 08</h1>
              <p className="text-xs text-gray-500">Kecamatan Karangpawitan, Garut</p>
            </div>
          </div>

          {/* Konten Tengah */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Vamos Barbershop
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Barbershop modern dengan gaya klasik — didirikan tahun 2024.
              Menggabungkan seni cukur rambut dengan nuansa elegan dan maskulin.
            </p>
            <button className="">
              Explore
            </button>
          </div>

          {/* Gambar kanan */}
          <div className="w-full lg:w-1/3">
            <img
              src="/img/product.jpg"
              alt="Produk Alat"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
