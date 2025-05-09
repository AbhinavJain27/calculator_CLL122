import React, { useState, useEffect, useRef } from 'react';
import VolumeGraph from './VolumeGraph';

const inputStyle = {
  width: '95%',
  padding: '0.5em',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1em',
  color: '#333',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  cursor: 'pointer',
  marginBottom: '1em',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5em',
  color: '#27ae60',
  fontWeight: 'bold',
};

const sectionLabelStyle = (color) => ({
  display: 'block',
  marginBottom: '0.5em',
  color,
  fontWeight: 'bold',
});

function Calculator() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState('');
  const [reactants, setReactants] = useState([]);
  const [products, setProducts] = useState([]);
  const [showReaction, setShowReaction] = useState(false);
  const [reactionTemperature, setReactionTemperature] = useState('');
  const [rateConstant, setRateConstant] = useState('');
  const [reactorType, setReactorType] = useState('');
  const [volumetricFlowRate, setVolumetricFlowRate] = useState('');
  const [activationEnergy, setActivationEnergy] = useState('');
  const [epsilon, setEpsilon] = useState(null);
  const [initialConcentrations, setInitialConcentrations] = useState({});
  const [graphData, setGraphData] = useState(null);

  // Combine coefficients, Cp, molar flow rate into single state objects
  const [reactantData, setReactantData] = useState({});
  const [productData, setProductData] = useState({});

  const options = [
    { value: 'adiabatic', label: 'adiabatic reaction' },
    { value: 'noWork', label: 'no work done in reaction' },
  ];

  const phaseOptions = [
    { value: 'liquid', label: 'liquid' },
    { value: 'gaseous', label: 'gaseous' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (optionLabel) => {
    setSelectedOptions((prev) =>
      prev.includes(optionLabel) ? prev.filter((item) => item !== optionLabel) : [...prev, optionLabel]
    );
  };

  const addReactant = () => {
    const nextLetter = String.fromCharCode(65 + reactants.length);
    setReactants((prev) => [...prev, nextLetter]);
    setReactantData((prev) => ({ ...prev, [nextLetter]: { coefficient: '', cp: '', molarFlowRate: '' } }));
  };

  const addProduct = () => {
    const lastReactantCharCode = reactants.length ? reactants[reactants.length - 1].charCodeAt(0) : 64;
    const nextLetter = String.fromCharCode(lastReactantCharCode + 1 + products.length);
    setProducts((prev) => [...prev, nextLetter]);
    setProductData((prev) => ({ ...prev, [nextLetter]: { coefficient: '', cp: '' } }));
  };

  const handleReactantChange = (reactant, field, value) => {
    setReactantData((prev) => ({
      ...prev,
      [reactant]: { ...prev[reactant], [field]: value },
    }));
  };

  const handleProductChange = (product, field, value) => {
    setProductData((prev) => ({
      ...prev,
      [product]: { ...prev[product], [field]: value },
    }));
  };

  const handleProceed = () => setShowReaction(true);

  const formatSide = (elements, data) =>
    elements
      .map((el) => {
        const coeff = data[el]?.coefficient;
        return coeff && coeff !== '1' ? coeff + el : el;
      })
      .join('+');

  return (
    <section>
      <h1>Calculator</h1>
      <div>
        <label htmlFor="activationEnergyInput" style={labelStyle}>
          Activation Energy
        </label>
        <input
          id="activationEnergyInput"
          type="number"
          value={activationEnergy}
          onChange={(e) => setActivationEnergy(e.target.value)}
          style={inputStyle}
          placeholder="(KJ/mol)"
        />
      </div>
      <div>
        <label htmlFor="rateConstantInput" style={labelStyle}>
          Rate Constant
        </label>
        <input
          id="rateConstantInput"
          type="number"
          value={rateConstant}
          onChange={(e) => setRateConstant(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="phaseOfReactionDropdown" style={labelStyle}>
          Phase of Reaction
        </label>
        <select
          id="phaseOfReactionDropdown"
          value={selectedPhase}
          onChange={(e) => setSelectedPhase(e.target.value)}
          style={inputStyle}
        >
          <option value="" disabled>
            Select an option
          </option>
          {phaseOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="volumetricFlowRateInput" style={labelStyle}>
          Volumetric Flow Rate
        </label>
        <input
          id="volumetricFlowRateInput"
          type="number"
          value={volumetricFlowRate}
          onChange={(e) => setVolumetricFlowRate(e.target.value)}
          style={inputStyle}
          placeholder="Enter volumetric flow rate"
        />
      </div>
      <div>
        <label style={sectionLabelStyle('#27ae60')}>Add Reactant</label>
        <button onClick={addReactant} style={{ marginBottom: '0.5em' }}>
          Add
        </button>
        {reactants.map((reactant) => (
          <div key={reactant} style={{ marginBottom: '0.5em' }}>
            <span style={{ marginRight: '1em' }}>{reactant}</span>
            <input
              type="number"
              placeholder="Coefficient"
              value={reactantData[reactant]?.coefficient || ''}
              onChange={(e) => handleReactantChange(reactant, 'coefficient', e.target.value)}
              style={{ width: 100, marginRight: '1em' }}
            />
            <input
              type="number"
              placeholder="Cp (J/Kg*K)"
              value={reactantData[reactant]?.cp || ''}
              onChange={(e) => handleReactantChange(reactant, 'cp', e.target.value)}
              style={{ width: 100, marginRight: '1em' }}
            />
            <input
              type="number"
              placeholder="Molar Flow Rate"
              value={reactantData[reactant]?.molarFlowRate || ''}
              onChange={(e) => handleReactantChange(reactant, 'molarFlowRate', e.target.value)}
              style={{ width: 120 }}
            />
          </div>
        ))}
      </div>
      <div>
        <label style={sectionLabelStyle('#2980b9')}>Add Product</label>
        <button onClick={addProduct} style={{ marginBottom: '0.5em' }}>
          Add
        </button>
        {products.map((product) => (
          <div key={product} style={{ marginBottom: '0.5em' }}>
            <span style={{ marginRight: '1em' }}>{product}</span>
            <input
              type="number"
              placeholder="Coefficient"
              value={productData[product]?.coefficient || ''}
              onChange={(e) => handleProductChange(product, 'coefficient', e.target.value)}
              style={{ width: 100, marginRight: '1em' }}
            />
            <input
              type="number"
              placeholder="Cp (J/Kg*K)"
              value={productData[product]?.cp || ''}
              onChange={(e) => handleProductChange(product, 'cp', e.target.value)}
              style={{ width: 100 }}
            />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleProceed} style={{ padding: '0.5em 1em', fontWeight: 'bold' }}>
          Proceed
        </button>
      </div>
      {showReaction && (
        <div style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#c0392b' }}>
          Reaction: {formatSide(reactants, reactantData)} --> {formatSide(products, productData)}
        </div>
      )}
      <div>
        <label htmlFor="reactorTypeDropdown" style={labelStyle}>
          Choose the type of reactor
        </label>
        <select
          id="reactorTypeDropdown"
          value={reactorType}
          onChange={(e) => setReactorType(e.target.value)}
          style={inputStyle}
        >
          <option value="" disabled>
            Select a reactor type
          </option>
          <option value="CSTR reactor">CSTR reactor</option>
          <option value="PFR reactor">PFR reactor</option>
          <option value="PBR reactor">PBR reactor</option>
          <option value="Batch reactor">Batch reactor</option>
        </select>
      </div>
      <div>
        <button
          onClick={async () => {
            const sanitizeValues = (obj) => {
              const sanitized = {};
              for (const key in obj) {
                const val = obj[key]?.coefficient || obj[key] || '';
                let num = parseFloat(val);
                sanitized[key] = isNaN(num) ? 0 : num;
              }
              return sanitized;
            };

            const sanitizedReactantCoefficients = sanitizeValues(reactantData);
            const sanitizedProductCoefficients = sanitizeValues(productData);
            const sanitizedReactantMolarFlowRate = {};
            for (const key in reactantData) {
              let num = parseFloat(reactantData[key]?.molarFlowRate);
              sanitizedReactantMolarFlowRate[key] = isNaN(num) ? 0 : num;
            }

            setInitialConcentrations({});

            const payload = {
              reactorType,
              selectedPhase,
              reactants,
              reactantCoefficients: sanitizedReactantCoefficients,
              reactantCp: Object.fromEntries(
                Object.entries(reactantData).map(([k, v]) => [k, v.cp || ''])
              ),
              reactantMolarFlowRate: sanitizedReactantMolarFlowRate,
              products,
              productCoefficients: sanitizedProductCoefficients,
              productCp: Object.fromEntries(
                Object.entries(productData).map(([k, v]) => [k, v.cp || ''])
              ),
              reactionTemperature,
              rateConstant,
              activationEnergy,
              volumetricFlowRate,
              selectedOptions,
            };
            try {
              const response = await fetch('http://localhost:8000/calculate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              });
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              const data = await response.json();
              setEpsilon(data.epsilon);
              if (data.initialConcentrations) setInitialConcentrations(data.initialConcentrations);
            } catch (error) {
              alert('Error during calculation: ' + error.message);
            }
          }}
          style={{ padding: '0.5em 1em', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Calculate
        </button>
      </div>
      {selectedPhase === 'gaseous' && epsilon != null && (
        <div
          style={{
            border: '1px solid #27ae60',
            padding: '1em',
            borderRadius: '4px',
            marginTop: '1em',
            color: '#27ae60',
            fontWeight: 'bold',
            fontSize: '1.2em',
          }}
        >
          Epsilon: {epsilon}
        </div>
      )}
      {Object.keys(initialConcentrations).length > 0 && (
        <div style={{ marginTop: '1em' }}>
          <h3>Initial Concentrations</h3>
          <ul>
            {Object.entries(initialConcentrations).map(([reactant, conc]) => (
              <li key={reactant}>
                {reactant}: {conc.toFixed(4)}
              </li>
            ))}
          </ul>
        </div>
      )}
      {graphData && <VolumeGraph data={graphData} />}
    </section>
  );
}

export default Calculator;
