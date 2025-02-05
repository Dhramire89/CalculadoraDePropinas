import { useCallback, useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
};
export default function OrderTotals({ order, tip }: OrderTotalProps) {
  // esta funcion esta con UseMemo
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  // este es un ejemplo con UseCallback, tienen la misma funcion, pero la estructura es diferente, usa () para las funciones
  // ejecuta el codigo solamente cuando cambien las dependecias "tip y order"
  const tipAmount = useCallback(() => subTotalAmount * tip, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina: </h2>
        <p>
          {" "}
          Subtotal a pagar:{" "}
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          {" "}
          Propina:{" "}
          <span className="font-bold"> {formatCurrency(tipAmount())}</span>
        </p>
        <p>
          {" "}
          Total a pagar:{" "}
          <span className="font-bold">
            {" "}
            {formatCurrency(subTotalAmount + tipAmount())}
          </span>
        </p>
      </div>
    </>
  );
}
