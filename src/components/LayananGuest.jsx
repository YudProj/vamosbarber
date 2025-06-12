import React, { useEffect, useState } from 'react';
import { layananAPI } from '../services/layananAPI';

const LayananGuest = () => {
  const [layananList, setLayananList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await layananAPI.fetchAll();
        setLayananList(data);
      } catch (error) {
        console.error('Gagal ambil data layanan:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '30px' }}>
      <h2 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>
        💈 Daftar Layanan
      </h2>

      {layananList.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>Belum ada layanan tersedia.</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {layananList.map((layanan) => (
            <div
              key={layanan.id}
              style={{
                backgroundColor: 'white',
                color: '#222',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
            >
              <h3 style={{ marginBottom: '10px' }}>{layanan.nama_paket}</h3>
              <p><strong>Rincian:</strong> {layanan.rincian}</p>
              <p><strong>Harga:</strong> Rp {layanan.harga.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LayananGuest;
