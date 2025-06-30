import React, { useEffect, useState } from "react";
import reviewsData from "../assets/testimoni.json";
import { Star } from "lucide-react";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CustomerReviews = () => {
  const [shuffledReviews, setShuffledReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shuffle data awal sekali
  useEffect(() => {
    setShuffledReviews(shuffleArray(reviewsData));
  }, []);

  // Ganti review setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 4 >= shuffledReviews.length ? 0 : prev + 4
      );
    }, 5000); // 5 detik

    return () => clearInterval(interval);
  }, [shuffledReviews]);

  const visibleReviews = shuffledReviews.slice(currentIndex, currentIndex + 4);

  const renderStars = (count) => {
    return (
      <div className="flex gap-1 justify-center">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < count ? "text-yellow-400" : "text-gray-300"
            }`}
            fill={i < count ? "currentColor" : "none"}
          />
        ))}
      </div>
    );
  };

  return (
    
    <section className="bg-[#f9f6f1] py-50 px-20 md:px-12 lg:px-20 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 font-serif">
          Apa Kata Mereka
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {review.name}
              </h3>
              {renderStars(review.rating)}
              <p className="text-sm text-gray-600 mt-3 italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
