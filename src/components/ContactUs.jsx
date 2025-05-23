import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-20 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold mb-10 text-center text-gray-900">
        Hubungi Kami
      </h2>

      {/* Alert sukses */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 rounded-md bg-green-100 border border-green-400 text-green-700 px-4 py-3"
          >
            <strong>Terima kasih!</strong> Pesan mu telah disimpan
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nama */}
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama Anda"
            className="w-full px-4 py-3 text-base rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email Anda"
            className="w-full px-4 py-3 text-base rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Pesan */}
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tulis pesan Anda di sini..."
            rows="5"
            className="w-full px-4 py-3 text-base rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          ></textarea>
        </div>

        {/* Tombol Kirim */}
        <button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-600 text-white py-3 text-base rounded-md transition"
        >
          Kirim
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
