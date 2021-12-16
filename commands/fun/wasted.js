module.exports = {
    name: 'wasted',
    code: `$if[$isMentioned[$mentioned[1]==true]]
	$description[Wasted moment for <@$mentioned[1]>]
	$image[https://some-random-api.ml/canvas/wasted?avatar=$replaceText[$userAvatar[$mentioned[1]];.webp;.png]]
    $color[RANDOM]
	$else
	Please @mention someone!
	$endIf
	$argsCheck[1;Usage: !wasted @user]
	$cooldown[5s;Wait %time%. This cooldown is due to not get api rate limited. Again.]`
}