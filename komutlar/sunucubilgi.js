const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
exports.run = (bot, message, params) => {
  const filterLevels = ['Yok', 'Rolü Olmayanlar İçin', 'Uygun durumda!']
       const tarih =  message.guild.createdAt

let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }

   const embed = new Discord.RichEmbed()
   .setColor("#D2EE07")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL,)
      .addField('<a:arrowrainbow:735074870614032395> Sunucu Adı & Kimliği', `📝 ${message.guild.name + ', '+ message.guild.id}`, false)
   		.addField('<a:arrowrainbow:735074870614032395>  Kanallar', `:small_orange_diamond: Toplam: ${message.guild.channels.size} :small_orange_diamond: \n :keyboard: Metin: ${message.guild.channels.filter(c => c.type === "text").size} | :microphone2: Sesli: ${message.guild.channels.filter(c => c.type === "voice").size}`, false)
      .addField('<a:arrowrainbow:735074870614032395> Üye İstatistikleri;', `:busts_in_silhouette: Üye: ${message.guild.memberCount} | :red_circle: Çevrimiçi: ${message.guild.members.filter(m => m.user.presence.status != "offline").size}`, true)
			.addField('<a:arrowrainbow:735074870614032395>  Kaç adet rol var?', `:lock: ${message.guild.roles.size}`,false)
   		.addField('<a:arrowrainbow:735074870614032395>  Hangi roller var?', message.guild.roles.map(roles => `\`${roles.name}\``).join(' '))
			.addField('<a:arrowrainbow:735074870614032395> Sakıncalı İçerikler;', `:underage: ${filterLevels[message.guild.explicitContentFilter]}`,false)
      .addField('<a:arrowrainbow:735074870614032395>  Bölge', message.guild.region.replace('europe',':map: Avrupa'),false)
      .addField('<a:arrowrainbow:735074870614032395>  Ne zaman oluşturuldu?', `:calendar_spiral: ${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
      .addField('<a:arrowrainbow:735074870614032395>  İşte sunucu sahibi;', `:crown: ${message.guild.owner.user+''}`,false)
   .setFooter("© 2020 asteroid bot", bot.user.avatarURL)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✓');
 };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['sunucubilgi'],
   permLevel: 0
 };

 exports.help = {
   name: 'sunucu-bilgi',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'sunucu-bilgi'
 };