import React, { useEffect, useState } from 'react';
import { produkAPI } from '../services/produkAPI';
import { Link } from 'react-router-dom';

const ProdukGuest = () => {
  const [produkList, setProdukList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await produkAPI.fetchAll();
        setProdukList(data);
      } catch (error) {
        console.error('Gagal ambil data produk:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-neutral-900 min-h-screen px-4 py-10 rounded-2xl">
      <div className="text-white text-center text-xl font-semibold mb-10 tracking-wide">
        🛍️ Daftar Produk
      </div>

      {produkList.length === 0 ? (
        <p className="text-white text-center">Belum ada produk tersedia.</p>
      ) : (
        <div className="grid gap-6 max-w-5xl mx-auto">
          {produkList.map((produk) => (
            <div
              key={produk.id}
              className="flex flex-col gap-4 bg-white text-gray-800 p-6 rounded-2xl shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={produk.gambar}
                  alt={produk.name}
                  className="w-[150px] h-[150px] object-cover rounded-xl"
                />
                <div className="flex-1 space-y-1 text-sm md:text-base">
                  <div className="text-lg font-semibold mb-2">{produk.name}</div>
                  <p><strong>Harga:</strong> Rp {produk.price?.toLocaleString()}</p>
                  <p><strong>Stok:</strong> {produk.stock}</p>
                  <p><strong>Kategori:</strong> {produk.kategori}</p>
                  <p><strong>Deskripsi:</strong> {produk.deskripsi}</p>
                  <p><strong>Bahan:</strong> {produk.ingredients}</p>
                  <p><strong>Cara Pakai:</strong> {produk.usage}</p>
                  <p><strong>Brand:</strong> {produk.nama_brand} ({produk.negara}, sejak {produk.founded})</p>
                  <p><strong>Berat:</strong> {produk.weight} gram</p>
                </div>
              </div>

              <div className="text-right">
                <Link
                  to={`/produk/${produk.id}`}
                  className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProdukGuest;
