var gamesContainer = document.querySelector('#og-grid');
var globalContainer = document.querySelector('.wrap');

$.getJSON('games.json', function (datas) {

    datas.games.forEach(function (game) {

        injectGame(game);
    })
});

function injectGame(game){

    var liModel = '<li>\n' +
        '    <a href="/games/{{game-name}}"' +
        '       data-gameurl="{{gameUrl}}"' +
        '       data-largesrc="{{largesrc}}" ' +
        '       data-title="{{title}}" ' +
        '       data-description="{{description}}">\n' +
        '        <img class="img-responsive" src="{{img-src}}" alt="{{alt-img}}"/>\n' +
        '    </a>\n' +
        '</li>';

    liModel = liModel
        .replace('{{img-src}}', game.assets[0])
        .replace('{{game-name}}', game.name);

    gamesContainer.innerHTML += liModel;

    return 0;
}
