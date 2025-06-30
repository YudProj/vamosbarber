import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

  const [isCustomTime, setIsCustomTime] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const newBooking = { ...form };
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
      setIsCustomTime(false);
    } catch (err) {
      console.error("Submit error:", err);
      setMessage({ type: "error", text: "Terjadi kesalahan. Coba lagi nanti." });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-100 to-gray-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-extrabold text-center text-black  mb-8 tracking-tight">
          Form Booking
        </h2>

        <div className="space-y-5">
          <div>
            <label className="text-gray-700 font-semibold">Nama Pelanggan</label>
            <input
              type="text"
              name="customer_name"
              value={form.customer_name}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Layanan</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
            >
              <option value="">Pilih layanan</option>
              <option value="cukur rambut">Cukur Rambut</option>
              <option value="cukur jenggot">Cukur Jenggot</option>
              <option value="perawatan kulit">Perawatan Kulit</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label className="text-gray-700 font-semibold">Tanggal Booking</label>
              <DatePicker
                selected={form.booking_date ? new Date(form.booking_date) : null}
                onChange={(date) =>
                  setForm({
                    ...form,
                    booking_date: date.toISOString().split("T")[0],
                  })
                }
                dateFormat="dd/MM/yyyy"
                placeholderText="Pilih tanggal"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
              />
            </div>

            <div className="flex-1">
              <label className="text-gray-700 font-semibold">Waktu</label>
              <select
                name="time_slot"
                value={isCustomTime ? "lainnya" : form.time_slot}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "lainnya") {
                    setIsCustomTime(true);
                    setForm({ ...form, time_slot: "" });
                  } else {
                    setIsCustomTime(false);
                    setForm({ ...form, time_slot: value });
                  }
                }}
                required={!isCustomTime}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
              >
                <option value="">Pilih waktu</option>
                {Array.from({ length: 12 }, (_, i) => {
                  const hour = 9 + i;
                  const formatted = `${hour.toString().padStart(2, "0")}:00`;
                  return (
                    <option key={formatted} value={formatted}>
                      {formatted}
                    </option>
                  );
                })}
                <option value="lainnya">Lainnya...</option>
              </select>

              {isCustomTime && (
                <input
                  type="text"
                  placeholder="Tulis waktu manual (contoh: 20:30)"
                  value={form.time_slot}
                  onChange={(e) =>
                    setForm({ ...form, time_slot: e.target.value })
                  }
                  className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
                  required
                />
              )}
            </div>
          </div>

          <div>
            <label className="text-gray-700 font-semibold">No. Telepon</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="081234567890"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Catatan</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Tambahkan catatan (opsional)"
              rows={3}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition"
        >
          {loading ? "Mengirim..." : "Kirim Booking"}
        </button>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
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
