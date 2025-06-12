import React, { useEffect, useState } from 'react';
import { karyawanAPI } from '../services/karyawanAPI';

const KaryawanGuest = () => {
  const [karyawanList, setKaryawanList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await karyawanAPI.fetchAll();
        setKaryawanList(data);
      } catch (error) {
        console.error('Gagal ambil data karyawan:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '30px' }}>
      <h2 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>
        👥 Daftar Karyawan
      </h2>

      {karyawanList.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>Belum ada data karyawan.</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {karyawanList.map((karyawan) => (
            <div
              key={karyawan.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                color: '#222',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                gap: '20px'
              }}
            >
              <img
                src={karyawan.foto}
                alt={karyawan.name}
                style={{ width: '100px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
              />
              <div>
                <h3 style={{ margin: 0 }}>{karyawan.name}</h3>
                <p><strong>Email:</strong> {karyawan.email}</p>
                <p><strong>Telepon:</strong> {karyawan.phone}</p>
                <p><strong>Alamat:</strong> {karyawan.alamat}</p>
                <p><strong>Jabatan:</strong> {karyawan.jabatan}</p>
                <p><strong>Tanggal Masuk:</strong> {new Date(karyawan.tanggal_masuk).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KaryawanGuest;
