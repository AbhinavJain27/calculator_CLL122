import React, { useState } from 'react';
import './App.css';

import Home from './Home';
import Theory from './Theory';
import Calculator from './Calculator';
import About from './About';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <nav className="nav-bar">
        <a
          href="#home"
          onClick={() => handleNavigation('home')}
          className={activeSection === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#theory"
          onClick={() => handleNavigation('theory')}
          className={activeSection === 'theory' ? 'active' : ''}
        >
          Theory
        </a>
        <a
          href="#calculator"
          onClick={() => handleNavigation('calculator')}
          className={activeSection === 'calculator' ? 'active' : ''}
        >
          Calculator
        </a>
        <a
          href="#about"
          onClick={() => handleNavigation('about')}
          className={activeSection === 'about' ? 'active' : ''}
        >
          About
        </a>
      </nav>

      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'theory' && <Theory />}
        {activeSection === 'calculator' && <Calculator />}
        {activeSection === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;
