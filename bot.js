const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Broadcast Bot is Online`);

});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Quietness Server`,"http://twitch.tv/S-F")
  console.log('Online..,!!')
});



client.on('message', message => {
if (message.content.split(' ')[0] == '#bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ` + "\n" + message.content.substr(3));
                                                            message.delete();
});
});



client.on('message', message => {
if (message.content.split(' ')[0] == '#Qbc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send(message.content.substr(3));
                                                            message.delete();
});
});



client.login(process.env.BOT_TOKEN);
