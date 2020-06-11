const socket = io('http://localhost:3000')

const addUser = document.createElement('h6')

const form = document.getElementById('send')

const messageInput = document.getElementById('messageinp')

const messageContainer = document.querySelector('.container')

const usernames = document.querySelector('.users')

const audio = new Audio('ting.mp3')

const append = (message,position)=>{
    var notifyJoin = document.createElement('div')
    notifyJoin.innerText = message
    notifyJoin.classList.add('message')
    notifyJoin.classList.add(position)
    messageContainer.append(notifyJoin)
    if(position==='left'){
        audio.play()
    }
    
}

const appendUser = (users) =>{
    let listOfUsers = []
    for(let idx = 0; idx < Object.keys(users).length; idx++){
    var key = Object.keys(users)[idx];
    let value = users[key]
    listOfUsers.push(value)
    }
    addUser.innerHTML = (listOfUsers)
    console.log(listOfUsers, users)
    usernames.append(addUser)
}

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    const message = messageInput.value
    append(`You: ${message}`,'right')
    socket.emit('send', message)
    messageInput.value = ''
})
const name = prompt('Enter Your Name to Join')
socket.emit('new-user', name)

socket.on('User-joined', (name, users)=>{
    append(`${name} joined the chat`,'right')
    appendUser(users)
})

socket.on('recived', (data)=>{
    append(`${data.name}: ${data.message}`,'left')
})

socket.on('left', (name)=>{
    append(`${name} left the chat`,'left')
})
