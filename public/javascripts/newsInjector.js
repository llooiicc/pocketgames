var newsTemplate = '<div class="col-sm-6 col-md-4 col-xs-12">\n' +
    '                            <div class="thumbnail" style="background-color: #EEF1F5">\n' +
    '                                <a class="lightbox" href="{{game-encre}}">\n' +
    '                                    <img src="{{game-thumbnail}}" alt="Park">\n' +
    '                                </a>\n' +
    '                                <div class="caption">\n' +
    '                                    <h3>{{game-name}}</h3>\n' +
    '                                    <p>{{game-categories}}</p>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>';

var newGames = {};

getNewGames();

function getNewGames(){

    var files = [
        '/action-games.json',
        '/arcade-games.json',
        '/race-games.json',
        '/shooting-games.json',
        '/strategy-games.json'
    ];
    var filesIndex = 0;

    files.forEach(function (file) {

        $.getJSON(file, function (datas) {

            var index = 0;
            datas.forEach(function (data) {

                if(index < 3){

                    var isInside = false;

                    if(newGames[data.title]){
                        newGames[data.title].push(data.category);
                        isInside = true;
                    }

                    if(!isInside){
                        newGames[data.title] = [data, data.category];
                    }
                }

                index += 1;
            })
        }).success(function () {
            filesIndex += 1;
            if(filesIndex >= files.length){

                injectNewGames(newGames);
            }
        });

    });

}

function injectNewGames(){

    console.log(newGames);

    $.each(newGames, function (k, v) {

        var title = newGames[k][0].title;
        var thumbnail = newGames[k][0].thumbnail;
        var categories = '';
        var launcher = "/player/" + newGames[k][1] + "/" + title;

        for(var i = 1; i < newGames[k].length; i++){
            categories = categories + newGames[k][i] + " ";
            // console.log(newGames[k][i]);

        }
        // console.log(title + " ==> " + categories);

        var template = newsTemplate;
        template = template
            .replace('{{game-thumbnail}}', thumbnail)
            .replace('{{game-name}}', title)
            .replace('{{game-categories}}', categories)
            .replace('{{game-encre}}', launcher);
        // console.log(template);

        document.querySelector('#fresh-games-container').innerHTML += template;
    })
}

