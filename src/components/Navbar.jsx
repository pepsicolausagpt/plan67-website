import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo-brand">
          <img src="/logo.svg" alt="План67 Лого" className="logo-img" />
          <span>ПЛАН67</span>
        </a>
        <div className="nav-links">
          <a href="#services">Услуги</a>
          <a href="#gallery">Наши работы</a>
          <a href="#results">До / После</a>
          <a href="#calculator">Калькулятор</a>
          <a href="#contacts">Контакты</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
