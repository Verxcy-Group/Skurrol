module.exports = [{
    name: 'meme',
    code: `$image[$jsonRequest[https://api.leref.ga/memes;data.url;Could not find a meme. Please try again if it's still not works, contact a Developer.]]
    $footer[Debug: $random[1;186].png]
    $cooldown[4s;Wait %time%. This is due to api limitations.]`
}, {
    name: 'memes',
    code: `$image[$jsonRequest[https://api.leref.ga/memes;data.url;Could not find a meme. Please try again if it's still not works, contact a Developer.]]
    $footer[Debug: $random[1;186].png]
    $cooldown[4s;Wait %time%. This is due to api limitations.]`
}]