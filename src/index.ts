import { Client, GatewayIntentBits } from 'discord.js';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const { DISCORD_TOKEN, SLACK_WEBHOOK_URL, DISCORD_CHANNEL_ID } = process.env;

client.once('ready', () => {
  console.log(`✅ Bot conectado como ${client.user?.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!DISCORD_CHANNEL_ID || message.channel.id !== DISCORD_CHANNEL_ID || message.author.bot) return;

  try {
    await axios.post(SLACK_WEBHOOK_URL!, {
      text: `📨 *${message.author.username}* dice: ${message.content}`,
    });
  } catch (error) {
    console.error('Error al enviar a Slack:', error);
  }
});

client.login(DISCORD_TOKEN);
