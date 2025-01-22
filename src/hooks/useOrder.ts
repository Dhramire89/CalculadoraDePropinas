import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id); // nos dice si lo encontro o NO
    if (itemExist) {
      const updateOrder = order.map(
        (orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 } // toma una copia de lo que existe en la orden y suma una a cantidad
            : orderItem // si no mantiene la orden
      );
      setOrder(updateOrder); // actualizamos el setOrder
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  return {
    addItem,
  };
}
