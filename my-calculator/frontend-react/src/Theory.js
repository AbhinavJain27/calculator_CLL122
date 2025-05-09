import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const Theory = () => {
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [["$", "$"]],
      displayMath: [["$$", "$$"]],
      processEscapes: true,
      processEnvironments: true
    }
  };

  const styles = {
    body: {
      fontFamily: "'Arial', sans-serif",
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem',
      lineHeight: 1.6,
      color: '#333',
    },
    h1: {
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '0.5rem',
    },
    h2: {
      color: '#2980b9',
      marginTop: '1.5rem',
      borderLeft: '4px solid #3498db',
      paddingLeft: '0.75rem',
    },
    h3: {
      color: '#16a085',
      marginTop: '1.2rem',
    },
    h4: {
      color: '#8e44ad',
      marginTop: '1rem',
    },
    equation: {
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      borderRadius: '5px',
      margin: '1rem 0',
      overflowX: 'hidden',
    },
    numberedEq: {
      display: 'flex',
      alignItems: 'center',
      margin: '1rem 0',
    },
    eqNumber: {
      marginRight: '1rem',
      color: '#7f8c8d',
      flexShrink: 0,
    },
    ul: {
      paddingLeft: '1.5rem',
    },
    li: {
      marginBottom: '0.5rem',
    },
    highlightBox: {
      backgroundColor: '#e8f4f8',
      borderLeft: '4px solid #3498db',
      padding: '1rem',
      margin: '1.5rem 0',
      borderRadius: '0 5px 5px 0',
    },
    definitionList: {
      marginLeft: '1.5rem',
    },
    definitionItem: {
      marginBottom: '0.5rem',
      display: 'flex',
    },
    definitionTerm: {
      fontWeight: 'bold',
      minWidth: '100px',
    },
  };

  return (
    <MathJaxContext version={3} config={config}>
      <div style={styles.body}>
        <h1 style={styles.h1}>Chemical Reactor Theory</h1>

        <h2 style={styles.h2}>Introduction</h2>
        <p>This report presents the design, simulation, and analysis of chemical reactors, focusing on plug flow reactors (PFR), continuously stirred tank reactors (CSTR), and packed bed reactors (PBR). The study includes single and multiple reactions, energy balances, and non-isothermal effects. It also explores advanced topics like Levenspiel plots and the impact of various operating conditions on conversion and selectivity.</p>

        <h2 style={styles.h2}>Single Reactions</h2>

        <h3 style={styles.h3}>Plug Flow Reactor (PFR)</h3>
        <p>In a PFR, the fluid flows through a pipe and reaction occurs along the flow path. The conversion increases with distance. The mole balance is given by:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(1)</span>
          <div style={styles.equation}>
            <MathJax>{"$$\\frac{dF_A}{dV} = r_A \\quad \\Rightarrow \\quad \\frac{dX}{dV} = \\frac{-r_A}{F_{A0}}$$"}</MathJax>
          </div>
        </div>

        <h3 style={styles.h3}>CSTR</h3>
        <p>In a CSTR, the reactor is well mixed and the composition is uniform throughout. The mole balance is:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(2)</span>
          <div style={styles.equation}>
            <MathJax>{"$$F_{A0} - F_A = -r_A V \\quad \\Rightarrow \\quad V = \\frac{F_{A0}X}{-r_A}$$"}</MathJax>
          </div>
        </div>

        <h3 style={styles.h3}>Batch Reactor</h3>
        <p>For a batch reactor, the mole balance is:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(3)</span>
          <div style={styles.equation}>
            <MathJax>{"$$\\frac{dN_A}{dt} = r_A V$$"}</MathJax>
          </div>
        </div>

        <h3 style={styles.h3}>Packed Bed Reactor (PBR)</h3>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(4)</span>
          <div style={styles.equation}>
            <MathJax>{"$$\\frac{dX}{dW} = \\frac{-r_A}{F_{A0}}$$"}</MathJax>
          </div>
        </div>

        <h2 style={styles.h2}>Rate Laws and Kinetics</h2>

        <h3 style={styles.h3}>Power-law Rate Law</h3>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(5)</span>
          <div style={styles.equation}>
            <MathJax>{"$$-r_A = k C_A^n$$"}</MathJax>
          </div>
        </div>

        <h3 style={styles.h3}>Reversible Reaction</h3>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(6)</span>
          <div style={styles.equation}>
            <MathJax>{"$$-r_A = k_f C_A - k_r C_B$$"}</MathJax>
          </div>
        </div>

        <h3 style={styles.h3}>Langmuir–Hinshelwood Rate Law</h3>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(7)</span>
          <div style={styles.equation}>
            <MathJax>{"$$-r_A = \\frac{k C_A}{1 + K_A C_A + K_B C_B}$$"}</MathJax>
          </div>
        </div>

        <h3 style={styles.h3}>First-order Rate Law Example</h3>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(8)</span>
          <div style={styles.equation}>
            <MathJax>{"$$-r_A = k C_A$$"}</MathJax>
          </div>
        </div>

        <h2 style={styles.h2}>Stoichiometry</h2>
        <p>Stoichiometry relates concentrations and flow rates of reacting species to conversion. It's the bridge between mole balances and rate laws in reactor design.</p>
        
        <p>For flow systems:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(9)</span>
          <div style={styles.equation}>
            <MathJax>{"$$C_A = \\frac{F_A}{v}, \\quad F_A = F_{A0}(1 - X)$$"}</MathJax>
          </div>
        </div>

        <p>Where:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><MathJax inline>{"$C_A$"}</MathJax> = concentration of species A (mol/L)</li>
          <li style={styles.li}><MathJax inline>{"$F_A$"}</MathJax> = molar flow rate of species A (mol/s)</li>
          <li style={styles.li}><MathJax inline>{"$v$"}</MathJax> = volumetric flow rate (L/s)</li>
          <li style={styles.li}><MathJax inline>{"$F_{A0}$"}</MathJax> = inlet molar flow rate of A (mol/s)</li>
          <li style={styles.li}><MathJax inline>{"$X$"}</MathJax> = conversion of A (dimensionless)</li>
        </ul>

        <h4 style={styles.h4}>Types of Flow Conditions:</h4>

        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Liquid phase (constant volumetric flow rate):</strong>
            <div style={styles.equation}>
              <MathJax>{"$$C_A = C_{A0}(1 - X)$$"}</MathJax>
            </div>
            <ul style={styles.ul}>
              <li style={styles.li}><MathJax inline>{"$C_{A0}$"}</MathJax> = inlet concentration of A (mol/L)</li>
            </ul>
          </li>

          <li style={styles.li}>
            <strong>Ideal Gas (variable volumetric flow rate):</strong>
            <div style={styles.equation}>
              <MathJax>{"$$C_A = C_{A0} \\frac{(1 - X)}{1 + \\varepsilon X} \\frac{P}{P_0} \\frac{T_0}{T}$$"}</MathJax>
            </div>
            <ul style={styles.ul}>
              <li style={styles.li}><MathJax inline>{"$\\varepsilon$"}</MathJax> = fractional change in total moles per mole of A reacted</li>
              <li style={styles.li}><MathJax inline>{"$P$"}</MathJax>, <MathJax inline>{"$P_0$"}</MathJax> = system and reference pressures (atm)</li>
              <li style={styles.li}><MathJax inline>{"$T$"}</MathJax>, <MathJax inline>{"$T_0$"}</MathJax> = system and reference temperatures (K)</li>
            </ul>
          </li>

          <li style={styles.li}>
            <strong>Ideal Gas (constant pressure):</strong>
            <div style={styles.equation}>
              <MathJax>{"$$v = v_0 (1 + \\varepsilon X)$$"}</MathJax>
            </div>
            <ul style={styles.ul}>
              <li style={styles.li}><MathJax inline>{"$v_0$"}</MathJax> = inlet volumetric flow rate</li>
            </ul>
          </li>

          <li style={styles.li}>
            <strong>Liquid or gas with constant volume:</strong>
            <div style={styles.equation}>
              <MathJax>{"$$V = V_0, \\quad C_A = C_{A0}(1 - X)$$"}</MathJax>
            </div>
            <ul style={styles.ul}>
              <li style={styles.li}><MathJax inline>{"$V = V_0$"}</MathJax> implies no change in volume with conversion</li>
            </ul>
          </li>

          <li style={styles.li}>
            <strong>Variable volume batch reactor (gas phase):</strong>
            <div style={styles.equation}>
              <MathJax>{"$$C_A = \\frac{N_A}{V} = C_{A0} \\frac{(1 - X)}{1 + \\varepsilon X} \\frac{P}{P_0} \\frac{T_0}{T}$$"}</MathJax>
            </div>
            <ul style={styles.ul}>
              <li style={styles.li}><MathJax inline>{"$N_A$"}</MathJax> = number of moles of A</li>
              <li style={styles.li}><MathJax inline>{"$V$"}</MathJax> = volume of the reactor at time <MathJax inline>{"$t$"}</MathJax></li>
            </ul>
          </li>
        </ul>

        <h3 style={styles.h3}>Batch Reactors</h3>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(10)</span>
          <div style={styles.equation}>
            <MathJax>{"$$N_A = N_{A0}(1 - X)$$"}</MathJax>
          </div>
        </div>
        <p>Where:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><MathJax inline>{"$N_A$"}</MathJax> = number of moles of A at time <MathJax inline>{"$t$"}</MathJax></li>
          <li style={styles.li}><MathJax inline>{"$N_{A0}$"}</MathJax> = initial number of moles of A</li>
          <li style={styles.li}><MathJax inline>{"$X$"}</MathJax> = conversion (fraction of A reacted)</li>
        </ul>

        <h3 style={styles.h3}>Temperature Dependence of Rate Constant</h3>
        <p>The rate constant varies with temperature according to the Arrhenius equation:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(11)</span>
          <div style={styles.equation}>
            <MathJax>{"$$k = k_A e^{-E_A / (RT)}$$"}</MathJax>
          </div>
        </div>

        <p>Where:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><MathJax inline>{"$k$"}</MathJax> = rate constant at temperature <MathJax inline>{"$T$"}</MathJax></li>
          <li style={styles.li}><MathJax inline>{"$k_A$"}</MathJax> = pre-exponential factor</li>
          <li style={styles.li}><MathJax inline>{"$E_A$"}</MathJax> = activation energy (J/mol)</li>
          <li style={styles.li}><MathJax inline>{"$R$"}</MathJax> = universal gas constant (8.314 J/mol·K)</li>
          <li style={styles.li}><MathJax inline>{"$T$"}</MathJax> = absolute temperature (K)</li>
        </ul>

        <p>If the rate constant <MathJax inline>{"$k_1$"}</MathJax> is known at temperature <MathJax inline>{"$T_1$"}</MathJax>, the rate constant <MathJax inline>{"$k_2$"}</MathJax> at a different temperature <MathJax inline>{"$T_2$"}</MathJax> can be calculated using:</p>
        
        <div style={styles.highlightBox}>
          <div style={styles.equation}>
            <MathJax>{"$$k_2 = k_1 \\exp\\left( \\frac{E_A}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right) \\right)$$"}</MathJax>
          </div>
        </div>

        <p>This form avoids the need to determine the pre-exponential factor <MathJax inline>{"$k_A$"}</MathJax> and allows comparison of rate constants at two temperatures directly.</p>

        <h2 style={styles.h2}>Combined Example: First-Order Gas-Phase Reaction in a PFR</h2>
        <p>From mole balance:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(12)</span>
          <div style={styles.equation}>
            <MathJax>{"$$\\frac{dX}{dV} = \\frac{-r_A}{F_{A0}}$$"}</MathJax>
          </div>
        </div>
        <p>From rate law:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(13)</span>
          <div style={styles.equation}>
            <MathJax>{"$$-r_A = k C_A$$"}</MathJax>
          </div>
        </div>
        <p>From stoichiometry:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(14)</span>
          <div style={styles.equation}>
            <MathJax>{"$$C_A = C_{A0} \\frac{(1 - X)}{1 + \\varepsilon X} \\frac{P}{P_0} \\frac{T_0}{T}$$"}</MathJax>
          </div>
        </div>
        <p>Combine all:</p>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(15)</span>
          <div style={styles.equation}>
            <MathJax>{"$$\\frac{dX}{dV} = \\frac{k C_{A0}}{F_{A0}} \\frac{(1 - X)}{1 + \\varepsilon X} \\frac{P}{P_0} \\frac{T_0}{T} \\quad \\text{(A)}$$"}</MathJax>
          </div>
        </div>

        <h2 style={styles.h2}>Multiple Reactions</h2>

        <h3 style={styles.h3}>Parallel Reactions</h3>
        <div style={styles.equation}>
          <MathJax>{"$$A \\rightarrow B \\quad (k_1), \\quad A \\rightarrow C \\quad (k_2)$$"}</MathJax>
        </div>
        <div style={styles.numberedEq}>
          <span style={styles.eqNumber}>(16)</span>
          <div style={styles.equation}>
            <MathJax>{"$$S = \\frac{r_B}{r_C} = \\frac{k_1 C_A^{n_1}}{k_2 C_A^{n_2}}$$"}</MathJax>
          </div>
        </div>

        <p><strong>Conversion vs. Reactor Length in Series-Parallel Systems:</strong></p>
        <p>In reactions where desired and undesired products are formed in parallel, the conversion changes along the reactor length or catalyst weight (W). The rate of formation for each product may differ. Typically, the desired product forms quickly at low conversion, while the undesired product dominates at higher conversion. Hence, there exists an optimum value of <MathJax inline>{"$W$"}</MathJax> that maximizes the yield of the desired product before the undesired one accelerates.</p>

        <p><strong>Selectivity as a Function of Temperature and Conversion:</strong></p>
        <p>Selectivity (<MathJax inline>{"$S = \\frac{r_B}{r_C}$"}</MathJax>) in a parallel reaction network is not constant—it depends strongly on both conversion (<MathJax inline>{"$X$"}</MathJax>) and temperature (<MathJax inline>{"$T$"}</MathJax>). As temperature changes, reaction rates (via Arrhenius equation) shift differently for each pathway. Hence, there is an optimal range of <MathJax inline>{"$T$"}</MathJax> and <MathJax inline>{"$X$"}</MathJax> to maximize selectivity toward the desired product. Operating outside that window can significantly reduce selectivity.</p>

        <h3 style={styles.h3}>Series Reactions</h3>
        <div style={styles.equation}>
          <MathJax>{"$$A \\rightarrow B \\rightarrow C$$"}</MathJax>
        </div>
        <p>Optimize residence time to maximize intermediate B.</p>

        <h2 style={styles.h2}>Energy Balances (Non-Isothermal Reactors)</h2>

        <h3 style={styles.h3}>Theory</h3>
        <p>In non-isothermal reactors, the temperature changes along the reactor due to the heat released or absorbed by the reaction, and external heat exchange. Exothermic reactions tend to increase the temperature, possibly causing runaway reactions, while endothermic reactions lower the temperature unless heat is supplied. Proper thermal management is crucial for safety and efficiency.</p>

        <h3 style={styles.h3}>General Energy Balance with Conversion</h3>
        <p>The generalized steady-state energy balance for non-isothermal reactors, using constant or mean heat capacities, is:</p>

        <div style={styles.highlightBox}>
          <div style={styles.equation}>
            <MathJax>{"$$\\dot{Q} - W_s - F_{A0} \\sum_{i=1}^{n} \\Theta_i C_{P,i}(T - T_{0}) - \\left[\\Delta H^\\circ_{\\text{Rx}}(T_R) + \\Delta C_P(T - T_R)\\right] F_{A0} X = 0$$"}</MathJax>
          </div>
        </div>

        <p>Where:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><MathJax inline>{"$\\dot{Q}$"}</MathJax>: rate of heat added to the system</li>
          <li style={styles.li}><MathJax inline>{"$W_s$"}</MathJax>: shaft work or external mechanical work</li>
          <li style={styles.li}><MathJax inline>{"$F_{A0}$"}</MathJax>: molar flow rate of the limiting reactant A</li>
          <li style={styles.li}><MathJax inline>{"$\\Theta_i$"}</MathJax>: stoichiometric coefficient ratio <MathJax inline>{"$\\frac{F_i}{F_{A0}}$"}</MathJax></li>
          <li style={styles.li}><MathJax inline>{"$C_{P,i}$"}</MathJax>: constant or average heat capacity of species <MathJax inline>{"$i$"}</MathJax></li>
          <li style={styles.li}><MathJax inline>{"$T_0$"}</MathJax>: inlet temperature, <MathJax inline>{"$T$"}</MathJax>: reactor temperature</li>
          <li style={styles.li}><MathJax inline>{"$\\Delta H^\\circ_{\\text{Rx}}(T_R)$"}</MathJax>: standard heat of reaction at reference temperature <MathJax inline>{"$T_R$"}</MathJax></li>
          <li style={styles.li}><MathJax inline>{"$\\Delta C_P = \\sum \\nu_i C_{P,i}$"}</MathJax>: heat capacity change of the reaction</li>
          <li style={styles.li}><MathJax inline>{"$X$"}</MathJax>: conversion of reactant A</li>
        </ul>

        <h2 style={styles.h2}>Design Tools</h2>

        <h3 style={styles.h3}>Levenspiel Plot</h3>
        <p>The Levenspiel plot is a graphical tool for reactor sizing. It plots <MathJax inline>{"$\\frac{F_{A0}}{-r_A}$"}</MathJax> versus conversion <MathJax inline>{"$X$"}</MathJax>. The area under the curve represents the reactor volume required to achieve a certain conversion.</p>

        <p><strong>Interpretation for Different Reactors:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>For a CSTR, draw a rectangle from <MathJax inline>{"$X=0$"}</MathJax> to <MathJax inline>{"$X$"}</MathJax> at height <MathJax inline>{"$\\frac{F_{A0}}{-r_A}$"}</MathJax></li>
          <li style={styles.li}>For a PFR, integrate the area under the curve directly</li>
          <li style={styles.li}>For multiple CSTRs or PFRs in series, the plot helps visualize how much volume is added with each stage</li>
        </ul>

        <h2 style={styles.h2}>Additional Notes</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Space Time: <MathJax inline>{"$\\tau = \\frac{V}{v_0}$"}</MathJax></li>
          <li style={styles.li}>Damköhler Number: <MathJax inline>{"$Da = \\frac{r_A V}{F_{A0}}$"}</MathJax></li>
        </ul>
      </div>
    </MathJaxContext>
  );
};

export default Theory;