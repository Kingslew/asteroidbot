const Discord = require("discord.js");
const google = require("google-tts-api");
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;
exports.run = (client, message) => {
      const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(`Konuşmam için senin bir sesli kanala giriş yapman lazım.`)
    google(`${args.slice(' ')}`, 'tr', 1).then(url => {
        message.member.voiceChannel.join().then(connection => {
            message.channel.send(`**${args.slice(' ')}** adlı metin sesli olarak söylüyorum, izle.`)
            connection.playStream(url).on("end", () => {
                connection.disconnect();
            })
        })
    })
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['konus', 'konuş'],
    permLevel: 1
};
exports.help = {
    name: 'söyle',
    description: 'Bota yazdığınız şeyi sesli mesaj olarak söyletir',
    usage: 'söyle <mesaj>'
};