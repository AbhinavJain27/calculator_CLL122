import React, { useState } from "react";
import Plot from "react-plotly.js";

function PBRCalculator() {
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState({});
  const [plotData, setPlotData] = useState([]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: parseFloat(e.target.value) || "" });
  };

  const calculatePBR = () => {
    let { flowRate, rateConstant, initialConcentration, heatCapacity, enthalpyChange } = inputs;
    let newResults = {};
    let volumeData = [];
    let conversionData = [];
    let tempData = [];
    
    if (flowRate > 0 && rateConstant > 0 && initialConcentration > 0) {
      for (let V = 0; V <= 10; V += 0.5) {
        const X = 1 - initialConcentration / (initialConcentration + rateConstant * V);
        volumeData.push(V);
        conversionData.push((X * 100).toFixed(2));
      }
      newResults.volume = (initialConcentration / (rateConstant * (1 - 0.5))).toFixed(2);
      newResults.conversion = conversionData[conversionData.length - 1];
    }

    if (heatCapacity > 0 && enthalpyChange > 0) {
      for (let V = 0; V <= 10; V += 0.5) {
        let T_change = ((enthalpyChange * (conversionData[V] || 0)) / heatCapacity).toFixed(2);
        tempData.push(T_change);
      }
      newResults.temperatureChange = tempData[tempData.length - 1];
    }

    setResults(newResults);
    setPlotData([
      {
        x: volumeData,
        y: conversionData,
        type: "scatter",
        mode: "lines+markers",
        name: "Conversion vs. Volume"
      },
      {
        x: volumeData,
        y: tempData,
        type: "scatter",
        mode: "lines+markers",
        name: "Temperature vs. Volume"
      }
    ]);
  };

  return (
    <div className="container">
      <h2>Packed Bed Reactor (PBR) Calculator</h2>
      
      <div className="input-container">
        <label>Flow Rate (mol/s):</label>
        <input type="number" name="flowRate" onChange={handleChange} placeholder="Enter flow rate" />
      </div>
      
      <div className="input-container">
        <label>Rate Constant (1/s):</label>
        <input type="number" name="rateConstant" onChange={handleChange} placeholder="Enter rate constant" />
      </div>
      
      <div className="input-container">
        <label>Initial Concentration:</label>
        <input type="number" name="initialConcentration" onChange={handleChange} placeholder="Enter initial concentration" />
      </div>
      
      <div className="input-container">
        <label>Heat Capacity (J/mol*K):</label>
        <input type="number" name="heatCapacity" onChange={handleChange} placeholder="Optional" />
      </div>
      
      <div className="input-container">
        <label>Enthalpy Change (J/mol):</label>
        <input type="number" name="enthalpyChange" onChange={handleChange} placeholder="Optional" />
      </div>
      
      <button onClick={calculatePBR}>Calculate</button>

      {Object.keys(results).length > 0 && (
        <div className="results">
          <h3>Results:s</h3>
          {results.volume && <p>Reactor Volume Required: {results.volume} L</p>}
          {results.conversion && <p>Conversion: {results.conversion}%</p>}
          {results.temperatureChange && <p>Temperature Change: {results.temperatureChange} K</p>}
        </div>
      )}

      {plotData.length > 0 && (
        <Plot
          data={plotData}
          layout={{ title: "Reactor Performance", xaxis: { title: "Volume (L)" }, yaxis: { title: "Conversion / Temperature" } }}
        />
      )}
    </div>
  );
}

export default PBRCalculator;