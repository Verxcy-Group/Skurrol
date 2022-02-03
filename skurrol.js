const Aoijs = require("aoi.js")
const config = require('./config.json')

const { GiveawaysManager } = require('discord-giveaways');
bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",	
    default: {
        botsCanWin: false,
        embedColor: "#1793ff",
        embedColorEnd: "#EE3C23",
        reaction: "🎁"
    }
})

const bot = new Aoijs.Bot({
    token: config.token, 
    prefix: config.prefix
})

bot.variables({
    playing: "0",
    prefix: "+",
    queue: "0",
    //Put here your UserID
    owner: "",
    snipe_msg: "",
    snipe_author: "",
    snipe_channel: "",
    snipe_date: "",
    msgEditorID: "undefined",
    esnipeOldMsg: "undefined",
    //Put in here the channel id where the bot should log things
    logChannel: "",
    mute: "1",
    //Put here your api key from apivoid.com
    apikeys: "KEY1;KEY2"
})

bot.status({
    text: "Just vibin'",
    type: "STREAMING",
    url: "https://twitch.tv/real_bycrxhit",
    time: 10
})

bot.status({
    text: "against MEE6 ;D",
    type: "COMPETING",
    status: "idle",
    time: 10
})

bot.rateLimitCommand({ 
    channel: "$getVar[logChannel]",
    code: `
> **IMPORTANT**
Abuse Detected!
    Timeout: $rateLimt[timeout]
    Limit: $rateLimit[limit]
    Method: $rateLimit[method]
    Path: $rateLimit[path]
    Route: $rateLimit[route]
    `
})
bot.onRateLimit()

bot.readyCommand({
    channel: "$getVar[logChannel]",
    code: `
    $color[GREEN]
    $description[Succesfully Restarted bot!]
    `
})

/* Callbacks for Snipe Function */
bot.updateCommand({
    channel: "$channelID",
    code: `
    $setChannelVar[msgEditorID;$authorID]
    $setChannelVar[esnipeOldMsg;$oldMessage]
    `
})
bot.onMessageUpdate();

bot.deletedCommand({
    channel: "$channelID",
    code: `
    $setChannelVar[snipe_msg;$message]
    $setChannelVar[snipe_author;$authorID]
    $setChannelVar[snipe_channel;$channelID]
    $setChannelVar[snipe_date;$day $month $year - $hour:$minute]
    `
});
bot.onMessageDelete()

bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./commands/`) //Allows Commands executed from the "commands" folder
