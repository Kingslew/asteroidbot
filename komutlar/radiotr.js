const Discord = require("discord.js");
exports.run = async (client, msg) => {
  
  const panda = client.emojis.get("734170405392351243")
  
const radio = {
     "number1": "http://20723.live.streamtheworld.com/NUMBER1FM_SC?type=.mp3",
    "powerturk": "http://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio?/;stream.nsv",
    "power": "http://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio?/;stream.nsv",
    "metrofm": "http://17703.live.streamtheworld.com/METRO_FM_SC?type=.mp3",
    "fenomen": "http://listen.radyofenomen.com/fenomen/128/icecast.audio?/;stream.nsv",
    "bozkurtlarfm": "http://bozkurtlarfm.canliyayinda.com:4040/;stream.mp3",
    "fenomenfm": "http://fenomenoriental.listenfenomen.com/fenomenoriental/128/icecast.audio",
    "sonmezTV": "http://162.244.80.30:8122",
    "alemfm": "http://scturkmedya.radyotvonline.com/stream/80/",
    "joyfm": "http://17753.live.streamtheworld.com/JOY_FM128AAC_SC",
   "kralfm": "http://46.20.3.204",
    "linefm":"http://radioline.fm:8000/",
  "radyod": "http://radyo.dogannet.tv/radyod",
  "number1fm": "http://nr1digitalsc.radyotvonline.com/stream/264/",
  "cnnturk":"https://radyo.dogannet.tv/cnnturk",
"superfm": "http://17733.live.streamtheworld.com/SUPER_FM_SC",
"virgon": "http://17753.live.streamtheworld.com/VIRGIN_RADIO2_SC",
   "joyTurk":"http://17733.live.streamtheworld.com/JOY_TURK_SC",
"rastgele":"http://46.20.3.201/",
"powerfm" :"http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio",
"palstat": "http://shoutcast.radyogrup.com:1020/stream/1/",
"ntv": "http://ntvrdsc.radyotvonline.com/;",
"mydonese": "http://17733.live.streamtheworld.com/RADIO_MYDONOSE_SC",
"fg":"http://37.1.144.106:9001/stream/1/",
"stream":"http://yayin.netradyom.com:8050/stream/1/",
"voyage": "http://voyagewmp.radyotvonline.com/;",
"yon": "http://yonradyo.radyolarburada.com:8020/;",
"inbat":"http://allergo.serverroom.us:8127/;",
"nr1t": "http://46.20.4.61/;",
"eksen": "http://eksenwmp.radyotvonline.com/;stream.mp3",
  }
            if (!msg.guild.voiceConnection) {
                if (!msg.member.voiceChannel) return msg.channel.send('🎤 | **Sesli kanala giriş sağlayınız ve tekrar yazınız.**')
            }
            let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();
        if (!args) return msg.channel.send('📻 | Bir **radyo frekansı** seçiniz, aşağıda bulunan frekanslar geçerli. \n<a:arrowrainbow:735074870614032395> | Aşağıdaki **yazılışlara dikkat ederek** yazınız. \n > ↦ **number1** ° **powerturk** ° **metrofm** ° **fenomen** ° **powerfm** ° **ntv** \n > ↦ **joyturk** ° **alemfm** ° **joyfm** ° **kralfm** ° **number1fm** ° **radyod** \n > ↦ **linefm** ° **virgin** ° **sonmezfm** ° **rastgele** ° **bozkırlarfm** ° **palstat** \n > ↦ **fenomenfm** ° **mydonese** ° **fg** ° **stream** ° **voyage** ° **yon** \n > ↦ **imbat** ° **nr1t** ° **eksen**')
        if(!radio[args]) return msg.channel.send('<a:checkmark:735077854555144202> | Aşağıdaki **radyo frekans**larından başka frekans seçemezsiniz. \n > ↦ **number1** ° **powerturk** ° **metrofm** ° **fenomen** ° **powerfm** ° **ntv** \n > ↦ **joyturk** ° **alemfm** ° **joyfm** ° **kralfm** ° **number1fm** ° **radyod** \n > ↦ **linefm** ° **virgin** ° **sonmezfm** ° **rastgele** ° **bozkırlarfm** ° **palstat** \n > ↦ **fenomenfm** ° **mydonese** ° **fg** ° **stream** ° **voyage** ° **yon** \n > ↦ **imbat** ° **nr1t** ° **eksen**')
    msg.member.voiceChannel.join().then(connection => {
    require('http').get(radio[args], (res) => {
            connection.playStream(res);
     let embed = new Discord.RichEmbed()
        .setAuthor("Geçerli radyo frekansı, çalmaya başlıyor!", `https://media1.giphy.com/media/1QaZaUYD9aYttBKn4M/source.gif`)
        .setColor("#FFB900")
        .addField("Şu an çalan radyo frekansı;", panda +  args)
        .setFooter(msg.author.username, msg.author.avatarURL);
     msg.channel.send(embed);
          });
  });
  
  client.on('message', msg => {
  if (msg.author.id === client.user.id) return
  if (msg.content.startsWith('a*radyobitir')) {
    
    if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('#C34E4E')
    .setDescription('❎ | Herhangi bir ses kanalında değilsiniz!'));
    
    msg.member.voiceChannel.leave()
    
}});
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radido"],
    permLevel: 0,
    kategori:'kullanıcı'
};
exports.help = {
    name : "radyo",
    kategori: "genel",
    usage: "radyo",
    description: "radyo"
};