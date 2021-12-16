module.exports = {
    name: 'mute',
    code: `$if[$getServerVar[mute]==1]
    Please set the mute role first!
    Use: +set-mute <@role>
    $else
    $giveRole[$mentioned[1];$getServerVar[mute]]
    $title[Successfully Muted]
    $description[Muted <@$mentioned[1]>]
    $color[RED]
    $endIf`
}