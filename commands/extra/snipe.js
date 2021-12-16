module.exports = {
    name: 'snipe',
    code: `$color[RANDOM]
    $author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
    $description[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]
    $footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]] | $getChannelVar[snipe_date;$mentionedChannels[1;yes]]]
    $onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;Theres nothing to snipe in <#$mentionedChannels[1;yes]>]`
}