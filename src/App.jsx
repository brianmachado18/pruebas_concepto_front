import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Analisis from "./pages/Analisis"; // 👉 Asegúrate que este path esté bien
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <style>{`
        .Fondo {
          background-color: #f8f9fd
        }
      `}</style>
      <div className="Fondo">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/analisis" element={<Analisis />} /> {/* 👉 Esta es la nueva ruta */}
        </Routes>
      </div>
    </>
  );
}

export default App;