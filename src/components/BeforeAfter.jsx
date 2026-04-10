import React, { useState } from 'react';

function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <section id="results" className="before-after-section container">
      <h2 className="section-title">Результат, который говорит сам за себя</h2>
      <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-muted)' }}>
        Потяните ползунок, чтобы увидеть разницу "До" и "После".
      </p>
      
      <div 
        className="slider-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '600px',
          overflow: 'hidden',
          borderRadius: 'var(--border-radius)'
        }}
      >
        {/* Базовое (нижнее) изображение — ПОСЛЕ (будет видно справа) */}
        <div className="image-protection-overlay"></div>
        <img 
          src="/images/after.png" 
          alt="После" 
          draggable="false"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} 
        />
        
        {/* Накладываемое (верхнее) изображение — ДО (видно слева до ползунка) */}
        <img 
          src="/images/before.png" 
          alt="До" 
          draggable="false"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
          }} 
        />
        
        {/* Невидимый ползунок для управления */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPos} 
          onChange={handleSliderChange} 
          className="slider-range" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'ew-resize',
            zIndex: 10
          }}
        />
        
        {/* Визуальный индикатор ползунка (белая линия и кружок) */}
        <div 
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: `${sliderPos}%`,
            width: '4px',
            background: '#fff',
            marginLeft: '-2px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            pointerEvents: 'none',
            zIndex: 5
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            fontWeight: 'bold',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            &lt;&gt;
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default BeforeAfter;
