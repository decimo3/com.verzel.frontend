import React, { useState, useEffect } from 'react';
import { Carro } from '../Models/Carro';

const EditModal = ({ objectData, onClose }) => {
  console.dir(objectData);
  
  const obj = {
    Nome: objectData.nome,
    Foto: objectData.foto,
    Marca: objectData.marca,
    Valor: objectData.valor
  }
  console.log(obj);

  const [showModal, setShowModal] = useState(true);
  const [nome, setNome] = useState(obj.Nome || ''); // Provide an initial default value
  const [foto, setFoto] = useState(obj.Foto || ''); // Provide an initial default value
  const [marca, setMarca] = useState(obj.Marca || ''); // Provide an initial default value
  const [valor, setValor] = useState(obj.Valor || ''); // Provide an initial default value

  useEffect(() => {
    setNome(obj.Nome || ''); // Provide an initial default value
    setFoto(obj.Foto || ''); // Provide an initial default value
    setMarca(obj.Marca || ''); // Provide an initial default value
    setValor(obj.Valor || ''); // Provide an initial default value
  }, [objectData]);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  async function PutCars(editedCarro) {
    const edit = JSON.stringify(editedCarro);
    const request = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: edit
    };
    try {
      const response = await fetch(BASE_URL + "/carros", request);
      return await response.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const editedCarro = new Carro(nome, marca, foto, valor);
    console.log(editedCarro);
    PutCars(editedCarro)
  };

  return (
    <>
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Carro</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label>Nome:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Marca:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={marca}
                      onChange={(e) => setMarca(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Foto:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={foto}
                      onChange={(e) => setFoto(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Valor:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;