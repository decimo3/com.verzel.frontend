import React from "react";
export default function List(prop) {
  return (
    <div className="row p-3">
      <div className="col-4 border p-3">
        <img></img>
      </div>
      <div className="col-8 d-flex flex-column">
        <span className="py-2">{prop.carName} Ford Ka</span>
        <span className="description">{prop.Description}</span>
        <span className="preço">{prop.valor}</span>
        <span className="whatsapp">Fale diretamente com o vendedor:</span>
        <span className=""><i className="bi bi-whatsapp"></i> +55 99 99999-9999</span>
      </div>
    </div>
  );
}