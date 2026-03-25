function SearchBar({ orders, setFiltered }) {
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = orders.filter(
      (o) =>
        o.supplier.toLowerCase().includes(value) ||
        o.product.toLowerCase().includes(value)
    );

    setFiltered(filtered);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Search orders..."
        onChange={handleSearch}
        className="form-control"
      />
    </div>
  );
}

export default SearchBar;