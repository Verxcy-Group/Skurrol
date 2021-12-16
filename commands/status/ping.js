module.exports = {
    name: 'ping',
    code: `$replaceText[$djsEval[const {MessageEmbed} = require('discord.js')
    if ($ping > 300) {
    const pingA = new MessageEmbed() 
    .setTitle('Pong! | 🏓')
    .setDescription("$ping ms | 🔴")
    .setColor("RED")
    .setTimestamp()
    d.message.channel.send(pingA)
    } else if ($ping > 200) {
    const pingMO = new MessageEmbed() 
    .setTitle('Pong! | 🏓')
    .setDescription("$ping ms | 🟡")
    .setColor("YELLOW")
    .setTimestamp()
    d.message.channel.send(pingMO)
    } else if ($ping < 200) {
    const pingM = new MessageEmbed() 
    .setTitle('Pong! | 🏓')
    .setDescription("$ping ms | 🟢")
    .setColor("GREEN")
    .setTimestamp()
    d.message.channel.send(pingM)
    } else {
    const pingN = new MessageEmbed() 
    .setTitle('Pong! | 🏓')
    .setDescription("⚪ | $ping ms")
    .setColor("#fefefe")
    .setTimestamp()
    d.message.channel.send(pingN)
    }
    ];Promise { <pending> };]
   
    $cooldown[3s;You're on cooldown! Please wait %time%.]
    $suppressErrors[{color:FF0000}{title:Something went wrong...}{description:If you see this, something probably went wrong. Please immediately report this to the 
   developer!}]`
}