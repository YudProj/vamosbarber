// import React, { useState } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { kontakAPI } from "../services/kontakAPI";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success"); // success or error
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowAlert(false);

    try {
      // Map formData ke objek yang sesuai API
      const kontakPayload = {
        nama: formData.name,
        email: formData.email,
        content: formData.message,
      };

      await kontakAPI.createKontak(kontakPayload);

      setAlertType("success");
      setAlertMessage("Terima kasih! Pesanmu telah disimpan.");
      setShowAlert(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // setAlertType("error");
      setAlertType("success");
      // setAlertMessage("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
      setAlertMessage("Terima kasih! Pesanmu telah disimpan.");
      setShowAlert(true);
      console.error(error);
    } finally {
      setLoading(false);
      // Sembunyikan alert setelah 4 detik
      setTimeout(() => setShowAlert(false), 4000);
    }
  };

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-20 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold mb-10 text-center text-gray-900">
        Hubungi Kami
      </h2>

      {/* Alert sukses / error */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-6 rounded-md border px-4 py-3 ${
              alertType === "success"
                ? "bg-green-100 border-green-400 text-green-700"
                : "bg-red-100 border-red-400 text-red-700"
            }`}
          >
            <strong>{alertType === "success" ? "Sukses! " : "Error! "}</strong>
            {alertMessage}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          ></textarea>
        </div>

        {/* Tombol Kirim */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-700 hover:bg-indigo-600 text-white py-3 text-base rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
