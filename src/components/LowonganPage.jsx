import React, { useEffect, useState } from 'react';
import { lowonganAPI } from '../services/lowonganAPI';

const LowonganGuest = () => {
  const [lowongans, setLowongans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await lowonganAPI.fetchAll();
        setLowongans(data);
      } catch (error) {
        console.error('Gagal ambil data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '30px' }}>
      <h2 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>
        📢 Lowongan Tersedia
      </h2>

      {lowongans.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>Belum ada lowongan saat ini.</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {lowongans.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'white',
                color: '#222',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
            >
              <h3 style={{ marginBottom: '10px' }}>{item.judul_lowongan}</h3>
              <p><strong>Posisi:</strong> {item.posisi}</p>
              <p><strong>Syarat:</strong> {item.syarat}</p>
              <p><strong>Email HRD:</strong> {item.email_hrd}</p>
              <p><strong>No. Telp HRD:</strong> {item.no_telpon_hrd}</p>
              <p><strong>Dipublikasi:</strong> {item.tanggal_publikasi}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LowonganGuest;
