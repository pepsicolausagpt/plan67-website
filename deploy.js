import * as ftp from "basic-ftp";
import * as dotenv from "dotenv";
dotenv.config();

async function deploy() {
    console.log("🚀 Начинаем сборку и деплой на Beget...");
    
    if (!process.env.FTP_PASSWORD) {
        console.error("❌ ОШИБКА: Вы забыли добавить пароль FTP_PASSWORD в файл .env");
        process.exit(1);
    }

    const client = new ftp.Client();
    
    try {
        console.log("📡 Подключение к FTP серверу...");
        await client.access({
            host: process.env.FTP_HOST || "g93030nz.beget.tech",
            user: process.env.FTP_USER || "g93030nz",
            password: process.env.FTP_PASSWORD,
            secure: true
        });

        console.log("✅ Подключение успешно! Очищаем папку и загружаем новые файлы...");
        
        const remotePath = "/g93030nz.beget.tech/public_html";
        
        await client.ensureDir(remotePath);
        await client.clearWorkingDir();
        await client.uploadFromDir("dist");
        
        console.log("✨ Деплой блестяще завершен! Сайт полностью обновлен в интернете.");
    } catch (err) {
        console.error("❌ Ошибка при загрузке. Проверьте пароль или путь.\n", err.message);
    }
    client.close();
}

deploy();
