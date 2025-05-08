import React, { useState, useEffect, useRef } from 'react';

function Calculator() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState('');
  const [reactants, setReactants] = useState([]);
  const [coefficients, setCoefficients] = useState({});

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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleOption = (optionLabel) => {
    if (selectedOptions.includes(optionLabel)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== optionLabel));
    } else {
      setSelectedOptions([...selectedOptions, optionLabel]);
    }
  };

  const addReactant = () => {
    const nextLetter = String.fromCharCode(65 + reactants.length); // A, B, C, ...
    setReactants([...reactants, nextLetter]);
    setCoefficients({ ...coefficients, [nextLetter]: '' });
  };

  const handleCoefficientChange = (reactant, value) => {
    setCoefficients({ ...coefficients, [reactant]: value });
  };

  return (
    <section>
      <h1>Calculator</h1>
      <div style={{ marginBottom: '1em' }}>
        <label
          htmlFor="reactionTypeDropdown"
          style={{ display: 'block', marginBottom: '0.5em', color: '#27ae60', fontWeight: 'bold' }}
        >
          Reaction Type
        </label>
        <div
          id="reactionTypeDropdown"
          ref={dropdownRef}
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '0.5em',
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '1em',
            cursor: 'pointer',
            userSelect: 'none',
            position: 'relative',
            width: '95%',
          }}
          onClick={() => setDropdownOpen(true)}
        >
          <div>{selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select options'}</div>
          <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
            ▼
          </div>
          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                zIndex: 1000,
                maxHeight: 150,
                overflowY: 'auto',
              }}
            >
              {options.map((option) => (
                <label
                  key={option.value}
                  style={{
                    display: 'block',
                    padding: '0.5em',
                    cursor: 'pointer',
                    backgroundColor: selectedOptions.includes(option.label) ? '#ecf0f1' : '#fff',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.label)}
                    onChange={() => toggleOption(option.label)}
                    style={{ marginRight: '0.5em' }}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* New dropdown for Phase of Reaction */}
      <div style={{ marginBottom: '1em' }}>
        <label
          htmlFor="phaseOfReactionDropdown"
          style={{ display: 'block', marginBottom: '0.5em', color: '#27ae60', fontWeight: 'bold' }}
        >
          Phase of Reaction
        </label>
        <select
          id="phaseOfReactionDropdown"
          value={selectedPhase}
          onChange={(e) => setSelectedPhase(e.target.value)}
          style={{
            width: '95%',
            padding: '0.5em',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1em',
            color: '#333',
            backgroundColor: '#fff',
            boxSizing: 'border-box',
            cursor: 'pointer',
          }}
        >
          <option value="" disabled>
            Select an option
          </option>
          {phaseOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* Add Reactant Section */}
      <div style={{ marginBottom: '1em' }}>
        <label style={{ display: 'block', marginBottom: '0.5em', color: '#27ae60', fontWeight: 'bold' }}>
          Add Reactant
        </label>
        <button onClick={addReactant} style={{ marginBottom: '0.5em' }}>
          Add
        </button>
        <div>
          {reactants.map((reactant) => (
            <div key={reactant} style={{ marginBottom: '0.5em' }}>
              <span style={{ marginRight: '1em' }}>{reactant}</span>
              <input
                type="number"
                placeholder="Coefficient"
                value={coefficients[reactant]}
                onChange={(e) => handleCoefficientChange(reactant, e.target.value)}
                style={{ width: '100px', marginRight: '1em' }}
              />
              <span>
                Reaction: {coefficients[reactant] ? coefficients[reactant] : ''} {reactant}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calculator;
