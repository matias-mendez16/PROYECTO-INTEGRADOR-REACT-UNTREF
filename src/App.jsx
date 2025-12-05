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
    <>
    <img src="/Logo-PLANMIX.png" alt="Logo PLANMIX" />
    <div className="app">

      {/* Tabla comparativa */}
      <ComparisonTable />

      {/* Opciones de servicios */}
      <ServiceOptions onSelect={setSelection} />

      {/* Resultado seleccion de planes */}
      {selection && <QuoteResult selection={selection} />}

      {/* Formulario */}
      <UserForm onSubmit={setUser} selection={selection} />
    </div>
    </>
  );
}

export default App;
