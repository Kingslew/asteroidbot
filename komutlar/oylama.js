const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu kullanmanız için `Yönetici` yetkisine sahip olmalısınız.')


    let d = await db.fetch(`okanal_${message.guild.id}`)
    const sea = message.guild.channels.get(d)
    if (!sea) {
        let okanal = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x216BC2)
            .setDescription("Oylama kanalı ayarlanmamış. Ayarlamak için `a*oylama-kanal #kanal`")
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp()
        return message.channel.send(okanal)
    }
    let yazi = args.slice(0).join(' ')
    if (!yazi) {
        let oicerik = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setColor(0x216BC2)
        .setDescription("Oylama içeriği ile birlikte belirtiniz. (Evet/Hayır) cevaplı sorular olmasına özen göstersiniz.")
        .setFooter('🌠  Oylama Sistemi', client.user.avatarURL)
        .setTimestamp() 
      return message.channel.send(oicerik)
    } 
    message.channel.send(`Oylama gönderildi. Gönderilen kanal: <#${d}>`)
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('**Oylama içeriği;**', `**${yazi}**`)
        .setThumbnail(`https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png`)
        .setFooter("© 2020 asteroid bot", client.user.avatarURL)
        .setTimestamp()
        .setTitle(`**${client.user.username} | Oylama Sistemi**`)
    sea.send({embed: embed}).then(m => {
        let re = m.react('✅');
        let ra = m.react('❌');

    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oylama-yap', 'oylamayap', 'oylamalar'],
    permLevel: 2,
    kategori: "yetkili"
};

exports.help = {
    name: 'oylama',
    description: 'Bulunduğunuz kanala oylama yapar.',
    usage: 'oylama'
};