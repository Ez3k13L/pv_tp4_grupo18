import ProductItem from './ProductItem';

function ProductList({ productos, onEliminar, onEditarSelect }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.map(producto => (
        <ProductItem
          key={producto.id}
          producto={producto}
          onEliminar={onEliminar}
          onEditarSelect={onEditarSelect}
        />
      ))}
    </div>
  );
}

export default ProductList;
