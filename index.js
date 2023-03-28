const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '-',
    owner: '277506597197185035',
    invite: 'https://discord.gg/TbtT8Hp3'
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('music', 'Music')
    .registerCommandsIn(path.join(__dirname, 'commands'))

//event
client.once('ready', () => {
    console.log(`Connecter en tant que ${client.user.tag} - (${client.id})`);
})

//raise error
client.on('error',(error) => console.error(error));

client.login('MTA4OTI1NDAyMDQ0MDQwODE1NQ.G_xaq9.LDNnOwzGfFT8psUAQBDXdKUt_-3PvTM-AFbWxI');


