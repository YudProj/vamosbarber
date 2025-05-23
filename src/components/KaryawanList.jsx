import React, { useEffect, useState } from "react";
import dataKaryawan from "../assets/karyawan.json";

export default function KaryawanList() {
  const [karyawan, setKaryawan] = useState([]);

  useEffect(() => {
    setKaryawan(dataKaryawan);
  }, []);

  return (
    <div className="bg-[#f9f6f1] py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Daftar Karyawan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {karyawan.map((item) => (
          <div
            key={item["Karyawan ID"]}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={item.Foto}
              alt={item.Name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.Name}</h3>
            <p className="text-sm text-gray-500">{item.Jabatan}</p>
            <p className="text-sm text-gray-400 mt-2">{item.Email}</p>
            <p className="text-sm text-gray-400">{item.Phone}</p>
            <p className="text-xs text-gray-400 mt-1 italic">Masuk sejak: {item["Tanggal Masuk"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
