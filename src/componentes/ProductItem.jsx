function ProductItem({ producto, onEliminar, onEditarSelect }) {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.descripcion}</td>
      <td>${producto.precioUnitario}</td>
      <td>{producto.descuento}%</td>
      <td>${producto.precioConDescuento.toFixed(2)}</td>
      <td>{producto.stock}</td>
      <td>
        <button onClick={() => onEditarSelect(producto)}>Editar</button>
        <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default ProductItem;
