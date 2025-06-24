import React from "react";
import newsData from "../assets/newsData.json";
import promoData from "../assets/promoData.json";

const NewsPage = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      {/* Bagian Berita */}
      {newsData.map((news) => (
        <div key={news.id} className="mb-16">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-[450px] md:h-[550px] object-cover rounded-2xl shadow-xl mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{news.title}</h2>
          <p className="text-sm text-gray-500 mb-5">{new Date(news.date).toLocaleDateString()}</p>
          <p className="text-lg text-gray-800 leading-relaxed">{news.content}</p>
        </div>
      ))}

      {/* Garis pemisah */}
      <hr className="my-14 border-t border-gray-300" />

      {/* Bagian Promo */}
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8 text-center">
        Promo Menarik di Vamos Barbershop
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {promoData.map((promo) => (
          <div
            key={promo.id}
            className="rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden bg-white"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">{promo.title}</h3>
              <p className="text-gray-700 mt-2">{promo.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Berlaku sampai: <span className="font-medium">{promo.valid_until}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
