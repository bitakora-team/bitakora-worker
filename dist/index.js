"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.MessageContent],
});
const { DISCORD_TOKEN, SLACK_WEBHOOK_URL, DISCORD_CHANNEL_ID } = process.env;
client.once('ready', () => {
    console.log(`✅ Bot conectado como ${client.user?.tag}`);
});
client.on('messageCreate', async (message) => {
    if (!DISCORD_CHANNEL_ID || message.channel.id !== DISCORD_CHANNEL_ID || message.author.bot)
        return;
    try {
        await axios_1.default.post(SLACK_WEBHOOK_URL, {
            text: `📨 *${message.author.username}* dice: ${message.content}`,
        });
    }
    catch (error) {
        console.error('Error al enviar a Slack:', error);
    }
});
client.login(DISCORD_TOKEN);
