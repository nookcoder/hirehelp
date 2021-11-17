const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const inputMessage =document.getElementById('msg');
const TYPING_TIMER_LENGTH = 400; // ms

const videoGrid = document.getElementById('video-grid')
const myVideo = document.createElement('video')
myVideo.muted = true

/*const myPeer = new Peer(undefined, {
    host: 'localhost',
    port: '3001'
})*/

const myPeer=new Peer();
const peers = {}

let typing = false;
let lastTypingTime;

// 사용자 정보랑 면접 방 가져오기
const { username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

// Insert into io('url') if different than window.location / domain
const socket = io();

//이름 중복 방지
socket.on('sameName', () => {
    alert("이미 있는 사용자 이름입니다.");
    window.history.back();
});

//없는 방 못들어가게
socket.on('roomNotValid', () => {
    alert("없는 방입니다");
    window.history.back();
});

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo, stream)

    myPeer.on('call', call => {
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream)
        })
    })

    socket.on('user-connected', userId => {
        console.log(userId)
        setTimeout(connectToNewUser,1000,userId,stream)
    })
})

socket.on('user-disconnected', userId => {
    if (peers[userId]) peers[userId].close()
})

myPeer.on('open', userPeerId => {
    socket.emit('joinRoom', { userPeerId, username, room });
})

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
    call.on('close', () => {
        video.remove()
    })

    peers[userId] = call
}

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video)
}

socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users);
});

inputMessage.addEventListener("input", () => {
    updateTyping();
});

//채팅 
const updateTyping = () => {
    if (!typing) {
        typing = true;
        socket.emit('typing');
    }
    lastTypingTime = (new Date()).getTime();

    setTimeout(() => {
    const typingTimer = (new Date()).getTime();
    const timeDiff = typingTimer - lastTypingTime;
    if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
        socket.emit('stop typing');
        typing = false;
    }
    }, TYPING_TIMER_LENGTH);
}

socket.on('typing', (data) => {
    addChatTyping(data);
});

socket.on('stop typing', (data) => {
    removeChatTyping(data);
});

const addChatTyping = (data) => {
    data.typing = true;
    data.message = ' is typing..';
    addTypingMessage(data);
}

const removeChatTyping = (data) => {
    const typingElement = document.getElementsByClassName('typing')

    while (typingElement.length > 0) typingElement[0].remove();
}

 const addTypingMessage = (data, options) => {
    const typingClass = data.typing ? 'typing' : '';
    const div = document.createElement('div');
    div.classList.add(typingClass);

    const p = document.createElement('p');
    p.innerText = data.username + data.message;

    div.appendChild(p);

    document.querySelector('.is-typing').appendChild(div);
}

socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage', msg);
    socket.emit('stop typing');
    typing = false;

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');

    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username + ' ';

    const spanTime = document.createElement('span');
    spanTime.innerText = message.time;
    p.appendChild(spanTime);

    div.appendChild(p);

    const para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message.text;

    div.appendChild(para);

    document.querySelector('.chat-messages').appendChild(div);
}

function outputRoomName(room) {
    roomName.innerText = room;
}

function outputUsers(users) {
    userList.innerHTML = `
        ${users.map(user => `<li>${user.username}</li>`).join('')}
    `;
}