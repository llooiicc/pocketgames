var header = document.querySelector('.header');
var iframe = document.querySelector('#game-frame');

resizeIframe();

window.addEventListener('resize', resizeIframe);

$.getJSON('/games.json', function (datas) {

    console.log(datas);
    datas['games'].forEach(function (game) {

        if(iframe.name === game.name){
             console.log(game);
             iframe.src = "https://" + game.embeded;
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



