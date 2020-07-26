const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(`Capslock engelleme adlı komutu kullanabilmek için **SUNUCUYU_YÖNET** yetkisine sahip olmalısınız.`)
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:fire: **SUNUCUYU_YÖNET** yetkisine sahip değilsiniz!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`<a:stop:735117811260850216> Büyük harf yazım sistemi şu anda **devre dışı!**`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`<a:checkmark:735077854555144202> Büyük harf yazım sistemi devreye girdi, **aktif halde!**`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel', 'capslockengel'],
  permLevel: 3
};

exports.help = {
  name: 'capslock-engelleme',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};