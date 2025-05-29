import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Produk from "../assets/produk.json";

export default function ProductList() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    setProduk(Produk);
  }, []);

  return (
    <div className="bg-[#f9f6f1] py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Produk Kami
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {produk.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition hover:scale-[1.02] duration-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-2 truncate">
              {item.details.description}
            </p>
            <p className="text-green-700 font-bold">
              Rp {item.price.toLocaleString("id-ID")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
