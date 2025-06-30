import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { karyawanAPI } from "../services/karyawanAPI";

export default function KaryawanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [karyawan, setKaryawan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKaryawan = async () => {
      try {
        const data = await karyawanAPI.fetchAll();
        const selected = data.find((item) => item.id.toString() === id);
        setKaryawan(selected || null);
      } catch (err) {
        console.error("Gagal ambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKaryawan();
  }, [id]);

  if (loading) return <div className="text-center py-20">Memuat data...</div>;
  if (!karyawan) {
    return (
      <div className="text-center py-20">
        <p>Data tidak ditemukan.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-black text-white font-medium rounded-md shadow-md hover:bg-gray-800 hover:scale-105 transition transform duration-200"
        >
          ← Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f6f1] flex items-center justify-center px-4 font-[serif] rounded-2xl">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-2xl text-center">
        <img
          src={karyawan.foto || "/default-avatar.png"}
          alt={karyawan.name}
          className="w-40 h-40 object-cover rounded-full border-4 border-[#e5e5e5] mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold font-[Playfair Display] text-gray-800 mb-2">
          {karyawan.name}
        </h1>
        <p className="text-md text-gray-500 mb-4 italic">{karyawan.jabatan}</p>

        <div className="text-gray-700 text-sm leading-relaxed space-y-1">
          <p>{karyawan.email}</p>
          <p>{karyawan.phone}</p>
          <p>{karyawan.alamat}</p>
        </div>

        <p className="text-sm text-gray-400 italic mt-6">
          Masuk sejak:{" "}
          {dayjs(karyawan.tanggal_masuk).isValid()
            ? dayjs(karyawan.tanggal_masuk).format("DD MMMM YYYY")
            : "-"}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-black text-white font-medium rounded-md shadow-md hover:bg-gray-800 hover:scale-105 transition transform duration-200"
        >
          ← Kembali
        </button>
      </div>
    </div>
  );
}
