import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../views/Home"));
const Daftar = lazy(() => import("../views/Daftar"));
const Peserta = lazy(() => import("../views/Peserta"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/peserta" element={<Peserta />} />
    </Routes>
  );
};

export default Router;
