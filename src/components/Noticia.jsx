import React from "react";
import "../css/Noticia.css";

export default function Noticia() {
  return (
    <div className="noticia">
      <div className="img-noticia">
        <img src="https://media.istockphoto.com/id/1154151207/es/foto/autob%C3%BAs-blanco-viajando-en-la-carretera-de-asfalto-alrededor-de-la-l%C3%ADnea-de-%C3%A1rboles-en-el.jpg?s=1024x1024&w=is&k=20&c=Hevl2hHX2-vwI85_h7fvyBtlchdB-THxxIDmwm04M_o=" />
      </div>
      <div className="noticia-overlay">
        <div className="info-noticia">
          <h3>Noticia</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos
            vehicula, aliquet felis risus neque scelerisque praesent purus justo
            nisi, ridiculus netus quisque bibendum cubilia tellus nisl nunc.
          </p>
        </div>
      </div>
    </div>
  );
}
