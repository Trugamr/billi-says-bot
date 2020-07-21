// Environment variables setup
require("dotenv").config();

const Telegraf = require("telegraf");
const { TELEGRAM_BOT_TOKEN } = process.env;
const { catSaysInline } = require("./commands");

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

// Start Command
bot.command(["start", "help"], (ctx) => {
  ctx.reply(
    `
*Use this bot inline*
@billisaysbot \`<text>\`
  `,
    {
      parse_mode: "markdown",
    }
  );
});

// Inline query listener
bot.on("inline_query", catSaysInline);

// Start polling
bot.launch();
