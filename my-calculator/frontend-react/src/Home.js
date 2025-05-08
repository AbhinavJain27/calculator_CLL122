import React from 'react';

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <h2>CSTR</h2>
      <p>The Continuous Stirred Tank Reactor (CSTR) is a common type of reactor used in chemical processes. It is characterized by continuous input and output streams and uniform composition throughout the reactor volume.</p>
      <h2>PFR</h2>
      <p>The Plug Flow Reactor (PFR) assumes that the fluid flows through the reactor as a plug, with no mixing in the flow direction. It is often used for reactions where the residence time distribution is important.</p>
      <h2>PBR reactor</h2>
      <p>The Packed Bed Reactor (PBR) contains a packed bed of catalyst particles, and the reactants flow through the bed.</p>
      <h2>Batch reactor</h2>
      <p>The Batch Reactor operates with no flow in or out during the reaction, making it suitable for small-scale or batch processes.</p>
    </section>
  );
}

export default Home;
