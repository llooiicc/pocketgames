var header = document.querySelector('.header');
var iframe = document.querySelector('#game-frame');
var gameType = document.querySelector('#frame-datas').dataset.gametype;

resizeIframe();

window.addEventListener('resize', resizeIframe);

var file = '/' + gameType + "-games.json";

$.getJSON(file, function (datas) {

console.log(datas);
    datas.forEach(function (game) {

        if(iframe.name === game.title){
             console.log(game);
             var src =  "https://cloudgames.com/games/html5/" +
                 game.identifier +
                 "/index.html?pub=10"
             iframe.src = src;
        }

    })
});

function resizeIframe(){

    var h = window.innerHeight;
    var w = window.innerWidth;

    var headerH = header.offsetHeight;
    var iframeH = h - headerH;

    // iframe.height = iframeH;
    iframe.height = innerHeight;

}



