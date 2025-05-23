import ErrorImage from "/img/401.png";

export default function Error401() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f1= flex flex-col justify-center items-center px-6 py-12">
      <img
        src={ErrorImage}
        alt="401 Unauthorized"
        className="max-w-screen md:max-w-md w-full object-contain mb-6"
      />

      <h1 className="text-3xl font-semibold text-gray-800 mb-2">401 Unauthorized</h1>
      <p className="text-gray-600 text-center max-w-md">
        Permintaan tidak valid. Silakan periksa kembali input Anda.
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        Kembali ke Home
      </button>
    </div>
  );
}
