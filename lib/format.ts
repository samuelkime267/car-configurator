export function formatToDollarPrice(amount: number) {
  if (isNaN(amount)) {
    throw new Error("Input must be a number");
  }

  return `$${Number(amount)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
