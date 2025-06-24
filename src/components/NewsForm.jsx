import React, { useState } from "react";
import { newsAPI } from "../services/newsAPI";

const NewsForm = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    published_date: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatDateToYYYYMMDD = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const formattedDate = formatDateToYYYYMMDD(form.published_date);
      const newNews = {
        ...form,
        published_date: formattedDate,
      };

      await newsAPI.createNews(newNews);

      setMessage({ type: "success", text: "Artikel berhasil disimpan!" });
      setForm({
        title: "",
        content: "",
        author: "",
        published_date: "",
      });
    } catch (err) {
      if (err.response) {
        setMessage({ type: "error", text: `Error: ${JSON.stringify(err.response.data)}` });
      } else {
        setMessage({ type: "error", text: "Terjadi kesalahan. Silakan coba lagi." });
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Form Artikel Vamos Barbershop</h2>

      <label className="block mb-4">
        <span className="text-black font-semibold">Judul Artikel</span>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="Misal: Sejarah Vamos Barbershop"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
        />
      </label>

      <label className="block mb-4">
        <span className="text-black font-semibold">Isi Artikel</span>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tulis isi artikel tentang Vamos Barbershop..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
        />
      </label>

      <label className="block mb-4">
        <span className="text-black font-semibold">Penulis</span>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          required
          placeholder="Nama penulis"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
        />
      </label>

      <label className="block mb-6">
        <span className="text-black font-semibold">Tanggal Terbit</span>
        <input
          type="date"
          name="published_date"
          value={form.published_date}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md"
      >
        {loading ? "Menyimpan..." : "Simpan Artikel"}
      </button>

      {message && (
        <p
          className={`mt-4 text-center ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
};

export default NewsForm;
