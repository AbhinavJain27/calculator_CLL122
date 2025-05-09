import React from 'react';

function Home() {
  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' }}>
        Chemical Reactor Engineering Calculator
      </h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2980b9', marginTop: '1.5rem' }}>CSTR (Continuous Stirred Tank Reactor)</h2>
        <p style={{ marginBottom: '1rem' }}>
          The Continuous Stirred Tank Reactor (CSTR) is a common type of reactor used in chemical processes. 
          It is characterized by continuous input and output streams and uniform composition throughout the reactor volume 
          due to perfect mixing. The residence time distribution is exponential, and the conversion depends on the 
          space time and reaction kinetics.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2980b9', marginTop: '1.5rem' }}>PFR (Plug Flow Reactor)</h2>
        <p style={{ marginBottom: '1rem' }}>
          The Plug Flow Reactor (PFR) assumes that the fluid flows through the reactor as a plug, with no mixing 
          in the flow direction but complete mixing radially. It is often used for reactions where the residence 
          time distribution is important, as it provides a narrow distribution similar to batch reactors but 
          operates continuously.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2980b9', marginTop: '1.5rem' }}>PBR (Packed Bed Reactor)</h2>
        <p style={{ marginBottom: '1rem' }}>
          The Packed Bed Reactor (PBR) contains a packed bed of catalyst particles, and the reactants flow through 
          the bed. The catalyst provides a large surface area for reactions, and the pressure drop across the bed 
          is an important design consideration. PBRs are widely used in heterogeneous catalytic reactions like 
          petroleum refining.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2980b9', marginTop: '1.5rem' }}>Batch Reactor</h2>
        <p style={{ marginBottom: '1rem' }}>
          The Batch Reactor operates with no flow in or out during the reaction, making it suitable for small-scale 
          or batch processes. All reactants are added at the start, and the composition changes with time. Batch 
          reactors are versatile and commonly used in pharmaceutical and specialty chemical production where 
          flexibility is required.
        </p>
      </div>
    </section>
  );
}

export default Home;