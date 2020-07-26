const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
 
  let pages = [
              '**:question: Size bot hakkında birkaç bilgi vereyim;**\n\n  **Başlangıç:** ` 20.07.2020 ` \n  **Geliştirici:** ` kutsi#3067 ` \n  **Discord.js:** ` v11.x ` \n  **` ⬅/➡ ` emojileri ile sayfalar arası geçiş yapabilir ve diğer komutları görebilirsiniz.** \n\n  **[Davet et](https://discordapp.com/oauth2/authorize?client_id=733758786459795626&scope=bot&permissions=8)** | **[Destek Sunucusu](https://discord.gg/JC2sKWc)**',
              '**:musical_note:  Müzik Komutları**\n\n  **` a*çal `** ile  dilediğiniz şarkıyı dinleyebilirsiniz. \n **` a*durdur `** ile şarkıyı durdurabilirsiniz. \n **` a*devam `** ile şarkıya kaldığınız yerden devam edebilirsiniz. \n  **` a*geç `** ile sıradaki şarkıya geçebilirsiniz. \n **` a*çık `** ile şarkıyı sonlandırıp, botu odadan çıkartabilirsiniz.',
              '**:gear:  Diğer Komutlar**\n\n  **` a*sunucubilgi `** komutu kullandığınız sunucu hakkında bilgiler verir. \n **` a*bugbildir `** ile botun hatalarını geliştirici ekibine bildirebilirsiniz. \n **` a*duello `** ile sunucunuzda bulunan biriyle güç düellosu atabilirsiniz. \n  **` a*emoji/emojiler `** ile sunucunuzda bulunan emojileri görebilirsiniz, ID ile sırayabilirsiniz. \n **` a*konuş `** ile bota Google Çeviri aracılığıyla istediğiniz cümleyi söyletebilirsiniz. \n **` a*çekiliş `** ile dilediğiniz zamanı belirterek çekilişi başlatabilirsiniz. (Min: Saniye) \n **` a*radyo `** ile botu odanıza çağırıp belirli radyo frekanslarından birini dinleyebilirsiniz. (Birkaç radyo frekansı git-gel yapıyor, diğerlerini deneyiniz.) \n **` a*capslockengel `** komutuyla sunucunuzda büyük harf yazımını engelleyebilirsiniz veya izin verebilirsiniz. \n **` a*oylama `** ile seçtiğiniz kanalda Ever/Hayır oylaması yapabilirsiniz. \n **` a*temizle `** ile yazdığınız kanaldaki mesajları silebilirsiniz.  \n **` a*afk `** ile sebep belirterek AFK durumuna geçebilirsiniz. (Yönetici yetkisine sahip kişilerin ismi değişmez, yetki sırası.) \n **` a*reklamtara `** ile kullanıcı adlarında ve durumlarında reklam içeriği olup olmadığını tarayabilirsiniz.',    
    
              ];
  let page = 1;
 
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setTitle("🌠  ASTEROID!", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {
 
  msg.react('⬅')
  .then(r => {
    msg.react('➡')
 
      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
 
    })
  })
};
 
 
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h", "yardım"],
permLevel: 0
};
 
exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};
