//skidded from https://paste.gg/p/Leaf-Yt/b521c9518bf24b30b847cab079ed8482
module.exports = {
    name: "giveaway-start",
    aliases: "start",
    usage: "giveaway-start [channel | duration | winners | prize]",
    description: "Starts a giveaway",
    category: 'Giveaway',
    code: `$djsEval[(async () => {
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

let giveawayChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
let giveawayDuration = args[1];
let giveawayNumberWinners = args[2];
let giveawayPrize = args.slice(3).join(' ');

if (!giveawayChannel) {
    return message.channel.send('🛑 You have to mention a valid channel, Usage: \`$getservervar[prefix]giveaway-start [channel | duration | winners | prize]\`');
} else if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
    return message.channel.send('🛑 You have to specify a valid duration, Usage: \`$getservervar[prefix]giveaway-start [channel | duration | winners | prize]\`');
} else if(isNaN(giveawayNumberWinners) || giveawayNumberWinners > 50 || giveawayNumberWinners < 1){
    return message.channel.send('🛑 You have to specify a valid number of winners min: 1 max: 50, Usage: \`$getservervar[prefix]giveaway-start [channel | duration | winners | prize]\`');
} else if (!giveawayPrize) {
    return message.channel.send('🛑 You have to specify a valid prize, Usage: \`$getservervar[prefix]giveaway-start [channel | duration | winners | prize]\`');
} else if (giveawayPrize.length > 100) { 
    giveawayPrize = giveawayPrize.slice(0, 50) + '...';
}
	
client.giveawaysManager.start(giveawayChannel, {
    duration: ms(giveawayDuration),
    prize: giveawayPrize,
    winnerCount: parseInt(giveawayNumberWinners),
    hostedBy: message.author,
    messages: {
        giveaway: "**🎉 Giveaway**",
        giveawayEnded: "**🏳️ Giveaway Ended**",
        timeRemaining: "Time remaining: **{duration}**!",
        inviteToParticipate: "React with 🎁 to participate!",
        winMessage: "Congratulations, {winners}! You won **{this.prize}**! ➔ {this.messageURL}",
        embedFooter: {
            text: '{this.winnerCount} winner(s)',
            iconURL: client.user.displayAvatarURL()
        },
        noWinner: "Giveaway cancelled, no valid participations.",
        hostedBy: "Hosted by: {this.hostedBy}",
        winners: "winner(s)",
        endedAt: "Ended at",
        units: {
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days",
            pluralS: false
        }
    }
});

message.channel.send(\`Giveaway started in \$\{giveawayChannel\}!\`);
})()]`
}
