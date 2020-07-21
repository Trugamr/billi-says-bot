// Helper functions
const randomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const colors = ["red", "blue", "white"];

const randomCatTextUrl = (text, color, size) => {
  if (!color) color = colors[randomNumber(0, colors.length - 1)];
  if (!size) size = randomNumber(60, 100);
  return `https://cataas.com/c/s/${encodeURI(
    text
  )}?size=${size}&color=${color}`;
};

// Inline Query Handlers
// for cat with text
exports.catSaysInline = (ctx) => {
  const query = ctx.inlineQuery.query;

  const results = [];
  for (let i = 0; i < 9; i++) {
    const catUrl = randomCatTextUrl(query);
    results.push({
      type: "photo",
      id: i,
      thumb_url: catUrl,
      photo_url: catUrl,
      is_personal: true,
      photo_width: 300,
      photo_height: 200,
    });
  }

  ctx.answerInlineQuery(results, {
    cache_time: 0,
    is_personal: true,
  });
};
