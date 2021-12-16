module.exports = {
    name: 'unmute',
    code: `$if[$getServerVar[mute]==1]
    Please set the mute role first!
    Use: +set-mute <@roleID>
    $else
    $takeRole[$mentioned[1];$getServerVar[mute]]
    $title[Successfully unmuted]
    $description[Un-Muted <@$mentioned[1]>]
    $color[GREEN]
    $endIf`
}