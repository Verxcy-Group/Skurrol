const Aoijs = require("aoi.js")
const config = require('./config.json')

const bot = new Aoijs.Bot({
    token: config.token, 
    prefix: ["?", "!"]
})

//JOIN THE DISCORD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//https://skurrol.tk/invite!=discord

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
    //Put here your api key from apivoid.com but you could also use our ones :)
    apikeys: "179bdf909f9fa1e347e169af3e070d08564f02de;7d2b2fc35a883ec31d137bd56c7c33c699ebb11b;cfcf6a5fc8273a4985c000f080d86a77962d96eb"
})

bot.status({
    text: "Just vibin'",
    type: "STREAMING",
    url: "https://twitch.tv/real_bycrxhit",
    time: 10
})

bot.status({
    text: "against MEE6",
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
    $description[Succesfully Restarted bot!
    Connected to Web Socket.
    Connected to API's:
    [byCRXHIT Network](http://bycrxhit.de)
    [MC Head Database](https://mc-heads.net)]
    `
})

/*
    Callbacks for Snipe Function
*/

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

/*
    Callback for music
*/

bot.musicEndCommand({
    channel: "$channelID",
    code: `
    $title[Stopped Song]
    $description[Nothing to play in the queue anymore. Leaving voice channel.]
    $color[RED]
    `
})

bot.musicStartCommand({
    channel: "$channelID",
    code: `
    $title[Playing Song]
    $description[Playing: **$songInfo[title]**
    Lenght: **$songInfo[duration] Minutes**
    Uploaded by: **$songInfo[publisher]**]
    $color[GREEN]
    $thumbnail[$songInfo[thumbnail]]
    `
})

bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder
