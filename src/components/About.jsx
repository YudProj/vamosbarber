import React from "react";
import {
  Building2,
  CalendarCheck,
  MapPin,
  ScissorsSquare,
  Target,
  Info,
  History,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full py-20 px-4"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/5a/5a/41/5a5a41b37da66e400cd4f896840e945c.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-5xl mx-auto z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90 text-black rounded-2xl border border-gray-300 shadow-xl p-10 backdrop-blur-md"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-center font-serif mb-10 text-indigo-800">
            Tentang Kami
          </h1>

          {/* Sejarah */}
          <div className="mb-8 border-b border-gray-300 pb-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-indigo-700">
              <History /> Sejarah
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>VAMOS Barbershop</strong> didirikan pada tahun <strong>2024</strong> di Garut oleh sekelompok barber profesional.
              Dengan konsep klasik-modern, kami menghadirkan suasana cukur rambut premium, elegan, dan nyaman bagi pria masa kini.
            </p>
          </div>

          {/* Informasi Perusahaan */}
          <div className="mb-8 border-b border-gray-300 pb-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-indigo-700">
              <Info /> Informasi Perusahaan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              {[
                {
                  icon: <Building2 className="text-indigo-600 mt-1" />,
                  label: "Nama Usaha",
                  value: "VAMOS Barbershop",
                },
                {
                  icon: <CalendarCheck className="text-indigo-600 mt-1" />,
                  label: "Tahun Berdiri",
                  value: "2024",
                },
                {
                  icon: <MapPin className="text-indigo-600 mt-1" />,
                  label: "Alamat",
                  value: "Jl. Srikandi 08, Karangpawitan, Garut",
                },
                {
                  icon: <ScissorsSquare className="text-indigo-600 mt-1" />,
                  label: "Jenis Usaha",
                  value: "Jasa Cukur Rambut & Perawatan Pria",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {item.icon}
                  <span>
                    <strong>{item.label}:</strong>
                    <br />
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="mb-8 border-b border-gray-300 pb-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-indigo-700">
              <Target /> Visi & Misi
            </h2>
            <p className="mb-2">
              <strong>Visi:</strong> Menjadi barbershop terbaik di Garut dengan pelayanan profesional dan kualitas premium.
            </p>
            <p>
              <strong>Misi:</strong> Memberikan pengalaman cukur yang nyaman, bersih, dan penuh gaya bagi setiap pelanggan.
            </p>
          </div>

          {/* Kenapa Memilih Kami */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-indigo-700">
              <BadgeCheck /> Kenapa Memilih Kami?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Barber berpengalaman dan ramah</li>
              <li>Lingkungan bersih dan higienis</li>
              <li>Desain interior yang elegan & maskulin</li>
              <li>Layanan lengkap: cukur, perawatan rambut & wajah</li>
              <li>Reservasi online dan sistem antrian modern</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
