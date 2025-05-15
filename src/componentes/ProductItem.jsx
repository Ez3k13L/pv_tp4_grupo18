function ProductItem({ producto, onEliminar, onEditarSelect }) {
  return (
    <div className="producto">
      <p><strong>ID:</strong> {producto.id}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precioUnitario}</p>
      <p><strong>Descuento:</strong> {producto.descuento}%</p>
      <p><strong>Precio con descuento:</strong> ${producto.precioConDescuento.toFixed(2)}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <button onClick={() => onEditarSelect(producto)}>Editar</button>
      <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
    </div>
  );
}

export default ProductItem;
