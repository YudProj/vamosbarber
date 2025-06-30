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
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '30px' }}>
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '25px',
          fontWeight: '600',
          letterSpacing: '0.5px',
        }}
      >
        🛍️ Daftar Produk
      </div>

      {produkList.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>Belum ada produk tersedia.</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {produkList.map((produk) => (
            <div
              key={produk.id}
              style={{
                display: 'flex',
                gap: '20px',
                backgroundColor: 'white',
                color: '#222',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', gap: '20px' }}>
                <img
                  src={produk.gambar}
                  alt={produk.name}
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <div>
                  <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>
                    {produk.name}
                  </div>
                  <p><strong>Harga:</strong> Rp {produk.price?.toLocaleString()}</p>
                  <p><strong>Stok:</strong> {produk.stock}</p>
                  <p><strong>Kategori:</strong> {produk.kategori}</p>
                  <p><strong>Deskripsi:</strong> {produk.deskripsi}</p>
                  <p><strong>Bahan:</strong> {produk.ingredients}</p>
                  <p><strong>Cara Pakai:</strong> {produk.usage}</p>
                  <p>
                    <strong>Brand:</strong> {produk.nama_brand} ({produk.negara}, sejak {produk.founded})
                  </p>
                  <p><strong>Berat:</strong> {produk.weight} gram</p>
                </div>
              </div>

              <div style={{ marginTop: '10px', textAlign: 'right' }}>
                <Link
                  to={`/produk/${produk.id}`}
                  style={{
                    backgroundColor: '#111',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProdukGuest;
