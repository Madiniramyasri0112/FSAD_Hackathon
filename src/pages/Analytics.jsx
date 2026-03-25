function Analytics({ orders }) {

  const totalOrders = orders.length;

  const totalQuantity = orders.reduce(
    (sum, o) => sum + Number(o.quantity),
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Analytics</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text display-4">{totalOrders}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Quantity</h5>
              <p className="card-text display-4">{totalQuantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;