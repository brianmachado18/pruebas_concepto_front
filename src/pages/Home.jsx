import React from 'react';
import BuscadorPasajes from '../components/BuscadorPasajes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <BuscadorPasajes />
      <Footer />
    </div>
  );
}