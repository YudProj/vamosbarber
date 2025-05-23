import React, { useEffect, useState } from "react";
import dataFaq from "../assets/faq.json";

export default function FAQList() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(dataFaq);
  }, []);

  return (
    <div className="bg-[#f9f6f1] py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Pertanyaan Umum</h2>
      <div className="space-y-4 max-w-3xl mx-auto divide-y divide-gray-300">
        {faq.map((item) => (
          <div key={item.ID} className="bg-white px-6 py-4 rounded-xl shadow-sm">
            <div className="mb-2">
              <h3 className="text-lg  text-gray-800">{item.Question}</h3>
              <p className="text-sm text-gray-500">Ditanyakan oleh: {item["Customer Name"]}</p>
            </div>
            <hr className="my-2 border-gray-200" />
            {item.Answer ? (
              <p className="text-gray-700 font-bold">{item.Answer}</p>
            ) : (
              <p className="text-red-500 italic">Belum ada jawaban</p>
            )}
            <div className="text-xs text-gray-400 mt-2">
              {item.Tanggal} — {item.Waktu} | Feedback:{" "}
              <span
                className={
                  item.Feedback === "Memuaskan"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {item.Feedback}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
