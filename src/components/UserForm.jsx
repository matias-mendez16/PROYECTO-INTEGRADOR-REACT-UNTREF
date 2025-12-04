import { useState, useEffect } from "react";

export default function UserForm({ onSubmit, selection }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
    medioPago: "Medio de Pago",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.telefono) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    onSubmit(formData);
    setSubmitted(true); 
  };

  // 👇 useEffect alert 
  useEffect(() => {
    if (submitted) {
      const chosenPlans = selection
        ? Object.values(selection).filter((plan) => plan !== null)
        : [];

      let subtotal = chosenPlans.reduce((acc, plan) => acc + plan.price, 0);

      // Descuentos 
      let discount = 0;
      if (chosenPlans.length === 2) discount = 0.1;
      if (chosenPlans.length === 3) discount = 0.2;

      const total = subtotal - subtotal * discount;

      const paquetes = chosenPlans.length
        ? chosenPlans.map((plan) => `${plan.name} - $${plan.price}`).join("\n")
        : "No seleccionaste ningún paquete";

      const timer = setTimeout(() => {
        alert(
          `Datos ingresados:\n
Nombre: ${formData.nombre}
Apellido: ${formData.apellido}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Mensaje: ${formData.mensaje}
Medio de pago: ${formData.medioPago}\n
Paquetes seleccionados:\n${paquetes}
Total a pagar: $${total}`
        );
        setSubmitted(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [submitted, formData, selection]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Datos del Usuario</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={formData.apellido}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
      />

      <select
        name="medioPago"
        value={formData.medioPago}
        onChange={handleChange}
      >
        <option value="">Medio de Pago</option>
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta">Tarjeta</option>
      </select>

      <textarea
        name="mensaje"
        placeholder="Mensaje"
        value={formData.mensaje}
        onChange={handleChange}
      />


      <button type="submit">Enviar</button>
    </form>
  );
}
