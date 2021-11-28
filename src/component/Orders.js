import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { db } from "../firebase";
import Order from "./Order";
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            // Melihat semua order yang sudah diambil
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
              // data() menyimpan object masing2 item yang diorder
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <>
            <Order order={order} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Orders;
