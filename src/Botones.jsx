// Botones.jsx
import React from 'react';

const Botones = ({ index, handleEdit, handleDelete }) => {
  return (
    <>
      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Editar</button>
      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Eliminar</button>
    </>
  );
};

export default Botones;
