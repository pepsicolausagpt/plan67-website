<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // На всякий случай, хотя скрипт лежит на том же домене
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Bad Request']);
    exit;
}

// Эти значения будут автоматически заменены в GitHub Actions при сборке
$token = '%%BOT_TOKEN%%';
$chat_id = '%%CHAT_ID%%';

if ($token === '%%' . 'BOT_TOKEN' . '%%') {
    http_response_code(500);
    echo json_encode(['error' => 'Server configuration error: Token not set']);
    exit;
}

$text = "🔥 Новая заявка (ПЛАН67)!\n\n";
if (!empty($data['name'])) $text .= "👤 Имя: " . $data['name'] . "\n";
if (!empty($data['phone'])) $text .= "📞 Телефон: " . $data['phone'] . "\n";

$url = "https://api.telegram.org/bot$token/sendMessage";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'chat_id' => $chat_id,
    'text' => $text
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($http_code);
echo $response;
?>
