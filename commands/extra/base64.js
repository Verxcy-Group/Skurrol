module.exports = {
    name: 'base64',
    code: `$description[
Your Message:
$message

Base64 Encode:
$jsonRequest[https://some-random-api.ml/base64?encode=$replaceText[$message; ;+];base64;Could not load the base64 decoder.]]
$cooldown[5s;Wait %time%. This cooldown is due to not get api rate limited. Again.]
$color[RANDOM]`
}

