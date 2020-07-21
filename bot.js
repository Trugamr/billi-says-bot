// Environment variables setup
require("dotenv").config();

const Telegraf = require("telegraf");
const { TELEGRAM_BOT_TOKEN } = process.env;

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

// Start Command
bot.start((ctx) => ctx.reply("meow"));

// Start polling
bot.launch();
