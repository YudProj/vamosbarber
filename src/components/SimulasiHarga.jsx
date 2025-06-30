import React, { useState } from "react";
import pricingData from "../assets/pricing.json";

const SimulasiHarga = () => {
  const [paketDipilih, setPaketDipilih] = useState([]);
  const [total, setTotal] = useState(0);

  const parseRupiah = (string) => {
    return parseInt(string.replace(/[^0-9]/g, ""), 10);
  };

  const togglePaket = (nama) => {
    let updated = [];

    if (paketDipilih.includes(nama)) {
      updated = paketDipilih.filter((item) => item !== nama);
    } else {
      updated = [...paketDipilih, nama];
    }

    setPaketDipilih(updated);

    const totalHarga = updated.reduce((sum, namaPaket) => {
      const paket = pricingData.find((p) => p.name === namaPaket);
      return sum + (paket ? parseRupiah(paket.price) : 0);
    }, 0);

    setTotal(totalHarga);
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          💈 Hitung Harga Paket
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-md text-left">
          <form className="space-y-4">
            {pricingData.map((paket) => (
              <div key={paket.name} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={paket.name}
                  checked={paketDipilih.includes(paket.name)}
                  onChange={() => togglePaket(paket.name)}
                  className="w-4 h-4 text-indigo-600 accent-indigo-600"
                />
                <label htmlFor={paket.name} className="text-gray-800 font-medium">
                  {paket.name} - {paket.price}
                </label>
              </div>
            ))}
          </form>

          <div className="mt-8 border-t pt-6 text-center">
            <p className="text-xl font-semibold text-gray-900">
              Total: <span className="text-indigo-700">Rp {total.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulasiHarga;
