var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = 'E#'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "516307527806484490") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});
const moment = require('moment')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`E#help `,`E#inv`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/IDK`);
    }, ms);100000

});
client.on("message", message => {
    if (message.content === ("E#help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ------------------------------
         E#bc : برودكاست لجميع اعضاء السيرفر بايمبد
         ------------------------------
         E#id : عرض ملفك الشخصي
         E#server : احصائيات السيرفر
         ------------------------------
         E#clear : مسح الشات
         E#createroles : عمل رتب متكاملة للسيرفر
         E#voicesetup : انشاء روم فويس اونلاين
         لكتابة الكلام الذي في الروم اكتب _voicesetup الكلام و 0 
         ------------------------------
         E#guilds : عدد سيرفر البوت
         E#inv : دعوه البوت الى سيرفر
         E#help : عرض هذه الرسالة
         ------------------------------
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === ("E#help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});

client.on('message', function(msg) {
    if(msg.content.startsWith ('E#server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
 
client.on('message', message => {
    if (message.content.startsWith("E#avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
if (message.content.startsWith("E#ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
client.on('message', message => {
if (message.content.startsWith("E#cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
          
        }
});
client.on('message', message => {
  if (true) {
if (message.content === 'E#inv') {
      message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=533424638169186314&permissions=8&scope=bot').catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === "E#inv") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


  
client.on("message", message => {
    if(message.content.startsWith ("E#id")) {
if (!message.channel.guild) return message.reply('** This command only for servers **');		
        const embed = new Discord.RichEmbed();
    embed.addField(":cloud_tornado:  الاسم", `**[ ${message.author.username}#${message.author.discriminator} ]**`, true)
            .addField(":id:  الايدي", `**[ ${message.author.id} ]**`, true)
            .setColor("RANDOM")
            .setFooter(message.author.username , msg.author.avatarURL)
            .setThumbnail(`${message.author.avatarURL}`)
            .setTimestamp()
            .setURL(`${message.author.avatarURL}`)
            .addField(':spy:  الحالة', `**[ ${message.author.presence.status.toUpperCase()} ]**`, true)
            .addField(':satellite_orbital:   يلعب', `**[ ${message.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
            .addField(':military_medal:  الرتب', `**[ ${message.member.roles.filter(r => r.name).size} ]**`, true)
            .addField(':robot:  هل هو بوت', `**[ ${message.author.bot.toString().toUpperCase()} ]**`, true);
        message.channel.send({embed: embed})
    }
  });

client.on('message', message => {
    var prefix = "E#";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == 'E#bc') {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        if (!args[1]) {
    message.channel.send("**E#bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send('**I Dont Have `ADMINISTRATOR` Permission**')
       if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send('**You Dont Have `ADMINISTRATOR` Permission**')
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                .setThumbnail(message.author.avatarURL)
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
    


client.on('message',function(message) {
   if(message.content.startsWith("E#guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});


      client.on('message', async message => {
  if(message.content.startsWith("E#voicesetup")) {
	  if (!message.channel.guild) return message.reply('** This command only for servers **');
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});

client.login('NTMzNDI0NjM4MTY5MTg2MzE0.DyEXIA.Jaot3AuhkWw3Vsg7cOMA2onMpzM');
