const Discord = require('discord.js');

exports.run = (client, message) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu komutu sadece **Yönetici** yetkisi olanlar kullanabilir"); 
  
message.channel.delete().then(a=>message.channel.clone({position: message.channel.position})).then(a=>a.send("Temizleme işlemi tamamlandı."))
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["kanaltemizle", "temizle"],
  permLevel: 0 
}
exports.help = {
  name: 'kanal-temizle', 
  description: 'kt', 
  usage: 'kt'
};