module.exports = {
    name: 'hug',
    code: `$if[$isMentioned[$authorID]==true]
	You can't hug yourself! sowwy :'(
	$elseIf[$message[1]==$nickname[$authorID]]
	You can't hug yourself! sowwy :'(
	$endelseIf
	$else
	$dm[]
	<@$authorID> gives $message[1] a hug
	$image[$jsonRequest[https://some-random-api.ml/animu/hug;link;Could not load "link" in random.hug.api]]
	$cooldown[5s;Wait %time%. This cooldown is due to not get api rate limited. Again.]
    $color[RANDOM]
	$endIf
	$argsCheck[1;Usage: !hug @user]`
}