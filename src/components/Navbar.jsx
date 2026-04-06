import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>ПЛАН67</div>
        <div className="nav-links">
          <a href="#services">Услуги</a>
          <a href="#portfolio">До / После</a>
          <a href="#calculator">Калькулятор</a>
          <a href="#contacts">Контакты</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
