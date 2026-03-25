import { useState, useEffect } from "react";
import axios from "axios";

import OrderForm from "../components/OrderForm";
import OrderTable from "../components/OrderTable";
import SearchBar from "../components/SearchBar";
import Analytics from "./Analytics";

// 🔥 BACKEND URL HERE
const BASE_URL = "http://localhost:8080/orders";

function Dashboard({ setIsLoggedIn }) {
  const [orders, setOrders] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  // 🔥 GET
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      const data = Array.isArray(response.data) ? response.data : [];
      setOrders(data);
      setFiltered(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      alert("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 ADD / UPDATE
  const addOrUpdateOrder = async (order) => {
    try {
      if (order.id) {
        await axios.put(`${BASE_URL}/${order.id}`, order);
      } else {
        await axios.post(BASE_URL, order);
      }

      await fetchOrders(); // refresh data
      setSelected(null);

      alert(order.id ? "Order updated successfully!" : "Order added successfully!");

    } catch (error) {
      console.error("Error saving order:", error);
      alert("Backend error or CORS issue");
    }
  };

  // 🔥 DELETE
  const deleteOrder = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      await fetchOrders();
      alert("Order deleted successfully!");
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete order");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand">Supplier Order App</span>

          <div className="navbar-nav d-flex gap-2">
            <button
              className={`nav-link btn ${view === "dashboard" ? "active" : ""}`}
              onClick={() => setView("dashboard")}
            >
              Dashboard
            </button>

            <button
              className={`nav-link btn ${view === "analytics" ? "active" : ""}`}
              onClick={() => setView("analytics")}
            >
              Analytics
            </button>

            <button
              className="nav-link btn btn-danger"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {view === "dashboard" ? (
        <div className="container mt-5">
          <h1 className="mb-4 text-center">Dashboard</h1>

          {loading && (
            <div className="alert alert-info text-center">
              Loading orders...
            </div>
          )}

          <div className="row">
            <div className="col-md-6">
              <OrderForm selected={selected} save={addOrUpdateOrder} />
            </div>

            <div className="col-md-6">
              <SearchBar orders={orders} setFiltered={setFiltered} />

              <OrderTable
                orders={filtered}
                setSelected={setSelected}
                deleteOrder={deleteOrder}
              />
            </div>
          </div>
        </div>
      ) : (
        <Analytics orders={orders} />
      )}
    </div>
  );
}

export default Dashboard;