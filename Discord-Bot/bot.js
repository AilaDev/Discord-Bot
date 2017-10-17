//#region Basic Variables
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
//#endregion

//#region Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
//#endregion

//#region Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
// Listener for ready event and Logging bot login
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
//#endregion

//#region Listener for all messages
bot.on('message', function (user, userID, channelID, message, evt) {
    // Aila needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            case 'Hello':
                bot.sendMessage({
                    to:channelID,
                    message: 'Hello my friend'
                });
            case 'I am your friend?':
                bot.sendMessage({
                    to:channelID,
                    message: 'You are not my friend my friend.. You are my brother my friend!'
                });
            break;
         }
     }
});
//#endregion