const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
  let kanalid = message.channel.id;
let channel = bot.channels.get("736119972069244978")
let embed = new Discord.RichEmbed()
.setThumbnail('https://www.upload.ee/image/12035986/d45e430acef94cb85edd50c9ea319f42.gif')
.setTitle("HATA Bildirisi")
.addField("Hatayı açıklayın;", bug)
.addField("Rapor Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu Kimliği", guildid, true)
.addField("Kanal", kanal, true)
.addField("Kanal Kimliği", kanalid, true)
.setFooter(bot.user.username, bot.user.avatarURL)
.setTimestamp()
.setColor("BLUE")
  const embed2 = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(
      `${message.author.username}, hata bildiriminiz geliştirici ekibine iletildi. Bildiriniz için teşekkürler!`)
    message.channel.send(embed2)
channel.send(embed).then(message => {
  message.react('❌')
  message.react('✔')
  });
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hatabildir', 'bugreport', 'bugbildir', 'hata', 'bug'],
  permLevel: 0  
};
exports.help = {
  name: 'bug-bildir',
  description: 'Botla ilgili hataları bildirirsiniz.',
  usage: 'bug-bildir'
}