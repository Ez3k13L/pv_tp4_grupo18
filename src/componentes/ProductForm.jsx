import { useState, useEffect } from 'react';

function ProductForm({ onAgregar, onEditar, productoEditado }) {
  const [form, setForm] = useState({
    descripcion: '',
    precioUnitario: '',
    descuento: '',
    stock: ''
  });

  useEffect(() => {
    if (productoEditado) {
      setForm(productoEditado);
    }
  }, [productoEditado]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        if (
      form.descripcion.trim() === '' ||
      form.precioUnitario <= 0 ||
      form.descuento < 0 ||
      form.stock < 0
    ) {
      alert('Revisá los datos ingresados: no pueden estar vacíos ni ser negativos.');
      return;
    }
    const precioConDescuento =
      form.precioUnitario * (1 - form.descuento / 100);

    const producto = {
      ...form,
      precioUnitario: parseFloat(form.precioUnitario),
      descuento: parseFloat(form.descuento),
      stock: parseInt(form.stock),
      precioConDescuento
    };

    if (productoEditado) {
      onEditar({ ...producto, id: productoEditado.id });
    } else {
      onAgregar(producto);
    }

    setForm({
      descripcion: '',
      precioUnitario: '',
      descuento: '',
      stock: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{productoEditado ? 'Editar' : 'Agregar'} Producto</h2>
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="precioUnitario"
        placeholder="Precio Unitario"
        value={form.precioUnitario}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="descuento"
        placeholder="Descuento (%)"
        value={form.descuento}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
        required
      />
      <button type="submit">{productoEditado ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
  
}

export default ProductForm;
