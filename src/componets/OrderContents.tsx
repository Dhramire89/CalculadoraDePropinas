import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div>
        {order.length === 0 ? (
          <p className="text-center">La orden esta vacia</p>
        ) : (
          order.map((item) => (
            <div className="flex " key={item.id}>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <p className="font-black">${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
