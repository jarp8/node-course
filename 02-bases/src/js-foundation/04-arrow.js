const users = [
    {
        id: 1,
        name: 'Jane Doe'
    },
    {
        id: 2,
        name: 'Jonh Doe'
    },
];

const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);

    if(!user) return callback(`User not found with id ${id}`);

    return callback(null, user);
}

module.exports = {
    getUserById
}