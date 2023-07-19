import React, { useState, useEffect } from 'react';
import { Carro } from '../Models/Carro';

const EditModal = ({ objectData, onClose }) => {
  console.dir(objectData);
  const obj = {
    Nome: objectData.Nome,
    Foto: objectData.Foto,
    Marca: objectData.Marca,
    Valor: objectData.Valor
  }
  console.log(obj);
  const [showModal, setShowModal] = useState(true);
  const [nome, setNome] = useState(objectData.Nome || ''); // Provide an initial default value
  const [foto, setFoto] = useState(objectData.Foto || ''); // Provide an initial default value
  const [marca, setMarca] = useState(objectData.Marca || ''); // Provide an initial default value
  const [valor, setValor] = useState(objectData.Valor || ''); // Provide an initial default value

  useEffect(() => {
    setNome(objectData.Nome || ''); // Provide an initial default value
    setFoto(objectData.Foto || ''); // Provide an initial default value
    setMarca(objectData.Marca || ''); // Provide an initial default value
    setValor(objectData.Valor || ''); // Provide an initial default value
  }, [objectData]);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const editedCarro = new Carro(nome, marca, foto, valor);
    console.log(editedCarro);
    // Add logic here to save the edited data to the server or perform any other action.
    // For example, you might want to call a function passed as a prop to handle the update.
    // The editedCarro object holds the updated data.
  };

  return (
    <>
      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
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
