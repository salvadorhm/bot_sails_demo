var TelegramBot = require('node-telegram-bot-api');
var token = '256739780:AAFgmxDknfJd2CDI2F0g4FgROMR_90PQGkQ';

var bot = new TelegramBot(token, {polling: true});

bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);
});

// soy command
bot.onText(/^\/soy (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, `¡Hola ${name} !`).then(function () {
    console.log(`Saludando a ${name}`);
  });
});