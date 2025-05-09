import pfrEquation from './image1.png';
import cstrEquation from './image2.png';
import flowDiagram from './flow.png';
import React from 'react';

function Theory() {
  return (
    <section className="theory-section">
      <h1>Theory</h1>
      <p>
        1 Introduction<br />
        This report presents the design, simulation, and analysis of chemical reactors, focusing on plug flow reactors (PFR), continuously stirred tank reactors (CSTR), and packed bed reactors (PBR). The study includes single and multiple reactions, energy balances, and non-isothermal effects. It also explores advanced topics like Levenspiel plots and the impact of various operating conditions on conversion and selectivity.
      </p>

      <h2>2 Single Reactions</h2>
      
      <h3>2.1 Plug Flow Reactor (PFR)</h3>
      <p>
        In a PFR, the fluid flows through a pipe and reaction occurs along the flow path. The conversion increases with distance. The mole balance is given by:
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={pfrEquation} alt="Plug Flow Reactor Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <h3>2.2 CSTR</h3>
      <p>
        In a CSTR, the reactor is well mixed and the composition is uniform throughout. The mole balance is:
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={cstrEquation} alt="CSTR Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <h3>2.3 Batch Reactor</h3>
      <p>
        For a batch reactor, the mole balance is:
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={require('./image3.png')} alt="Batch Reactor Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <h3>2.4 Packed Bed Reactor (PBR)</h3>
      <p>
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={require('./image4.png')} alt="Packed Bed Reactor Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <h2>3 Rate Laws and Kinetics</h2>

      <h3>3.1 Power-law Rate Law</h3>
      <p>
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={require('./image3.1.png')} alt="Power-law Rate Law Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <h3>3.2 Reversible Reaction</h3>
      <p>
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={require('./3.2.png')} alt="Reversible Reaction Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <h3>3.3 Langmuir–Hinshelwood Rate Law</h3>
      <p>
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={require('./3.3.png')} alt="Langmuir–Hinshelwood Rate Law Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <h3>3.4 First-order Rate Law Example</h3>
      <p>
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={require('./3.4.png')} alt="First-order Rate Law Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <h2>4 Stoichiometry</h2>
      <p>
        Stoichiometry relates concentrations and flow rates of reacting species to conversion. It’s the bridge between mole balances and rate laws in reactor design.
      </p>
      <p>
        For flow systems:
      </p>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        C<sub>A</sub> = F<sub>A</sub> / v, &nbsp;&nbsp; F<sub>A</sub> = F<sub>A0</sub>(1 - X)
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={flowDiagram} alt="Flow System Diagram" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <p>Where:</p>
      <ul style={{ marginBottom: '1.5em' }}>
        <li>C<sub>A</sub> = concentration of species A (mol/L)</li>
        <li>F<sub>A</sub> = molar flow rate of species A (mol/s)</li>
        <li>v = volumetric flow rate (L/s)</li>
        <li>F<sub>A0</sub> = inlet molar flow rate of A (mol/s)</li>
        <li>X = conversion of A (dimensionless)</li>
      </ul>
      <p><strong>Types of Flow Conditions:</strong></p>
      <ul style={{ marginBottom: '1.5em' }}>
        <li><strong>Liquid phase</strong> (constant volumetric flow rate):</li>
      </ul>
      <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: '0.5em' }}>
        C<sub>A</sub> = C<sub>A0</sub>(1 - X)
      </p>
      <p style={{ marginBottom: '2.5em' }}>&nbsp;&nbsp;– C<sub>A0</sub> = inlet concentration of A (mol/L)</p>
      <ul style={{ marginBottom: '1.5em' }}>
        <li><strong>Ideal Gas</strong> (variable volumetric flow rate):</li>
      </ul>
      <div style={{ textAlign: 'center', marginBottom: '1.5em' }}>
        <img src={require('./ideal.png')} alt="Ideal Gas Flow Diagram" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <p style={{ marginBottom: '1.5em' }}>&nbsp;&nbsp;– ε = fractional change in total moles per mole of A reacted</p>

      <p>– P, P<sub>0</sub> = system and reference pressures (atm)</p>
      <p>– T, T<sub>0</sub> = system and reference temperatures (K)</p>

      <ul>
        <li><strong>Ideal Gas (constant pressure):</strong></li>
      </ul>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        v = v<sub>0</sub>(1 + εX)
      </p>
      <p>– v<sub>0</sub> = inlet volumetric flow rate</p>

      <ul>
        <li><strong>Liquid or gas with constant volume:</strong></li>
      </ul>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        V = V<sub>0</sub>, &nbsp;&nbsp; C<sub>A</sub> = C<sub>A0</sub>(1 - X)
      </p>
      <p>– V = V<sub>0</sub> implies no change in volume with conversion</p>

      <ul>
        <li><strong>Variable volume batch reactor (gas phase):</strong></li>
      </ul>
      <div style={{ textAlign: 'center' }}>
        <img src={require('./vvbr.png')} alt="Variable Volume Batch Reactor Equation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <p>– N<sub>A</sub> = number of moles of A</p>
      <p>– V = volume of the reactor at time t</p>

      <h3>4.1 Batch Reactors</h3>
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '0.5em' }}>
        N<sub>A</sub> = N<sub>A0</sub>(1 - X)
      </p>
      <p>Where:</p>
      <ul>
        <li>N<sub>A</sub> = number of moles of A at time t</li>
        <li>N<sub>A0</sub> = initial number of moles of A</li>
        <li>X = conversion (fraction of A reacted)</li>
      </ul>

      <h3>4.2 Temperature Dependence of Rate Constant</h3>
      <p>
        The rate constant varies with temperature according to the Arrhenius equation:
      </p>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        k = k<sub>A</sub>e<sup>-E<sub>A</sub>/(RT)</sup>
      </p>
      <p>Where:</p>
      <ul>
        <li>k = rate constant at temperature T</li>
        <li>k<sub>A</sub> = pre-exponential factor</li>
        <li>E<sub>A</sub> = activation energy (J/mol)</li>
        <li>R = universal gas constant (8.314 J/mol·K)</li>
        <li>T = absolute temperature (K)</li>
      </ul>

      <h3>4.3 Rate Constant at Different Temperatures</h3>
      <p>
        If the rate constant <em>k<sub>1</sub></em> is known at temperature <em>T<sub>1</sub></em>, the rate constant <em>k<sub>2</sub></em> at a different temperature <em>T<sub>2</sub></em> can be calculated using:
      </p>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        k<sub>2</sub> = k<sub>1</sub> exp <sup> ( E<sub>A</sub> / R ( 1 / T<sub>1</sub> - 1 / T<sub>2</sub> ) ) </sup>
      </p>
      <p>
        This form avoids the need to determine the pre-exponential factor <em>k<sub>A</sub></em> and allows comparison of rate constants at two temperatures directly.
      </p>

      <h2>5 Combine Example: First-Order Gas-Phase Reaction in a PFR</h2>
      <p>From mole balance:</p>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        dX/dV = -r<sub>A</sub> / F<sub>A0</sub>
      </p>
      <p>From rate law:</p>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        -r<sub>A</sub> = k C<sub>A</sub>
      </p>
      <p>From stoichiometry:</p>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        C<sub>A</sub> = C<sub>A0</sub> (1 - X) P T<sub>0</sub> / (1 + εX) P<sub>0</sub> T
      </p>
      <p>Combine all:</p>
     
    </section>
  );
}


export default Theory;
