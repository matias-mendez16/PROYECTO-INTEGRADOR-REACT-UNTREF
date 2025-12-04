import { useState } from "react";

const services = {
  tv: [
    { name: "TV Básico", price: 2000 },
    { name: "TV Premium", price: 4000 },
    { name: "TV Full HD", price: 6000 },
  ],
  wifi: [
    { name: "WiFi 50MB", price: 3000 },
    { name: "WiFi 100MB", price: 5000 },
    { name: "WiFi 200MB", price: 7000 },
  ],
  Móvil: [
    { name: "Móvil 5GB", price: 2500 },
    { name: "Móvil 10GB", price: 4500 },
    { name: "Móvil 20GB", price: 6500 },
  ],
};

export default function ServiceOptions({ onSelect }) {
  const [selected, setSelected] = useState({ tv: null, wifi: null, Móvil: null });

  const handleChange = (type, plan) => {
    const newSelection = { ...selected, [type]: plan };
    setSelected(newSelection);
    onSelect(newSelection);
  };

  return (
    <div className="services">
      <h2>Selecciona tus planes</h2>
      {Object.keys(services).map((type) => (
        <div key={type} className="service-block">
          <h3>{type.toUpperCase()}</h3>
          {services[type].map((plan, index) => (
            <label key={index}>
              <input
                type="radio"
                name={type}
                value={plan.price}
                onChange={() => handleChange(type, plan)}
              />
              {plan.name} - ${plan.price}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
