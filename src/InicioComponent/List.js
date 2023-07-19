// List.js

import React from "react";
import "./List.css";

export default function List({ carro }) {
  return (
    <div className="list-container">
      <div className="car-image">
        <img src={carro.foto} alt="An Car Image" />
      </div>
      <div className="car-info">
        <span className="car-name">{carro.nome}</span>
        <span className="description">{carro.marca}</span>
        <span className="price">Valor: {carro.valor}</span>
        <span className="whatsapp">Fale diretamente com o vendedor:</span>
        <span className="whatsapp-number">
          <i className="bi bi-whatsapp"></i> +55 99 99999-9999
        </span>
      </div>
    </div>
  );
}
