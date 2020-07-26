const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
   
  var embed2 = new Discord.RichEmbed()   
      .setTitle('Merhaba, ' + message.member.user.username)
      .setDescription('Sadece geliştirici yeniden başlatma işlemi yapabilir, kutsi#3067')
      .setColor('RED') 
  

  if(message.author.id !== "287462297004146688") return message.channel.sendEmbed(embed2)
     
  var embed = new Discord.RichEmbed()   
      .setTitle('**Merhaba, ben ASTEROID!**')
      .setDescription('Beni beni, botunu. Yeniden başlatmak mı istiyorsun? O zaman onaya tıkla.')
      .setColor('#1D5385')
      message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["✅"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => message.delete().then(mr => sentEmbed.delete()).then(m => message.delete()).then(m2 => message.author.send("Yeniden başlatma işlemi iptal edildi! "))) 
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {
  try {
    message.delete().then(mr => sentEmbed.delete()).then(wb => { 
 console.log(`ASTEROID: Yeniden başlıyorum, bir süre bekleyiniz.`);
    process.exit(0);
    })
  } catch (err) {
  // Pudochu
    message.channel.send(`**Hata:** \n\`\`\`js\n${err}\n\`\`\``);
  
};

        }
    })
})

};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reboot', 'Reboot', 'yenidenbaşlat', 'yenile', 'rebot', 'rebooot', 'reboott', 'treboot'],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'
};