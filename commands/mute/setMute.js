module.exports = [{
    name: 'setmute',
    code: `$setServerVar[mute;$mentionedRoles[1]]
    $title[Mute-role set!]
    $description[Succesfully set the Mute Role!
    Mute Role: <@&$mentionedRoles[1]>]
    $color[GREEN]`
}, {
    name: 'set-mute',
    code: `$setServerVar[mute;$mentionedRoles[1]]
    $title[Mute-role set!]
    $description[Succesfully set the Mute Role!
    Mute Role: <@&$mentionedRoles[1]>]
    $color[GREEN]`
}]