import ProductItem from './ProductItem';

function ProductList({ productos, onEliminar, onEditarSelect }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <table className="tabla-productos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Precio con descuento</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <ProductItem
              key={producto.id}
              producto={producto}
              onEliminar={onEliminar}
              onEditarSelect={onEditarSelect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
