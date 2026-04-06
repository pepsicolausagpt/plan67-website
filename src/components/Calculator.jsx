import React, { useState } from 'react';

function Calculator() {
  const [area, setArea] = useState(50);
  const [needsClearing, setNeedsClearing] = useState(false);
  const [lawnType, setLawnType] = useState('none');
  const [pavingArea, setPavingArea] = useState(0);

  const calculateTotal = () => {
    let total = 0;
    // Базовая очистка (примерный расчет)
    if (needsClearing) total += area * 100; // условно 100 руб/м2 за очистку
    // Газон
    if (lawnType === 'seeded') total += area * 150;
    if (lawnType === 'roll') total += area * 300;
    // Мощение
    if (pavingArea > 0) total += pavingArea * 1500;
    return total;
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container glass-pane" style={{ padding: '40px' }}>
        <h2 className="section-title">Калькулятор примерной стоимости</h2>
        <div className="calc-grid">
          <div>
            <div className="calc-group">
              <label>Общая площадь участка (газон/земля): {area} м²</label>
              <input type="range" min="10" max="1000" step="10" value={area} onChange={(e) => setArea(Number(e.target.value))} />
            </div>
            
            <div className="calc-group">
              <label>Площадь мощения брусчаткой: {pavingArea} м²</label>
              <input type="range" min="0" max="500" step="5" value={pavingArea} onChange={(e) => setPavingArea(Number(e.target.value))} />
            </div>

            <div className="calc-group calc-checkboxes">
              <label className="checkbox-label">
                <input type="checkbox" checked={needsClearing} onChange={(e) => setNeedsClearing(e.target.checked)} />
                Сложная очистка участка (бурьян, пни)
              </label>
              
              <label style={{marginTop: '10px', display: 'block'}}>Тип газона:</label>
              <select 
                value={lawnType} 
                onChange={(e) => setLawnType(e.target.value)}
                style={{ padding: '10px', borderRadius: '4px', background: 'var(--bg-dark)', color: 'white', border: '1px solid #333' }}
              >
                <option value="none">Не нужен</option>
                <option value="seeded">Посевной (от 150 руб/м²)</option>
                <option value="roll">Рулонный премиум (от 300 руб/м²)</option>
              </select>
            </div>
          </div>
          
          <div className="total-box glass-pane">
            <h3>Примерная смета</h3>
            <div className="total-price">{calculateTotal().toLocaleString('ru-RU')} ₽</div>
            <p style={{ color: 'var(--text-muted)' }}>* Не является публичной офертой, для точного расчета необходим замер.</p>
            <button className="btn btn-primary" style={{ marginTop: '30px' }}>Вызвать на замер</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
