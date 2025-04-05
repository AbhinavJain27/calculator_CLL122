import React, { useState } from "react";

function CSTRCalculator() {
  const [flowRate, setFlowRate] = useState("");
  const [rateConstant, setRateConstant] = useState("");
  const [initialConcentration, setInitialConcentration] = useState("");
  const [volume, setVolume] = useState(null);
  const [conversion, setConversion] = useState(null);
  const [residenceTime, setResidenceTime] = useState(null);
  const [reactionRate, setReactionRate] = useState(null);

  const calculateCSTR = () => {
    const F = parseFloat(flowRate);
    const k = parseFloat(rateConstant);
    const C0 = parseFloat(initialConcentration);

    if (F > 0 && k > 0 && C0 > 0) {
      const V = C0 / (k * (1 - 0.5)); // Assume 50% conversion
      setVolume(V.toFixed(2));

      const X = 1 - (C0 / (C0 + k * V)); // Simple CSTR conversion
      setConversion((X * 100).toFixed(2));
      
      const tau = V / F; // Residence time calculation
      setResidenceTime(tau.toFixed(2));

      const r = k * (C0 * (1 - X)); // Rate of reaction
      setReactionRate(r.toFixed(2));
    } else {
      alert("Please enter valid inputs!");
    }
  };

  return (
    <div className="container"> 
      <h2>CSTR Reactor Calculator</h2>
      
      <div className="input-container">
        <label>Flow Rate (mol/s):</label>
        <input
          type="number"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
          placeholder="Enter flow rate"
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
        <label>Initial Concentration:</label>
        <input
          type="number"
          value={initialConcentration}
          onChange={(e) => setInitialConcentration(e.target.value)}
          placeholder="Enter initial concentration"
          required
        />
      </div>

      <button onClick={calculateCSTR}>Calculate</button>

      {volume !== null && (
        <div className="results">
          <h3>Results:</h3>
          <p>Reactor Volume Required: {volume} L</p>
          <p>Conversion: {conversion}%</p>
          <p>Residence Time: {residenceTime} s</p>
          <p>Rate of Reaction: {reactionRate} mol/L.s</p>
        </div>
      )}
    </div>
  );
}

export default CSTRCalculator;