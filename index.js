const path = require('path')

const app = require('express')()
const server = require('http').Server(app)

var io = require('socket.io')(server)

server.listen(3000, () => console.log("server started on port 3000"))

app.get('/', (req, res) => res.sendFile(path.resolve('./views/index.html')))

io.on('connection', function(socket){
	socket.emit("init", {msg: "io is working!"});
	socket.on("msg", (data) => socket.broadcast.emit("new message", data))
});


