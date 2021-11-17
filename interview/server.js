const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io =  require('socket.io')(server);
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use(express.static(path.join(__dirname, 'public')));

const botName = '안녕하세요';
const ACCEPTED_ROOMS = ["1번방", "2번방", "3번방","4번방","5번방"];

io.on('connection', socket => {
    socket.on('joinRoom', ({ userPeerId, username, room }) => {
        if (!ACCEPTED_ROOMS.includes(room)) {
            socket.emit('roomNotValid');
        }

        const user = userJoin(userPeerId, username, room);

        if (!user) {
            socket.emit('sameName');
        } else {

            socket.join(user.room);
        
            socket.emit('message', formatMessage(botName, '면접에 참여하셨습니다'));

            socket.broadcast
                .to(user.room)
                .emit(
                    'message',
                    formatMessage(botName, `${user.username} 면접방 참여`)
                );

            socket.broadcast.to(user.room).emit('user-connected', userPeerId)
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room) 
            });
            socket.on('typing', () => {
                console.log('typing');
                socket.broadcast
                    .to(user.room)
                    .emit('typing', {
                        username: user.username
                    });
            });
            socket.on('stop typing', () => {
                console.log('채팅 종료');
                socket.broadcast
                    .to(user.room)
                    .emit('stop typing', {
                        username: user.username
                    });
            });
            socket.on('chatMessage', msg => {
                const user = getCurrentUser(userPeerId);
                io
                    .to(user.room)
                    .emit('message', formatMessage(user.username, msg));
            });
            socket.on('disconnect', () => {
                const user = userLeave(userPeerId);
                if (user) {
                    io
                    .to(user.room)
                    .emit('message', formatMessage(botName, `${user.username} 면접방에서 퇴장했습니다`));
                }
                io.to(user.room).emit('roomUsers', {
                    room: user.room,
                    users: getRoomUsers(user.room)
                });
                socket.broadcast.to(user.room).emit('user-disconnected', userPeerId)
            });
        }
    });

});