// Exercicio 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// Exercicio 2 e 3 
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

module.exports = {
    uppercase,
    users,
    findUserById,
    getUserName,
};