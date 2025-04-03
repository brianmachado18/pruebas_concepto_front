// src/pages/Login.jsx
import React, { useState } from 'react';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Usuario: ${usuario} | Contraseña: ${contrasena}`);
    }

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        a:hover {
          color: inherit;
          text-decoration: none;
        }
      `}</style>

            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="card shadow" style={{ maxWidth: '480px', width: '100%', borderRadius: '12px' }}>
                    <img
                        src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1050&q=80"
                        className="card-img-top"
                        alt="Fondo"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h2 className="mb-4 text-center">Iniciar Sesión</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <div className="position-relative">
                                    <input type="password" className="form-control" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} requireds />
                                </div>
                            </div>
                            <button className="btn btn-success w-100 mb-3" style={{ backgroundColor: '#000', color: '#fff' }}>Iniciar Sesión</button>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <input type="checkbox" id="rememberMe" />
                                    <label htmlFor="rememberMe" className="ms-2">Recordar</label>
                                </div>
                                <a href="#0">¿Olvidaste tu Contraseña?</a>
                            </div>
                            <p className="mt-3 text-center">
                                ¿No tienes cuenta? <a href="#0">Regístrate</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
