export default async function handler(req, res) {
  // Разрешаем только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Имя или телефон не указаны' });
  }

  const botToken = process.env.VITE_TG_BOT_TOKEN;
  const chatId = process.env.VITE_TG_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: 'Сервер конфигурации: Токен не надежно защищен' });
  }

  const text = `🔥 Новая заявка (ПЛАН67)!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: text }),
    });

    if (telegramResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorData = await telegramResponse.json();
      return res.status(telegramResponse.status).json({ 
        error: errorData.description || 'Не удалось отправить сообщение в Telegram' 
      });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Ошибка сети при связи с Telegram на сервере.' });
  }
}
