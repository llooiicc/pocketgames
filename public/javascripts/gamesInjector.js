var gamesContainers =
    {
        action: document.querySelector('#action-pane'),
        shooting: document.querySelector('#shooting-pane'),
        race: document.querySelector('#race-pane'),
        arcade: document.querySelector('#arcade-pane')
    };

var tabs =
    {
        action: document.querySelector('#tab-action'),
        shooting: document.querySelector('#tab-shooting'),
        race: document.querySelector('#tab-race'),
        arcade: document.querySelector('#tab-arcade')
    };


$.getJSON('games.json', function (datas) {

    datas.games.forEach(function (game) {

        injectGame(game);
    })
});


function injectGame(game){

    var liModel = '<li>\n' +
        '    <a href="/player/{{game-name}}"' +
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

    if(game.category === "action"){

        document.querySelector('#'+gamesContainers.action.id+'-ul').innerHTML += liModel;
    }
    else if(game.category === "shooting"){

        document.querySelector('#'+gamesContainers.shooting.id+'-ul').innerHTML += liModel;
    }
    else if(game.category === "race"){

        document.querySelector('#'+gamesContainers.race.id+'-ul').innerHTML += liModel;
    }
    else if(game.category === "arcade"){

        document.querySelector('#'+gamesContainers.arcade.id+'-ul').innerHTML += liModel;
    }


    return 0;
}

reduceAll();

function reduceAll(){

    for (var k in  gamesContainers){
        gamesContainers['k'].style.height = "0px";
        gamesContainers['k'].style.overflow = 'hidden';
    }
}

