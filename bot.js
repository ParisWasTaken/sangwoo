const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzM4MTY4ODQ0NDg4ODAyMzU2.XyH_Tw.3-6kLEdG71LeLrxvNGFl_HMnaJs);//BOT_TOKEN is the Client Secret
