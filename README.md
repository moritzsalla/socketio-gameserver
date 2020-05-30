# Socketio gameserver for my compenv project

Backend for my compenv unity game

Heroku dynamically generates port numbers for deployed instances. To check, run this terminal command:

```
heroku run printenv
```

The port number should be omitted when accessing the server remotely:

```
ws://socketio-gameserver.herokuapp.com/socket.io/?EIO=4&transport=websocket
```

Resources:

- https://robdodson.me/deploying-your-first-node-dot-js-and-socket-dot-io-app-to-heroku/
- https://devcenter.heroku.com/articles/node-websockets
- https://stackoverflow.com/questions/25013735/socket-io-nodejs-doesnt-work-on-heroku
