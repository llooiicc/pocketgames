//==========================================================//
//==========================================================//
var gamesContainers =
    {
        action: document.querySelector('#action-pane'),
        shooting: document.querySelector('#shooting-pane'),
        race: document.querySelector('#race-pane'),
        arcade: document.querySelector('#arcade-pane'),
        strategy: document.querySelector('#strategy-pane')
    };

var tabs =
    {
        action: document.querySelector('#tab-action'),
        shooting: document.querySelector('#tab-shooting'),
        race: document.querySelector('#tab-race'),
        arcade: document.querySelector('#tab-arcade'),
        strategy: document.querySelector('#tab-strategy')
    };

//==========================================================//
//==========================================================//
function startInjectGames(){

    files = [
        'action-games.json',
        'arcade-games.json',
        'shooting-games.json',
        'race-games.json',
        'strategy-games.json'
    ];

    files.forEach(function (file) {

        $.getJSON(file, function (datas) {

            datas.forEach(function (game) {

                injectGame(game)
            })
        })
    })
}


initTabListeners();
reduceAllPanes();
activeGamePane('action');
startInjectGames();


//==========================================================//
//==========================================================//
function initTabListeners(){

    tabs.action.addEventListener('click', function (e) {
        activeTab('action');
    });
    tabs.arcade.addEventListener('click', function (e) {
        activeTab('arcade');
    });
    tabs.race.addEventListener('click', function (e) {
        activeTab('race');
    });
    tabs.shooting.addEventListener('click', function (e) {
        activeTab('shooting');
    });
    tabs.strategy.addEventListener('click', function (e) {
        activeTab('strategy');
    });

}

function activeTab(tabName) {

    unactiveAllTabs();
    reduceAllPanes();
    tabs[tabName].className = "active";
    activeGamePane(tabName);
}

function unactiveAllTabs(){

    for(var k in tabs){

        tabs[k].className = "unactive";
    }
}

function injectGame(game){

    var liModel = '<li>\n' +
        '    <a href="/player/{{game-type}}/{{game-name}}"' +
        '       data-gameurl="{{gameUrl}}"' +
        '       data-largesrc="{{largesrc}}" ' +
        '       data-title="{{title}}" ' +
        '       data-description="{{description}}">\n' +
        '        <img class="img-responsive" src="{{img-src}}" alt="{{alt-img}}"/>\n' +
        '    </a>\n' +
        '</li>';

    liModel = liModel
        .replace('{{game-type}}', game.category)
        .replace('{{img-src}}', game.thumbnail)
        .replace('{{game-name}}', game.title);

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
    else if(game.category === "strategy"){

        document.querySelector('#'+gamesContainers.strategy.id+'-ul').innerHTML += liModel;
    }


    return 0;
}

function activeGamePane(paneName){

    gamesContainers[paneName].style.height = "auto";
    gamesContainers[paneName].style.display = "block";

}

function reduceAllPanes(){

    for (var k in  gamesContainers){
        gamesContainers[k].style.height = "0px";
        gamesContainers[k].style.overflow = 'hidden';
        gamesContainers[k].style.display = 'none';
    }

}


