import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
      <style>{`
        .Fondo {
          background-color: #f8f9fd
        }
      `}</style>
      <div class="Fondo">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
