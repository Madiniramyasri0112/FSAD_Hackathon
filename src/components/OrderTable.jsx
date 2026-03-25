function OrderTable({ orders, setSelected, deleteOrder }) {
  return (
    <div className="mt-4">
      <h3 className="mb-3">Orders</h3>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Supplier</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.supplier}</td>
                <td>{o.product}</td>
                <td>{o.quantity}</td>
                <td>{o.date}</td>
                <td>
                  <button
                    onClick={() => setSelected(o)}
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteOrder(o.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTable;