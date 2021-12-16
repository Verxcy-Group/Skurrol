module.exports = {
    name: 'comment',
    code: `$image[https://some-random-api.ml/canvas/youtube-comment?comment=$replaceText[$message; ;+]&avatar=$replaceText[$userAvatar[$authorID];.webp;.png]&username=$replaceText[$nickname; ;+]
    $color[RANDOM]
	$argsCheck[>1;Example Usage: !comment bye world]
	$cooldown[5s;Wait %time%. This cooldown is due to not get api rate limited. Again.]`
}