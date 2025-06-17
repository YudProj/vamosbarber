import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { karyawanAPI } from "../services/karyawanAPI";
import dayjs from "dayjs";

export default function KaryawanList() {
  const [karyawan, setKaryawan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await karyawanAPI.fetchAll();
        setKaryawan(data);
      } catch (err) {
        console.error("Gagal ambil data karyawan:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#f9f6f1] py-12 px-6 min-h-screen font-sans">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 font-serif">
        Daftar Karyawan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {karyawan.map((item) => (
          <Link
            to={`/karyawan/${item.id}`}
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition no-underline text-inherit"
          >
            <img
              src={item.foto || "/default-avatar.png"}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 font-serif">{item.name}</h3>
            <p className="text-sm text-gray-500 italic">{item.jabatan}</p>
            <p className="text-sm text-gray-400">{item.email}</p>
            <p className="text-sm text-gray-400">{item.phone}</p>
            <p className="text-xs text-gray-400">{item.alamat}</p>
            <p className="text-xs text-gray-500 mt-2 italic">
              Masuk sejak:{" "}
              {dayjs(item.tanggal_masuk).isValid()
                ? dayjs(item.tanggal_masuk).format("DD MMMM YYYY")
                : "-"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
