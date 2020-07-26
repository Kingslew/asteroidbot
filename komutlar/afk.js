const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let user = message.author.username;
  const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (kisi) return;
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.get(message.author.id);
    const b = kullanıcı.displayName;
 
    await db.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebep Belirtmemiş."
    );
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
 
    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );
 
    let afkol = new Discord.RichEmbed()
      .setColor('#1D5385')
      .setTitle('<a:verif_blue:735245191132348498>  Asteroid! AFK Sistemi')
      .setDescription(message.author.username + `, kendini ${a} sebebiyle AFK durumuna aldın.`)
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp()
    message.channel.send(afkol)
    message.delete();
 
    message.member.setNickname(`[AFK] ` + b);
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.get(message.author.id);
    const b = kullanıcı.displayName;
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );
 
    let afkol = new Discord.RichEmbed()
      .setColor('#1D5385')
      .setTitle('<a:verif_blue:735245191132348498>  Asteroid! AFK Sistemi')
      .setDescription(message.author.username + `, kendini ${a} sebebiyle AFK durumuna aldın.`)
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp()
    message.channel.send(afkol)
    message.delete();
 
    message.member.setNickname(`[AFK] ` + b);
  }
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};