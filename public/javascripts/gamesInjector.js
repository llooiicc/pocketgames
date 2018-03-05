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

    switch (game.category){

        case "action":
            var classUl = '#' + gamesContainers.action.id + '-ul';
            document.querySelector('#' + gamesContainers.action.id + '-ul').innerHTML += liModel;
    }


    return 0;
}

setTabsListener();
function setTabsListener(){

    tabs.action.firstChild.addEventListener('click', function (evt) { activeTab(tabs.action) });
    tabs.shooting.firstChild.addEventListener('click', function (evt) { activeTab(tabs.shooting) });
    tabs.arcade.firstChild.addEventListener('click', function (evt) { activeTab(tabs.arcade) });
    tabs.race.firstChild.addEventListener('click', function (evt) { activeTab(tabs.race) });

}

function unactiveAllTabs() {

    for(var k in tabs){
        tabs[k].className = "unactive";
    }

    reduceAllPanes();
}

function activeTab(tab){
    unactiveAllTabs();
    tab.className = "active";

    switch (tab.id) {
        case "tab-action":
            openPane(gamesContainers.action);
        case "tab-shooting":
            openPane(gamesContainers.shooting);
        case "tab-arcade":
            openPane(gamesContainers.arcade);
        case "tab-race":
            openPane(gamesContainers.race);
    }
}

function reduceAllPanes(){

    gamesContainers.action.style.height = "0px";
    gamesContainers.action.style.overflow = "hidden";

}

function openPane(pane){

    pane.style.height = "auto";
}
