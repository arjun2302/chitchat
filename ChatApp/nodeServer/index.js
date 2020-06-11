//nodeServer
const io = require('socket.io')(3000)

const users = {}

io.on('connection',(socket) =>{
    
    socket.on('new-user', (name) =>{
        users[socket.id] = name
        console.log(users)
        socket.broadcast.emit('User-joined', name, users)
    })

    socket.on('send', (message) =>{
        socket.broadcast.emit('recived',{message:message, name: users[socket.id]})
    })

    socket.on('disconnect',(notify)=>{
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id]
    })
})