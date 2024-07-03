// Agregar.jsx


const Agregar = ({ clientes, setClientes, isEditing, setIsEditing, editIndex, setEditIndex, form, setForm }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedClientes = clientes.map((cliente, index) =>
        index === editIndex ? form : cliente
      );
      setClientes(updatedClientes);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setClientes([...clientes, form]);
    }
    setForm({
      tipoCuenta: '',
      nombreApellido: '',
      cuit: '',
      direccion: '',
      telefono: '',
      email: ''
    });
  };

  return { handleChange, handleSubmit, form, isEditing };
};

export default Agregar;
