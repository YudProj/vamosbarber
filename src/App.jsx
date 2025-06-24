import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./assets/tailwind.css";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";
import NewsForm from "./components/NewsForm";







const LandingPage = lazy(() => import("./pages/LandingPage"));
const Error401 = lazy(() => import("./pages/Error401"));
const NotFound = lazy(() => import("./pages/NotFound"));
const KaryawanPage = lazy(() => import("./pages/KaryawanPage"));
const KaryawanDetail= lazy (() => import ("./components/KaryawanDetail"))
const ReservasiPage = lazy(() => import("./pages/ReservasiPage"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const FAQ = lazy(() => import("./pages/FAQ"));
const AboutUs = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Pricing = lazy(() => import("./pages/PricingPage"));
const PricingDetail = lazy(() => import("./pages/PricingDetail"));
const Review = lazy(() => import("./pages/review"));

const LowonganPage = lazy(() => import("./components/LowonganPage"));
const LayananGuest = lazy(() => import("./components/LayananGuest"));

const ProdukGuest = lazy(() => import("./components/ProdukGuest"));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Main layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />

            <Route path="/product/" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/karyawan" element={<KaryawanPage />} />
            <Route path="/karyawan/:id" element={<KaryawanDetail />} />
            <Route path="/reservasi" element={<ReservasiPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/:menuName" element={<PricingDetail />} />
            <Route path="/review" element={<Review />} />
            <Route path="/lowongan" element={<LowonganPage />} />
            <Route path="/layanan" element={<LayananGuest />} />
            {/* <Route path="/karyawanguest" element={<KaryawanGuest />} /> */}
            <Route path="/produkGuest" element={<ProdukGuest />} />

          </Route>

          {/* Auth layout */}
          <Route element={<AuthLayout />}>
            <Route path="/*" element={<NotFound />} />
            <Route path="/401" element={<Error401 />} />

          </Route>


        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;