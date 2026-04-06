import React, { useState } from 'react';

function Contacts() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (!input) return setPhone('');
    
    if (['7', '8', '9'].indexOf(input[0]) > -1) {
      if (input[0] === '9') input = '7' + input;
      const firstPart = input[0] === '8' ? '8' : '+7';
      let formatted = firstPart + ' ';
      if (input.length > 1) formatted += '(' + input.substring(1, 4);
      if (input.length >= 5) formatted += ') ' + input.substring(4, 7);
      if (input.length >= 8) formatted += '-' + input.substring(7, 9);
      if (input.length >= 10) formatted += '-' + input.substring(9, 11);
      setPhone(formatted);
    } else {
      setPhone('+' + input.substring(0, 16));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    if (phone.replace(/\D/g, '').length < 11) {
      alert('Пожалуйста, введите номер телефона полностью.');
      setIsSending(false);
      return;
    }

    try {
      let response;
      
      // В режиме локальной разработки (npm run dev) отправляем напрямую
      if (import.meta.env.DEV) {
        const botToken = import.meta.env.VITE_TG_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TG_CHAT_ID;
        
        if (!botToken || !chatId) {
          alert("Заявка принята! (Токен Telegram пока не настроен, это демо-режим).");
          setIsSending(false);
          return;
        }

        const text = `🔥 Новая заявка (ПЛАН67)!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;
        response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: text })
        });
      } else {
        // На продакшене (после билда) отправляем через безопасный PHP-прокси
        // Это обходит блокировщики рекламы и скрывает токен от клиентов
        response = await fetch('/send.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name, phone: phone })
        });
      }
      
      if (response.ok) {
        alert('Заявка успешно отправлена! Мы перезвоним вам в ближайшее время.');
        setName('');
        setPhone('');
      } else {
        const errData = await response.json();
        alert(`Ошибка отправки: ${errData.error || errData.description || 'Неизвестная ошибка'}`);
      }
    } catch (error) {
      alert('Ошибка подключения к сети. Возможно, соединение блокируется антивирусом или расширением браузера.');
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacts" style={{ padding: '100px 0' }}>
      <div className="container">
        <h2 className="section-title">Свяжитесь с нами</h2>
        <p style={{ textAlign: 'center', marginBottom: '50px', color: 'var(--text-muted)' }}>
          Оставьте заявку на бесплатный выезд инженера для замера, или задайте нам любой вопрос.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <div className="glass-pane" style={{ padding: '40px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>📞 Телефон и Почта</h3>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '5px', color: 'var(--accent-green)' }}>+7 (930) 300-82-84</p>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px', color: 'var(--accent-green)' }}>+7 (900) 221-39-17</p>
            <a href="mailto:plan67smk@mail.ru" style={{ display: 'block', fontSize: '1.1rem', marginBottom: '15px', color: 'white', textDecoration: 'none' }}>plan67smk@mail.ru</a>
            <p style={{ color: 'var(--text-muted)' }}>Ежедневно с 9:00 до 20:00</p>
          </div>

          <div className="glass-pane" style={{ padding: '40px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>💬 Мессенджеры</h3>
            <p style={{ fontSize: '1rem', marginBottom: '20px', color: 'var(--text-muted)' }}>
              Отвечаем за 5 минут. Присылайте фото участка для предварительной оценки стоимости!
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://t.me/+79303008284" target="_blank" rel="noreferrer" className="btn glass-pane" style={{ flex: 1, color: '#0088cc', textDecoration: 'none' }}>Telegram</a>
            </div>
          </div>

          <div className="glass-pane" style={{ padding: '40px' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem', textAlign: 'center' }}>Бесплатный замер</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" style={{ padding: '15px', borderRadius: '4px', border: '1px solid #333', background: 'var(--bg-dark)', color: 'white', fontFamily: 'inherit' }} required />
              <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="+7 (999) 000-00-00" style={{ padding: '15px', borderRadius: '4px', border: '1px solid #333', background: 'var(--bg-dark)', color: 'white', fontFamily: 'inherit' }} required />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }} disabled={isSending}>
                {isSending ? 'Отправляем...' : 'Вызвать специалиста'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacts;
