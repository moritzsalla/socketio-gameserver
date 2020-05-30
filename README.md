# Socketio gameserver for my compenv project
Backend for my compenv unity game

Heroku dynamically generates port numbers for deployed instances. To check, run this terminal command:
```
heroku run printenv
```

The port number should be omitted when accessing the server remotely:

```
# change to randomly generated port number (see below)
ws://socketio-gameserver.herokuapp.com/socket.io/?EIO=4&transport=websocket
```
