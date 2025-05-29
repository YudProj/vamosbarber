import { useEffect, useState } from "react";
import NotFoundImage from "/img/notfound.jpg";

export default function NotFounds() {
  const [quote, setQuote] = useState("Memuat kutipan inspiratif...");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => setQuote(`"${data.slip.advice}"`))
      .catch(() =>
        setQuote("Tidak dapat memuat kutipan. Silakan muat ulang halaman.")
      );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 py-10">
      <div className="flex flex-col items-center max-w-md w-full text-center space-y-4">

        <img
          src={NotFoundImage}
          alt="404 Not Found"
          className="w-100 h-100 object-contain mt-2"
        />

        <p className="text-gray-600 px-2">
          Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>

        <blockquote className="italic text-green-700 px-4">
          {quote}
        </blockquote>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition w-full max-w-xs"
        >
          Kembali ke Home
        </button>
      </div>
    </div>
  );
}
