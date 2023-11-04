const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js');


//Discord bot
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.login(process.env.BOT_TOKEN);

function startBot() {
    // Handle discord messages
    client.on('message', (message) => {
        if (message.author.bot) return;
        
        // Only handle twitter links
        if ((message.content.indexOf('https://twitter.com') >= 0 || message.content.indexOf('https://x.com') >= 0) && message.content.indexOf('/status/') >= 0) { //TODO: use regex
            //console.log(`[${message.author.tag}]: ${message.content}`);
            
            const fixedMessage = message.content.replace("https://twitter.com", "https://fxtwitter.com").replace("https://x.com", "https://fxtwitter.com");
            message.reply(fixedMessage);
        }

        else if (message.content === '!gfi' || message.content === '!fgi') {
            let d = new Date();
            var date = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`
            message.reply(`https://alternative.me/images/fng/crypto-fear-and-greed-index-${date}.png`);
        }
    });
}

startBot();

