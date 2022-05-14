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
    //Just Ignore - This is to make some commands work
    playing: "0",
    queue: "0",
    snipe_msg: "",
    snipe_author: "",
    snipe_channel: "",
    snipe_date: "",
    msgEditorID: "undefined",
    esnipeOldMsg: "undefined",
    mute: "1",

    //ID of the Channel where Skurrol should send logs
    logChannel: "",
    
    //Put here your api key from apivoid.com
    //Used by the +status command. You can deactivate/remove it if you don't need it.
    apikeys: "API_KEY"
})

bot.status({
    text: "Bot Status1",
    type: "STREAMING",
    url: "https://twitch.tv/real_bycrxhit",
    time: 10
})

bot.status({
    text: "Bot Status2",
    type: "COMPETING",
    status: "idle",
    time: 10
})

bot.rateLimitCommand({ 
    channel: "",
    code: `
    $log[
      ─━━━━━━━━━━━━━RATE LIMIT━━━━━━━━━━━━━─
      Timeout: $rateLimt[timeout]
      Limit: $rateLimit[limit]
      Method: $rateLimit[method]
      Path: $rateLimit[path]
      Route: $rateLimit[route]
      ─━━━Created by Verxcy Development━━━━─
    ]
    `
  })
  bot.onRateLimit()

bot.readyCommand({
  channel: '',
  code: `
  $log[
      ─━━━━━━━Ready Command Code━━━━━━━━━━━─
      Client: $userTag[$clientID]
      Ping: $ping ms
      Bot Creator: $username[$botOwnerID]#$discriminator[$botOwnerID]
      Commands loaded: $commandsCount
      ─━━━Created by Verxcy Development━━━━─
  ]`
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
