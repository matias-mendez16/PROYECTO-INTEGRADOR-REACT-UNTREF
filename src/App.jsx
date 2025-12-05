import { useState } from "react";
import UserForm from "./components/UserForm";
import ServiceOptions from "./components/ServiceOptions";
import QuoteResult from "./components/QuoteResult";
import ComparisonTable from "./components/ComparisonTable";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [selection, setSelection] = useState(null);

  return (
    <div className="app">
      <img
        className="logo"
        src={`${import.meta.env.BASE_URL}Logo-PLANMIX.png`}
        alt="logo"
      />

      {/* Tabla comparativa */}
      <ComparisonTable />

      {/* Opciones de servicios */}
      <ServiceOptions onSelect={setSelection} />

      {/* Resultado seleccion de planes */}
      {selection && <QuoteResult selection={selection} />}

      {/* Formulario */}
      <UserForm onSubmit={setUser} selection={selection} />
    </div>
  );
}

export default App;
