// Inicio.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./Banner";
import List from "./List";
import { BASE_URL } from "../environment";

async function getCars() {
  try {
    const response = await axios.get(BASE_URL + "/carros");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function Inicio() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const data = await getCars();
      setCarros(data);
    }
    fetchCars();
  }, []);

  if (carros.length === 0) {
    return (
      <div>
        <h1>Erro na internet!</h1>
        <p>Por algum motivo a requisição não pode ser concluída.</p>
      </div>
    );
  }

  return (
    <div className="container pb-3">
      <Banner />
      {carros.map((carro, index) => (
        <List key={index} carro={carro} />
      ))}
    </div>
  );
}
