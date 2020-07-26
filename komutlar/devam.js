const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBpq7DClChwi01sRYRWsBH02SmukI8Qvxw');

exports.run = async (client, message, args) => {
    const queue = client.queue;

    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const a = new RichEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**`)  
  if (!voiceChannel) return message.channel.send(a)

    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new RichEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:play_pause: Resuming :thumbsup:`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    const b = new RichEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: Şu anda şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(b);

};

exports.conf = {
    enabled: true,
    aliases: ['r', 'resume', 'devam'],
    permLevel: 0
};

exports.help = {
    name: 'resum',
    description: 'Duraklatılmış şarkıyı devam ettirir.',
    usage: 'devamet'
};