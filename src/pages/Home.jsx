import React from "react";
import BuscadorPasajes from "../components/BuscadorPasajes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Noticia from "../components/Noticia";
import "../css/Home.css";

export default function Home() {
  return (
    <div>
      <BuscadorPasajes />
      <div className="grid-noticias">
        <Noticia />
        <Noticia />
        <Noticia />
      </div>
      <div className="grid-noticias">
        <Noticia />
        <Noticia />
        <Noticia />
      </div>
      <Footer />
    </div>
  );
}
