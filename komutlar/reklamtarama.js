const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`**MESAJLARI_YÖNET** yetkisine hesap kişiler komuta erişebilir.`);

    const members = message.guild.members.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.RichEmbed()
        .addField('Durum mesajında reklam olan kullanıcılar;', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Durum mesajında reklam içeriği bulunan kullanıcı yok.")
        .addField('Kullanıcı adında reklam olan kullanıcılar;', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kullanıcı adında reklam içeriği bulunan kullanıcı yok.")
        .setColor("ORANGE")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklam-ara', 'reklamara', 'reklamtaraması', 'reklamtara'],
    permLevel: 1
}

exports.help = {
    name: 'reklam-taraması',
    description: 'Üyelerin oynuyor mesajındaki ve adlarındaki reklamları tarar.',
    usage: 'reklam-taraması'
}
