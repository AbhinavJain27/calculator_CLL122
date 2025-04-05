import React, { useState } from "react";
import { Collapse } from "react-collapse";

function MixedReactorCalculator() {
  const [reactors, setReactors] = useState([]);
  const [connectionType, setConnectionType] = useState("series");
  const [results, setResults] = useState(null);

  const handleAddReactor = (type) => {
    if (reactors.length < 7) {
      setReactors([...reactors, { type, id: Date.now(), inputs: {}, open: true }]);
    }
  };

  const handleRemoveReactor = (id) => {
    setReactors(reactors.filter((r) => r.id !== id));
  };

  const handleInputChange = (id, name, value) => {
    setReactors((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, inputs: { ...r.inputs, [name]: parseFloat(value) || "" } } : r
      )
    );
  };

  const toggleAccordion = (id) => {
    setReactors((prev) =>
      prev.map((r) => (r.id === id ? { ...r, open: !r.open } : r))
    );
  };

  const renderInputs = (reactor) => {
    const optionalStyle = { opacity: 0.7 };

    return (
      <div>
        <input
          type="number"
          placeholder="Flow Rate (mol/s)"
          onChange={(e) => handleInputChange(reactor.id, "flowRate", e.target.value)}
        />
        <input
          type="number"
          placeholder="Rate Constant (1/s)"
          onChange={(e) => handleInputChange(reactor.id, "rateConstant", e.target.value)}
        />
        <input
          type="number"
          placeholder="Initial Concentration (mol/L)"
          onChange={(e) => handleInputChange(reactor.id, "initialConcentration", e.target.value)}
        />
        <input
          type="number"
          placeholder="Volume (L)"
          onChange={(e) => handleInputChange(reactor.id, "volume", e.target.value)}
        />
        <input
          type="number"
          placeholder="Heat Capacity (J/mol*K) - optional"
          style={optionalStyle}
          onChange={(e) => handleInputChange(reactor.id, "heatCapacity", e.target.value)}
        />
        <input
          type="number"
          placeholder="Enthalpy Change (J/mol) - optional"
          style={optionalStyle}
          onChange={(e) => handleInputChange(reactor.id, "enthalpyChange", e.target.value)}
        />
      </div>
    );
  };

  const handleCalculate = () => {
    let overallConversion = 0;
    let exitConcentration = 0;
    let tempChange = 0;

    let inputConc = reactors[0]?.inputs?.initialConcentration || 1;
    let flow = reactors[0]?.inputs?.flowRate || 1;
    let currentConc = inputConc;

    reactors.forEach((r) => {
      const { volume, rateConstant, heatCapacity, enthalpyChange } = r.inputs;
      if (volume && rateConstant) {
        let conv = 1 - Math.exp((-rateConstant * volume) / flow);
        overallConversion += conv / reactors.length;
        currentConc = inputConc * (1 - conv);

        if (heatCapacity && enthalpyChange) {
          tempChange += (enthalpyChange * conv) / heatCapacity;
        }
      }
    });

    setResults({ conversion: overallConversion, exitConc: currentConc, tempChange });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mixed Reactor Calculator</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Connection Type: </label>
        <select value={connectionType} onChange={(e) => setConnectionType(e.target.value)}>
          <option value="series">Series</option>
          <option value="parallel">Parallel</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Add Reactor: </label>
        <select onChange={(e) => handleAddReactor(e.target.value)} defaultValue="">
          <option value="" disabled>
            Select Reactor Type
          </option>
          <option value="CSTR">CSTR</option>
          <option value="PFR">PFR</option>
          <option value="PBR">PBR</option>
          <option value="Batch">Batch Reactor</option>
        </select>
      </div>

      {reactors.map((reactor, index) => (
        <div key={reactor.id} style={{ border: "1px solid #ccc", margin: "10px 0" }}>
          <div
            onClick={() => toggleAccordion(reactor.id)}
            style={{ cursor: "pointer", background: "#eee", padding: "10px" }}
          >
            <strong>
              Reactor {index + 1}: {reactor.type} (Click to {reactor.open ? "Collapse" : "Expand"})
            </strong>
          </div>
          <Collapse isOpened={reactor.open}>
            <div style={{ padding: "10px" }}>{renderInputs(reactor)}</div>
            <button onClick={() => handleRemoveReactor(reactor.id)}>Remove</button>
          </Collapse>
        </div>
      ))}

      {reactors.length > 0 && <button onClick={handleCalculate}>Calculate</button>}

      {results && (
        <div style={{ marginTop: "20px" }}>
          <h3>Results:</h3>
          <p>Overall Conversion: {results.conversion.toFixed(3)}</p>
          <p>Exit Concentration: {results.exitConc.toFixed(3)} mol/L</p>
          <p>Temperature Change: {results.tempChange.toFixed(2)} K</p>
        </div>
      )}
    </div>
  );
}

export default MixedReactorCalculator;
