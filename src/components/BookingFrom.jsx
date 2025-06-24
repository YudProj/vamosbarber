import React, { useState } from "react";
import { bookingAPI } from "../services/bookingAPI";

const BookingForm = () => {
  const [form, setForm] = useState({
    customer_name: "",
    service: "",
    booking_date: "",
    time_slot: "",
    phone: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatDateToYYYYMMDD = (dateStr) => {
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
      const formattedDate = formatDateToYYYYMMDD(form.booking_date);
      const newBooking = { ...form, booking_date: formattedDate };

      await bookingAPI.createBooking(newBooking);

      setMessage({ type: "success", text: "Booking berhasil dikirim!" });
      setForm({
        customer_name: "",
        service: "",
        booking_date: "",
        time_slot: "",
        phone: "",
        notes: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      setMessage({ type: "error", text: "Terjadi kesalahan. Coba lagi nanti." });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Form Booking
        </h2>

        <label className="block mb-4">
          <span className="text-black font-semibold">Nama Pelanggan</span>
          <input
            type="text"
            name="customer_name"
            value={form.customer_name}
            onChange={handleChange}
            required
            placeholder="Masukkan nama lengkap"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>

        <label className="block mb-4">
          <span className="text-black font-semibold">Layanan</span>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          >
            <option value="">Pilih layanan</option>
            <option value="cukur rambut">Cukur Rambut</option>
            <option value="cukur jenggot">Cukur Jenggot</option>
            <option value="perawatan kulit">Perawatan Kulit</option>
          </select>
        </label>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <label className="flex-1">
            <span className="text-black font-semibold">Tanggal Booking</span>
            <input
              type="date"
              name="booking_date"
              value={form.booking_date}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
            />
          </label>

          <label className="flex-1">
            <span className="text-black font-semibold">Waktu</span>
            <select
              name="time_slot"
              value={form.time_slot}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
            >
              <option value="">Pilih waktu</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
            </select>
          </label>
        </div>

        <label className="block mb-4">
          <span className="text-black font-semibold">No. Telepon</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="081234567890"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>

        <label className="block mb-6">
          <span className="text-black font-semibold">Catatan</span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Tambahkan catatan (opsional)"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md"
        >
          {loading ? "Mengirim..." : "Kirim Booking"}
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
    </div>
  );
};

export default BookingForm;
