export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("en-Us", {
    // al formato al que queremos formatear
    style: "currency",
    currency: "USD", // formatea a la modeda de dolar
  }).format(quantity);
}
