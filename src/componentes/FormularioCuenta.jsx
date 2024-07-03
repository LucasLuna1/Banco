// FormularioCuenta.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Formulario.css'
import TablaDatos from './TablaDatos';
import Agregar from './Agregar';

const FormularioCuenta = () => {
  const [clientes, setClientes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({
    tipoCuenta: '',
    nombreApellido: '',
    cuit: '',
    direccion: '',
    telefono: '',
    email: ''
  });

  const handleEdit = (index) => {
    const cliente = clientes[index];
    setForm(cliente);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newClientes = clientes.filter((_, i) => i !== index);
    setClientes(newClientes);
  };

  const { handleChange, handleSubmit } = Agregar({
    clientes, setClientes, isEditing, setIsEditing, editIndex, setEditIndex, form, setForm
  });

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="tipoCuenta" className="form-label">Tipo de Cuenta</label>
              <select
                id="tipoCuenta"
                name="tipoCuenta"
                className="form-select"
                value={form.tipoCuenta}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Cuenta Corriente">Cuenta Corriente</option>
                <option value="Cuenta Sueldo">Cuenta Sueldo</option>
                <option value="Caja de Ahorro">Caja de Ahorro</option>
                <option value="Cuenta Única">Cuenta Única</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nombreApellido" className="form-label">Nombre y Apellido</label>
              <input
                type="text"
                id="nombreApellido"
                name="nombreApellido"
                className="form-control"
                value={form.nombreApellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cuit" className="form-label">CUIT</label>
              <input
                type="text"
                id="cuit"
                name="cuit"
                className="form-control"
                value={form.cuit}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion" className="form-label">Dirección</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                className="form-control"
                value={form.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                className="form-control"
                value={form.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-custom">{isEditing ? 'Aceptar' : 'Agregar'}</button>
            </div>
          </form>
        </div>
      </div>
      <TablaDatos clientes={clientes} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default FormularioCuenta;
