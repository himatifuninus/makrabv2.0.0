import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../views/Home"));
const Regist = lazy(() => import("../views/Regist"));
const Peserta = lazy(() => import("../views/Peserta"));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regist" element={<Regist />} />
      <Route path="/peserta" element={<Peserta />} />
    </Routes>
  );
};

export default Router;
