import React from 'react';

function Services() {
  const services = [
    { title: 'Очистка участков', desc: 'Подготовка, корчевание пней, выравнивание земли и вывоз мусора.', price: 'Цена договорная' },
    { title: 'Укладка газона', desc: 'Рулонный и посевной газон высочайшего качества. Дренажные системы.', price: 'от 150 руб/м²' },
    { title: 'Мощение брусчатки', desc: 'Тротуарная плитка, садовые дорожки, парковочные зоны с подушкой.', price: 'от 1500 руб/м²' },
    { title: 'Покос травы', desc: 'Профессиональный покос травы и бурьяна на заросших участках. Триммер или газонокосилка.', price: 'от 600 руб/сотка' }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div key={i} className="service-card glass-pane">
              <h3>{svc.title}</h3>
              <p style={{ marginTop: '10px', color: 'var(--text-muted)' }}>{svc.desc}</p>
              <div className="service-price">{svc.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
