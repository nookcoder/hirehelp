const users = [];

function userJoin(id, username, room) {
    const exist = users.find(user => user.username === username);

    if (exist) {
        return false;
    }

    const user = { id, username, room };

    users.push(user);

    return user;
}

function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

function userLeave(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        const leftUser = users[index];
        users.splice(index, 1);
        return leftUser;
    }
}

function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};