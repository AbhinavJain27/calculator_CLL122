import React, { useState } from "react";

function BatchReactorCalculator() {
  const [initialConcentration, setInitialConcentration] = useState("");
  const [rateConstant, setRateConstant] = useState("");
  const [time, setTime] = useState("");
  const [finalConcentration, setFinalConcentration] = useState(null);

  const calculateBatchReactor = () => {
    const C0 = parseFloat(initialConcentration);
    const k = parseFloat(rateConstant);
    const t = parseFloat(time);

    if (C0 > 0 && k > 0 && t > 0) {
      const Ct = C0 * Math.exp(-k * t); // First-order reaction assumption
      setFinalConcentration(Ct.toFixed(2));
    } else {
      alert("Please enter valid inputs!");
    }
  };

  return (
    <div className="container">
      <h2>Batch Reactor Calculator</h2>

      <div className="input-container">
        <label>Initial Concentration:</label>
        <input
          type="number"
          value={initialConcentration}
          onChange={(e) => setInitialConcentration(e.target.value)}
          placeholder="Enter initial concentration"
          required
        />
      </div>

      <div className="input-container">
        <label>Rate Constant (1/s):</label>
        <input
          type="number"
          value={rateConstant}
          onChange={(e) => setRateConstant(e.target.value)}
          placeholder="Enter rate constant"
          required
        />
      </div>

      <div className="input-container">
        <label>Reaction Time (s):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter reaction time"
          required
        />
      </div>

      <button onClick={calculateBatchReactor}>Calculate</button>

      {finalConcentration !== null && (
        <div className="results">
          <h3>Results:</h3>
          <p>Final Concentration: {finalConcentration} mol/L</p>
        </div>
      )}
    </div>
  );
}

export default BatchReactorCalculator;
