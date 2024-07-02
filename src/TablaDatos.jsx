// TablaDatos.jsx
import React from 'react';
import './Estilos/Tabla.css';
import Botones from './Botones';

const TablaDatos = ({ clientes, handleEdit, handleDelete }) => {
  return (
    <div className="mt-5">
      <table className="table table-bordered" id='contenedor'>
        <thead>
          <tr>
            <th>Nombre y Apellido</th>
            <th>CUIT</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Tipo de Cuenta</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes && clientes.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nombreApellido}</td>
              <td>{cliente.cuit}</td>
              <td>{cliente.email}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.tipoCuenta}</td>
              <td>{cliente.telefono}</td>
              <td>
                <Botones index={index} handleEdit={handleEdit} handleDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatos;
