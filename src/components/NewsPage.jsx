import React from "react";
import newsData from "../assets/newsData.json";
import promoData from "../assets/promoData.json";

const NewsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10 max-w-6xl mx-auto rounded-2xl">
      {/* Bagian Berita */}
      {newsData.map((news) => (
        <div
          key={news.id}
          className="mb-16 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300"
        >
          <div className="relative group">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
              <h2 className="text-white text-xl md:text-2xl font-bold">{news.title}</h2>
              <p className="text-sm text-gray-200">
                {new Date(news.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-base leading-relaxed mb-4">{news.content}</p>
            <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      ))}

      {/* Garis pemisah */}
      <hr className="my-16 border-t border-gray-300" />

      {/* Judul Promo */}
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Promo Menarik di Vamos Barbershop
      </h2>

      {/* Kartu Promo */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {promoData.map((promo) => (
          <div
            key={promo.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
                Promo
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{promo.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{promo.description}</p>
              <p className="text-xs text-gray-500 mt-3">
                Berlaku sampai:{" "}
                <span className="font-medium text-indigo-700">{promo.valid_until}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
