import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { produkAPI } from '../services/produkAPI';

const ProductDetail = () => {
  const { id } = useParams();
  const [produk, setProduk] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const data = await produkAPI.fetchById(id);
        setProduk(data);
      } catch (error) {
        console.error('Gagal mengambil detail produk:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduk();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Memuat data produk...</p>;
  }

  if (!produk) {
    return <p className="text-center mt-10">Produk tidak ditemukan.</p>;
  }

  return (
    <section className="bg-gray-100 min-h-screen px-4 py-10 rounded-2xl">
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow flex flex-col lg:flex-row gap-10">
        {/* Gambar Produk */}
        <div className="flex-shrink-0">
          <img
            src={produk.gambar}
            alt={produk.name}
            className="w-80 h-80 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Detail Produk */}
        <div className="flex-1 min-w-[280px]">
          <h2 className="text-2xl font-bold mb-4">{produk.name}</h2>
          <div className="text-gray-800 space-y-2 text-sm md:text-base">
            <p><strong>Harga:</strong> Rp {produk.price?.toLocaleString()}</p>
            <p><strong>Stok:</strong> {produk.stock}</p>
            <p><strong>Kategori:</strong> {produk.kategori}</p>
            <p><strong>Deskripsi:</strong> {produk.deskripsi}</p>
            <p><strong>Bahan:</strong> {produk.ingredients}</p>
            <p><strong>Cara Pakai:</strong> {produk.usage}</p>
            <p><strong>Brand:</strong> {produk.nama_brand} ({produk.negara}, sejak {produk.founded})</p>
            <p><strong>Berat:</strong> {produk.weight} gram</p>
          </div>

          <div className="mt-6">
            <a
              href="/produkGuest"
              className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              ← Kembali ke Daftar Produk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
