import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Portfolio from './components/Portfolio';
import Calculator from './components/Calculator';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* Основной контент */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Calculator />
        <Contacts />
      </main>

      {/* Футер */}
      <footer style={{ textAlign: 'center', padding: '40px', marginTop: '50px', background: 'rgba(0,0,0,0.5)', borderTop: '1px solid #333' }}>
        <p>© {new Date().getFullYear()} ПЛАН67. Все права защищены.</p>
        <p style={{ color: 'var(--text-muted)' }}>Профессиональное благоустройство территорий</p>
      </footer>
    </div>
  );
}

export default App;
