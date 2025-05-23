import React, { useEffect, useState } from "react";
import data from "../assets/reservasi.json";

export default function ReservasiList() {
  const [reservasi, setReservasi] = useState([]);

  useEffect(() => {
    setReservasi(data);
  }, []);

  return (
    <div className="px-6 py-10 bg-[#f9f6f1] min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Data Reservasi
      </h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Barber</th>
              <th className="px-4 py-3 text-left">Tanggal</th>
              <th className="px-4 py-3 text-left">Jam</th>
              <th className="px-4 py-3 text-left">Layanan</th>
              <th className="px-4 py-3 text-left">Total (Rp)</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            {reservasi.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3">{item["Reservasi ID"]}</td>
                <td className="px-4 py-3">{item["Customer Name"]}</td>
                <td className="px-4 py-3">{item.Barber}</td>
                <td className="px-4 py-3">{item.Tanggal}</td>
                <td className="px-4 py-3">{item.Jam}</td>
                <td className="px-4 py-3">{item["Jenis Layanan"]}</td>
                <td className="px-4 py-3 text-green-600 font-semibold">
                  Rp {item["Total Harga"].toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
