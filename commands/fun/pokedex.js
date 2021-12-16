module.exports = {
    name: 'pokedex',
    code: `$description[
	__:information_source: Information about the pokemon $message__
	
	:diamond_shape_with_a_dot_inside: **Type:**
	$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];type;Pokemon not found.]
	
	:gem: **Species:**
	$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];species;Pokemon not found.]	
	
	:sparkles: **Abilities:**
	$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];abilities;Could not load the "abilities" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].abilities"]
	
	:arrow_up: **Height:**
	$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];height;Could not load the "height" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].height"]
	
	:hamburger: **Weight:**
	$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];weight;Could not load the "weight" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].weight"]
	
	:brain: **Base Experience:**
	$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];base_experience;Could not load the "base_experience" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].base_experience"]
	
	:transgender_symbol: **Gender:**
	$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];gender;Could not load the "gender" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].gender"]
	
	:bar_chart: **Stats:**
	HP: $jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];stats.hp;Could not load the "stats.hp" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].stats.hp"]
	Attack: $jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];stats.attack;Could not load the "stats.attack" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].stats.attack"]
	Defense: $jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];stats.defense;Could not load the "stats.defense" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].stats.defense"]
	Speed: $jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];stats.speed;Could not load the "stats.speed" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].stats.speed"]
	
	:dna: **Evolution Line:**
	$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];family.evolutionLine;Could not load the "family.evolutionLine" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].family.evolutionLine"]
	
	]
	$thumbnail[$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];sprites.animated;Could not load the "sprites.animated" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].sprites.animated"]]
	$footer[$jsonRequest[https://some-random-api.ml/pokedex?pokemon=$replaceText[$message; ;+];description;Could not load the "description" in "SomeRandomApi.pokedex.$replaceText[$message; ;+].description"]]
	$color[RANDOM]`
}