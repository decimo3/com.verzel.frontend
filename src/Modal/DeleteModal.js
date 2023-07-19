import React, { useState } from 'react';

const DeleteModal = ({ objectData, onClose }) => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  const DeleteCarro = (carro) => {
    console.log(carro);
  }

  return (
    <>
      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="modal-body">
              <h3>Realmente deseja apagar esse carro?</h3>
              <ul>
                {Object.entries(objectData).map(([key, value]) => (
                  <div>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </ul>
              <button className="btn btn-primary" onClick={() => DeleteCarro(objectData)}>Apagar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
