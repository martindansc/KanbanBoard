var Utils = require("./utils");

var games = {};

var getwords = function() {
    return [
        "Test","Test","Test","Test","Test",
        "Test","Test","Test","Test","Test",
        "Test","Test","Test","Test","Test",
        "Test","Test","Test","Test","Test",
        "Test","Test","Test","Test","Test"
    ];
}

//gets an array of words an construct a simple board
var initCardColors = function(words) {
    var obj = {};
    
    for(var i = 0; i < words.length; i++) {
        var newCard = {
            id : i,
            reveled : false,
            color : "white",
            word : words[i]
        };

        obj[i] = newCard;
    }

    return obj;
}

var setRandom = function(object, unsetKeys, num, type) {
    for(var i = 0; i < num; i++) {
        var randomIndex = Utils.randomIntInc(0, unsetKeys.length - 1);
        var cardId = unsetKeys[randomIndex];

        object[cardId].color = type;

        Utils.removeFromArray(i, unsetKeys);
    }
}

var revealCard = function(gameId, cardId) {
     games[gameId][cardId].reveled = true;
}

var getState = function(id, role) {
    return games[id];
}

var initGame = function() {

    var words = getwords();

    var board = initCardColors(words);
    var unsetKeys = Object.keys(board);

    setRandom(board, unsetKeys, 9, "blue"); //set blue colors
    setRandom(board, unsetKeys, 8, "red"); //set red colors
    setRandom(board, unsetKeys, 1, "black"); //set dead color

    return board;
}

var createNewGame = function(id) {
    if(games[id] == undefined) {
        games[id] = initGame();
    }
}

exports.createNewGame = createNewGame;
exports.getState = getState;
exports.revealCard = revealCard;