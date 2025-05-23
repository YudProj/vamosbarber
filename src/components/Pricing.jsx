import React, { useEffect, useState } from "react";
import pricingData from "../assets/pricing.json";

const Pricing = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(pricingData);
  }, []);

  return (
    <section className="bg-[#f9f6f1] py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Daftar Harga</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-2xl font-bold text-black mb-4">{item.price}</p>
              <ul className="text-gray-600 text-sm mb-6 space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
