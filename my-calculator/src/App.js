import React, { useState } from "react";
import CSTRCalculator from "./CSTRCalculator";
import PFRCalculator from "./PFRCalculator";
import PBRCalculator from "./PBRCalculator";
import BatchReactor from "./BatchReactor";
import MixedReactorCalculator from './MixedReactorCalculator';
import "./styles.css";  // Optional: your custom CSS

function App() {
  const [selectedReactor, setSelectedReactor] = useState("CSTR");

  return (
    <div className="App">
      <h1>Reactor Calculator Dashboard</h1>

      {/* Dropdown to Select Reactor Type */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <label>Select Reactor Type: </label>
        <select value={selectedReactor} onChange={(e) => setSelectedReactor(e.target.value)}>
          <option value="CSTR">CSTR</option>
          <option value="PFR">PFR</option>
          <option value="PBR">PBR</option>
          <option value="Batch">Batch Reactor</option>
          <option value="Mixed">Mixed Reactors</option>
        </select>
      </div>

      <hr />

      {/* Display the Selected Reactor Component */}
      {selectedReactor === "CSTR" && <CSTRCalculator />}
      {selectedReactor === "PFR" && <PFRCalculator />}
      {selectedReactor === "PBR" && <PBRCalculator />}
      {selectedReactor === "Batch" && <BatchReactor />}
      {selectedReactor === "Mixed" && <MixedReactorCalculator />}
    </div>
  );
}

export default App;
