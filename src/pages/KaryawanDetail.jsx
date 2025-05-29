import React from "react";
import { useParams, Link } from "react-router-dom";
import dataKaryawan from "../assets/karyawan.json";

export default function KaryawanDetail() {
  const { id } = useParams();
  const detail = dataKaryawan.find(
    (item) => item["Karyawan ID"].toString() === id
  );

  if (!detail) {
    return <div className="text-center mt-10">Karyawan tidak ditemukan</div>;
  }

  return (
    <div className="bg-[#f9f6f1] min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center">
        <img
          src={detail.Foto}
          alt={detail.Name}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
        />
        <h2 className="text-xl font-semibold text-gray-800">{detail.Name}</h2>
        <p className="text-sm text-gray-500 mb-4">{detail.Jabatan}</p>
        <div className="text-left text-sm text-gray-600 space-y-1">
          <p>
            <strong>Email:</strong> {detail.Email}
          </p>
          <p>
            <strong>Telepon:</strong> {detail.Phone}
          </p>
          <p>
            <strong>Alamat:</strong> {detail.Alamat}
          </p>
          <p>
            <strong>Tanggal Masuk:</strong> {detail["Tanggal Masuk"]}
          </p>
        </div>
        <Link
          to="/karyawan"
          className="inline-block mt-6 text-blue-600 hover:underline text-sm"
        >
          ← Kembali ke daftar
        </Link>
      </div>
    </div>
  );
}
