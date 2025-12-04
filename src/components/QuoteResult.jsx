export default function QuoteResult({ selection }) {
  if (!selection) return null;

  const chosenPlans = Object.values(selection).filter((plan) => plan !== null);
  const subtotal = chosenPlans.reduce((acc, plan) => acc + plan.price, 0);

  let discount = 0;
  if (chosenPlans.length === 2) discount = 0.1;
  if (chosenPlans.length === 3) discount = 0.2;

  const total = subtotal - subtotal * discount;

  return (
    <div className="quote">
      <h2>Resumen de Cotización</h2>
      <ul>
        {chosenPlans.map((plan, i) => (
          <li key={i}>{plan.name} - ${plan.price}</li>
        ))}
      </ul>
      <p>Subtotal: ${subtotal}</p>
      <p>Descuento: {discount * 100}%</p>
      <h3>Total: ${total}</h3>
    </div>
  );
}
