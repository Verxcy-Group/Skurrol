module.exports = {
    name: 'kick',
    code: `$kick[$mentioned[1]]
    $title[User Kicked]
    $color[YELLOW]
    $description[The User <@$mentioned[1]> got kicked
by <@$authorID>]
    $argsCheck[1;Usage: +kick @User]`
}