function SearchBar({ busqueda, setBusqueda }) {
    return (
      <input
        type="text"
        placeholder="Buscar por descripción o ID"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  