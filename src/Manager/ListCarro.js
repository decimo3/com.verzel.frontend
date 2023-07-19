import React, { useState, useEffect } from "react";
import { BASE_URL } from "../environment";
import DeleteModal from "../Modal/DeleteModal";
import CreateModal from "../Modal/CreateModal";
import EditModal from "../Modal/EditModal";

export default function ListCarro() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [objectCreateData, setObjectCreateData] = useState({});
  const handleShowCreateModal = () => { setShowCreateModal(true); };
  const handleCloseCreateModal = () => { setShowCreateModal(false); };
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [objectDeleteData, setObjectDeleteData] = useState({});
  const handleShowDeleteModal = () => { setShowDeleteModal(true); };
  const handleCloseDeleteModal = () => { setShowDeleteModal(false); };

  const [showEditModal, setShowEditModal] = useState(false);
  const [objectEditData, setObjectEditData] = useState({});
  const handleShowEditModal = (carro) => {
    setShowEditModal(true);
    setObjectEditData(carro); // Pass the car data to the state variable
  };
  const handleCloseEditModal = () => { setShowEditModal(false); };

  const [carros, setCarros] = useState([]);

  async function getCars() {
    const request = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    try {
      const response = await fetch(BASE_URL + "/carros", request);
      return response.json();
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

  return (
    <div className="container mt-4">
      <h2>Productos</h2>
      <button className="" onClick={handleShowCreateModal}>Create</button>
      <table className="table">
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
              <td><img src={carro.foto} alt="Carro"/></td>
              <td>{carro.valor}</td>
              <td> 
                <a onClick={() => handleShowEditModal(carro)}>Editar</a> - 
                <a onClick={() => handleShowDeleteModal(carro)}>Apagar</a> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {showEditModal && (
          <EditModal objectData={objectEditData} onClose={handleCloseEditModal} />
        )}
        {showDeleteModal && (
          <DeleteModal objectData={objectDeleteData} onClose={handleCloseDeleteModal} />
        )}
        {showCreateModal && (
          <CreateModal objectData={objectCreateData} onClose={handleCloseCreateModal} />
        )}
      </div>
    </div>
  );
}
