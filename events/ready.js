module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(`${client.user.id}                                                                                                                                                                     `)
 //client.user.setActivity(`🌠  a*yardım | ${client.guilds.size}  🖥️ | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} 👥`, { type: "LISTENING"});
   client.user.setActivity(`🌠 a*yardım | Asteroid!`, { type: "LISTENING"});  
//LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
 console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};