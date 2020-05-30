const FALLBACK_PORT = '5039'; // Heroku uses port 5039 as standard
var io = require('socket.io')(process.env.PORT || FALLBACK_PORT);

// CUSTOM CLASSES
var Player = require('./classes/player.js');

console.log(`Server has started on port ${FALLBACK_PORT}`);

var players = [];
var sockets = [];

io.on('connection', function (socket) {
  console.log('connection made');

  var player = new Player();
  var thisPlayerId = player.id;

  players[thisPlayerId] = player;
  sockets[thisPlayerId] = socket;

  // tell the client that this is our id for the server
  socket.emit('register', { id: thisPlayerId });
  socket.emit('spawn', player); // tell myself I have spawned
  socket.broadcast.emit('spawn', player);

  // tell myslef about everybody else in the game
  for (var playerID in players) {
    if (playerID != thisPlayerId) {
      socket.emit('spawn', players[playerID]);
    }
  }

  // positional data from client
  socket.on('updatePosition', function (data) {
    player.position.x = data.position.x;
    player.position.y = data.position.y;
    player.position.z = data.position.z;

    socket.broadcast.emit('updatePosition', player);
  });

  socket.on('disconnect', function () {
    console.log('A player has disconnected');
    delete players[thisPlayerId];
    delete sockets[thisPlayerId];

    socket.broadcast.emit('disconnected', player);
  });
});
