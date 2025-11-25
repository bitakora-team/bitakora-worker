# 🤖 Discord to Slack Bot - Bitákora

Este bot escucha mensajes en un canal específico de Discord y los reenvía automáticamente a un canal de Slack usando Webhooks.

## 🚀 Tecnologías

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Discord.js](https://discord.js.org/)
* [Slack Webhooks](https://api.slack.com/messaging/webhooks)
* [Render](https://render.com) para despliegue

## ⚙️ Instalación local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/discord-to-slack-bot.git
   cd discord-to-slack-bot
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` con el siguiente contenido:

   ```env
   DISCORD_TOKEN=tu_token_de_discord
   SLACK_WEBHOOK_URL=tu_webhook_de_slack
   DISCORD_CHANNEL_ID=id_del_canal_de_discord
   ```

4. Compila y ejecuta el bot:

   ```bash
   npm run build
   npm start
   ```

## ☁️ Despliegue en Render

1. Sube tu proyecto a GitHub.
2. Crea un nuevo **Background Worker** en [Render](https://render.com).
3. Configura las variables de entorno en Render:

   * `DISCORD_TOKEN`
   * `SLACK_WEBHOOK_URL`
   * `DISCORD_CHANNEL_ID`
4. Comando de inicio:

   ```bash
   npm install && npm run build && npm start
   ```

## 🛡️ Notas

* El bot solo reenvía mensajes del canal configurado en `DISCORD_CHANNEL_ID`.
* Ignora mensajes de otros bots automáticamente.
* Asegúrate de que el bot tenga permisos para leer mensajes en el canal de Discord.

## 📝 Licencia

MIT
