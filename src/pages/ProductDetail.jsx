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
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Memuat data produk...</p>;
  }

  if (!produk) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Produk tidak ditemukan.</p>;
  }

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '40px' }}>
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={produk.gambar}
          alt={produk.name}
          style={{
            width: '320px',
            height: '320px',
            objectFit: 'cover',
            borderRadius: '12px',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />

        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>
            {produk.name}
          </h2>

          <div style={{ lineHeight: '1.8', fontSize: '16px', color: '#333' }}>
            <p><strong>Harga:</strong> Rp {produk.price?.toLocaleString()}</p>
            <p><strong>Stok:</strong> {produk.stock}</p>
            <p><strong>Kategori:</strong> {produk.kategori}</p>
            <p><strong>Deskripsi:</strong> {produk.deskripsi}</p>
            <p><strong>Bahan:</strong> {produk.ingredients}</p>
            <p><strong>Cara Pakai:</strong> {produk.usage}</p>
            <p><strong>Brand:</strong> {produk.nama_brand} ({produk.negara}, sejak {produk.founded})</p>
            <p><strong>Berat:</strong> {produk.weight} gram</p>
          </div>

          <div style={{ marginTop: '30px' }}>
            <a
              href="/produkGuest"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#111',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              ← Kembali ke Daftar Produk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
