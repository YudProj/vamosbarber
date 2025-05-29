import React from "react";
import { useParams } from "react-router-dom";
import Produk from "../assets/produk.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = Produk.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="p-6 text-red-500">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="bg-[#f9f6f1] min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.details.description}</p>
        <p className="text-green-700 font-bold mb-2">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        <div className="text-sm text-gray-500">
          <p><strong>Kategori:</strong> {product.category}</p>
          <p><strong>Stok:</strong> {product.stock}</p>
          <p><strong>Produsen:</strong> {product.manufacturer.name} ({product.manufacturer.country})</p>
          <p><strong>Bahan:</strong> {product.details.ingredients.join(", ")}</p>
          <p><strong>Panduan Pakai:</strong> {product.details.usage}</p>
        </div>
      </div>
    </div>
  );
}
