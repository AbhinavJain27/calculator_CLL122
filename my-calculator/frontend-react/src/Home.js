import React from 'react';
import cstrImage from './cstr.png';
import pfrImage from './pfr.png';
import pbrImage from './pbr.png';
import batchImage from './batch.png';
import aaImage from './aa.png';

function Home() {
  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
      <h1
        style={{
          color: '#ffffff',
          textShadow: '2px 2px 6px rgba(0,0,0,0.85)',
          fontWeight: 'bold',
          borderBottom: '2px solid #3498db',
          paddingBottom: '4rem',
          paddingTop: '8rem',
          fontSize: '2.5rem',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${aaImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        Chemical Reactor Engineering Calculator
      </h1>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#2980b9', marginTop: '1.5rem' }}>CSTR (Continuous Stirred Tank Reactor)</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <p style={{ marginBottom: '1rem', flex: 1 }}>
            The Continuous Stirred Tank Reactor (CSTR) is a common type of reactor used in chemical processes. 
            It is characterized by continuous input and output streams and uniform composition throughout the reactor volume 
            due to perfect mixing. The residence time distribution is exponential, and the conversion depends on the 
            space time and reaction kinetics.
          </p>
          <img src={cstrImage} alt="CSTR" style={{ maxWidth: '160px', height: 'auto' }} />
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#2980b9', marginTop: '1.5rem' }}>PFR (Plug Flow Reactor)</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <p style={{ marginBottom: '1rem', flex: 1 }}>
            The Plug Flow Reactor (PFR) assumes that the fluid flows through the reactor as a plug, with no mixing 
            in the flow direction but complete mixing radially. It is often used for reactions where the residence 
            time distribution is important, as it provides a narrow distribution similar to batch reactors but 
            operates continuously.
          </p>
          <img src={pfrImage} alt="PFR" style={{ maxWidth: '120px', height: 'auto' }} />
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#2980b9', marginTop: '1.5rem' }}>PBR (Packed Bed Reactor)</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <p style={{ marginBottom: '1rem', flex: 1 }}>
            The Packed Bed Reactor (PBR) contains a packed bed of catalyst particles, and the reactants flow through 
            the bed. The catalyst provides a large surface area for reactions, and the pressure drop across the bed 
            is an important design consideration. PBRs are widely used in heterogeneous catalytic reactions like 
            petroleum refining.
          </p>
          <img src={pbrImage} alt="PBR" style={{ maxWidth: '120px', height: 'auto' }} />
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#2980b9', marginTop: '1.5rem' }}>Batch Reactor</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <p style={{ marginBottom: '1rem', flex: 1 }}>
            The Batch Reactor operates with no flow in or out during the reaction, making it suitable for small-scale 
            or batch processes. All reactants are added at the start, and the composition changes with time. Batch 
            reactors are versatile and commonly used in pharmaceutical and specialty chemical production where 
            flexibility is required.
          </p>
          <img src={batchImage} alt="Batch Reactor" style={{ maxWidth: '160px', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
}

export default Home;console.log('Rendering Home component');
