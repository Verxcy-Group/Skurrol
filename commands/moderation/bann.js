module.exports = [{
    name: 'ban',
    code: `$title[User Banned]
    $description[The User <@$mentioned[1]> got banned
by: <@$authorID>]
    $ban[$mentioned[1]]
    $argsCheck[1;Usage: +ban @user]`
}, {
    name: 'bann',
    code: `$title[User Banned]
    $description[The User <@$mentioned[1]> got banned
by: <@$authorID>]
    $ban[$mentioned[1]]
    $argsCheck[1;Usage: +ban @user]`
}]