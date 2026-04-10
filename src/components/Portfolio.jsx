import React from 'react';

const portfolioImages = [
  '/images/portfolio/1214c811490ee17c71479479a69fec7d.jpg',
  '/images/portfolio/3cc604c8fdd76350286c5884a1f95567.jpg',
  '/images/portfolio/6dc0c2fb318606c5b79598aaa17a9e51.jpg',
  '/images/portfolio/908f1b625b0e1846be382a80d7b466e9.jpg',
  '/images/portfolio/e31d0475063a9535c6307fa903359779.jpg',
  '/images/portfolio/e97759c06342a2b0654ca8dad111ab8c.jpg',
  '/images/portfolio/газон.jpg',
  '/images/portfolio/гпз.jpg',
];

function Portfolio() {
  // Двойной список для бесшовной прокрутки
  const allImages = [...portfolioImages, ...portfolioImages];

  return (
    <section id="gallery" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Наши работы</h2>
        <p style={{ textAlign: 'center', marginBottom: '50px', color: 'var(--text-muted)' }}>
          Посмотрите на последние проекты, выполненные нашей командой.
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-content" onContextMenu={(e) => e.preventDefault()}>
          {allImages.map((src, index) => (
            <div key={index} className="portfolio-item-card">
              <div className="image-protection-overlay"></div>
              <img 
                src={src} 
                alt={`Проект ${index + 1}`} 
                loading="lazy" 
                draggable="false" 
              />
              <div className="portfolio-overlay">
                <span className="badge">ПЛАН67</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
