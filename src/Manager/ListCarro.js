import React, {useState, useEffect} from "react";
import { BASE_URL } from "../environment";

export default function ListCarro()
{
  console.log("Olá mundo!");
  const [carros, setCarros] = useState([]);
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  async function getCars() {
    try {
      const response = await fetch(BASE_URL + "/carros", request);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  useEffect(() => {
    async function fetchCars() {
      const data = await getCars();
      setCarros(data);
    }
    fetchCars();
  }, []);
  if (carros.length === 0) {
    return (<tr></tr>);
  }
  return (
    <div class="container mt-4">
        <h2>Productos</h2>
        <button></button>
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Foto</th>
                    <th>Valor</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {carros.map((carro, index) => (
                  <tr key={index}>
                    <td>{carro.nome}</td>
                    <td>{carro.marca}</td>
                    <td><img src={carro.foto}/></td>
                    <td>{carro.valor}</td>
                    <td>Editar - Apagar</td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  );
}