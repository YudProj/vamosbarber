import React from "react";
import { useParams, Link } from "react-router-dom";
import pricingData from "../assets/pricing.json";

const PricingDetail = () => {
  const { menuName } = useParams();
  const decodedName = decodeURIComponent(menuName);

  const menu = pricingData.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!menu) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f6f1] p-8">
        <h2 className="text-3xl font-bold mb-4">Paket tidak ditemukan</h2>
        <Link
          to="/pricing"
          className="text-white bg-black px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Kembali ke Daftar Harga
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#f9f6f1] min-h-screen py-20 px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full p-10 flex flex-col md:flex-row gap-10 items-start">
        {/* Container gambar dengan max height */}
        <div className="rounded-lg overflow-hidden shadow-lg max-w-full flex-shrink-0">
          <img
            src={menu.image}
            alt={menu.name}
            className="block max-w-full max-h-[400px] h-auto w-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Detail Paket */}
        <div className="flex flex-col flex-1">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{menu.name}</h1>
          <p className="text-3xl font-bold text-black mb-8">{menu.price}</p>

          <h2 className="text-xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
            Fitur Paket
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-10">
            {menu.features.map((feature, i) => (
              <li key={i} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>

          <Link
            to="/pricing"
            className="inline-block px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition self-start"
          >
            ← Kembali ke Daftar Harga
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingDetail;
