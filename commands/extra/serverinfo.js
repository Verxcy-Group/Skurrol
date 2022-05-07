/*
  INFO: 
  This takes alot power when sending,
  so be prepared for the bot to crash
  or for it to take a while to send.
*/
module.exports = {
    name: 'serverinfo',
    code: `$thumbnail[$serverIcon]
    $color[RANDOM]
    $title[About The Server]
    $description[
    📝 **Name:** 
    $serverName

    😎 **Emojis:**
    $serverEmojis

    🌎 **Server Region:**
    $serverRegion

    👮 **Security Level:**
    $serverVerificationLevel

    🔥 **Channels:**
    $channelCount[category] Categories
    $channelCount[text] Text Channels
    $channelCount[voice] Voice Channels

    ⏫💖 **Boost Level:**
    Level $serverBoostLevel

    💖 **Boosts:**
    $serverBoostCount Boosts

    📊 **Members:**
    $membersCount Members
    $botCount Bots

    🔨 **Bans:**
    $banCount Bans]`
}
