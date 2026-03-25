import { useState, useEffect } from "react";

function OrderForm({ selected, save }) {

 const [order, setOrder] = useState({
  supplier: "",
  product: "",
  quantity: "",
  date: ""
});

  useEffect(() => {
    if (selected && selected.id) {
      // eslint-disable-next-line
      setOrder(selected);
    }
  }, [selected]);

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (save) {
      save(order);
    }

    setOrder({
      supplier: "",
      product: "",
      quantity: "",
      date: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
      <h3 className="mb-4 text-center">{order.id ? "Update Order" : "Add Order"}</h3>

      <div className="mb-3">
        <label htmlFor="supplier" className="form-label">Supplier</label>
        <input
          id="supplier"
          name="supplier"
          value={order.supplier}
          onChange={handleChange}
          placeholder="Supplier"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="product" className="form-label">Product</label>
        <input
          id="product"
          name="product"
          value={order.product}
          onChange={handleChange}
          placeholder="Product"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          value={order.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={order.date}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {order.id ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default OrderForm;