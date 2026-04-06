import React from 'react';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: 'url("/images/hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: '800', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Всё начинается с красивого участка</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.4rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)', maxWidth: '800px', lineHeight: '1.6' }}>
          Профессиональное мощение брусчаткой, укладка премиального газона и расчистка территории "под ключ". Мы делаем ровно, красиво и надолго.
        </p>
        
        {/* Преимущества - Trust Badges */}
        <div style={{ display: 'flex', gap: '30px', margin: '40px 0', borderLeft: '4px solid var(--accent-green)', paddingLeft: '20px' }}>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Договор</div>
            <div style={{ color: '#cbd5e1', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>и гарантия качества</div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Бесплатный</div>
            <div style={{ color: '#cbd5e1', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>выезд на замер</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#calculator" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>Рассчитать стоимость</a>
          <a href="#services" className="btn glass-pane" style={{ color: 'white', textDecoration: 'none', padding: '15px 30px', fontSize: '1.1rem' }}>Наши услуги</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
