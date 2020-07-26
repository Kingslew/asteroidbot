const Discord = require('discord.js');
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

exports.run = function(client, message) {
  
 
const verif = client.emojis.get("735245191132348498")
const kullanici = client.emojis.get("657628503784685617")

 const tarih = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 const embed = new Discord.RichEmbed()
 
    .setColor('#1D5385')
    .setTitle( verif + ' ASTEROID!')
    .addField(' Sunucular', client.guilds.size, true)
    .addField(' Kullanıcılar', client.guilds.reduce((a, b) => a + b.memberCount, 0), true)
    .addField(' Çalışma Süresi', tarih, true)
    .addField(' RAM ', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2), true)
    .addField(' discord.js ', "v"+Discord.version, true)
    .addField(' İşletim ', `\`\`${os.platform()}\`\``, true)
    .addField(' Geliştirici ', "<@287462297004146688>", true)
    .addField(" Bit ", `\`${os.arch()}\``, true)
    .addField(' Ping ', client.ping+" ms", true)
    .addField(" CPU ", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
    .addField('Bağlantılar', `[Davet Et](https://discordapp.com/oauth2/authorize?client_id=733758786459795626&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/8P2YuuY)`) 
    .setFooter("© 2020 asteroid bot", client.user.avatarURL)
    .setTimestamp()
 
 
 
 
  message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['botbilgi','i'], 
  permLevel: 0 
};

exports.help = {
  name: 'istatistik', 
  description: 'Botun İstatiğini Atar',
  usage: 'istatistik' 
};