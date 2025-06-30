import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white w-full py-12 rounded-2xl">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Gambar kiri */}
          <div className="w-full lg:w-1/3">
            <img
              src="/img/barbershop.jpg"
              alt="Barbershop Icon"
              className="w-full h-auto rounded-xl object-cover"
            />

            <div className="mt-15 font-bold text-size-lg text-gray-900 leading-tight">
              Jl. Srikandi 08
            </div>

            <p className="font-serif font-light text-xs text-gray-700 leading-tight">
              Kecamatan Karangpawitan, Garut
            </p>
          </div>

          {/* Konten Tengah */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black b-6 leading-tight">
              Vamos Barbershop
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-sans mb-6">
              Barbershop modern dengan gaya klasik — didirikan tahun 2024.
              Menggabungkan seni cukur rambut dengan nuansa elegan dan maskulin.
            </p>

            <button className="text-sm font-sans text-white border border-gray-400 rounded-full px-4 py-1 hover:bg-gray-100 transition">
              Explore
            </button>
          </div>

          {/* Gambar kanan diganti menjadi video */}
          <div className="w-full lg:w-1/3">
            <video
              src="/img/barber.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
