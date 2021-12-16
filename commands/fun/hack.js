module.exports = {
    name: 'hack',
    code: `$if[$isMentioned[$mentioned[1]]==true]
	Brute Forcing <@$mentioned[1]>'s Password...$editIn[7s;Brute Force 100% Complete. Getting Token...;Succesful grabbed token: $jsonRequest[https://some-random-api.ml/bottoken;token;Could not load the "token" in SomeRandomApi.bottoken.token.];Haha jk no one get's hacked. Just chill m8 xdddd]
    $else
	Please @mention someone to hack!
	$endIf`
}