const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ",";

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("No help for you!");
  }
  if (message.content.startsWith("pleb ")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send(message.content.slice(5, message.content.length));
   }
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
