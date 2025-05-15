import { useState, useEffect, useMemo, useCallback } from 'react';
import ProductForm from './componentes/ProductForm';
import ProductList from './componentes/ProductList';
import SearchBar from './componentes/SearchBar';
function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [productoEditado, setProductoEditado] = useState(null);

  useEffect(() => {
    console.log('Productos actualizados:', productos);
  }, [productos]);

  const agregarProducto = useCallback((producto) => {
    setProductos(prev => [...prev, { ...producto, id: Date.now() }]);
  }, []);

  const editarProducto = useCallback((productoActualizado) => {
    setProductos(prev =>
      prev.map(p => (p.id === productoActualizado.id ? productoActualizado : p))
    );
    setProductoEditado(null);
  }, []);

  const eliminarProducto = useCallback((id) => {
    setProductos(prev => prev.filter(p => p.id !== id));
  }, []);

  const productosFiltrados = useMemo(() => {
    return productos.filter(p =>
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.id.toString().includes(busqueda)
    );
  }, [productos, busqueda]);

  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <ProductForm
        onAgregar={agregarProducto}
        onEditar={editarProducto}
        productoEditado={productoEditado}
      />
      <ProductList
        productos={productosFiltrados}
        onEliminar={eliminarProducto}
        onEditarSelect={setProductoEditado}
      />
    </div>
  );
}

export default App;


