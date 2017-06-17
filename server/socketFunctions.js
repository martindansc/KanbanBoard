var gameState = require("./gameState");

var connecteds = {};

var newUser = function() {
    return {
        gameRoom : ''
    }
};

module.exports = function(io) {
    io.on('connection', function(socket){
        //connect
        connecteds[socket.id] = newUser();
        var player = connecteds[socket.id];
        console.log("Connected:" + socket.id);

        //functions
        socket.on('createGameRoom', function(obj) {
            //leave other room player may have
            socket.leave(obj.msg);

            //join the room
            player.gameRoom = obj.msg;
            socket.join(obj.msg);

            console.log("Player " + socket.id + " joined room " + obj.msg);
        });

        socket.on('joinGameRoom', function(obj) {
            //leave other room player may have
            socket.leave(obj.msg);

            //join the room
            player.gameRoom = obj.msg;
            socket.join(obj.msg);

            console.log("Player " + socket.id + " joined room " + obj.msg);
        });

        socket.on('deleteGameRoom', function(obj) {
            //leave other room player may have
            socket.leave(obj.msg);
        });

        socket.on('getPlayersRoom', function(room){
            //to my room!
            if(room === null) {
                room = player.room;
            }
            var toSend = getPlayersSameRoom(room);
            sendToSameRoom();
        });

        socket.on('disconnect', function() {
            delete connecteds[socket.id];

            console.log("Player disconnected " + socket.id);
        });

        var getPlayersSameRoom = function(gameRoom) {

        }

        /*Message utils */
        var sendToSameRoom = function(type, content) {
            io.to(player.gameRoom).emit(type, content);
        }

        var sendToAll = function() {
            io.emit(type, content);
        }

    });
};