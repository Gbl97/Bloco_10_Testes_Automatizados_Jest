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

// Exercicio 4 
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// Exercicio 6.1
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.name === name);
      if (arrayAnimals) {
        resolve(arrayAnimals);
      }
      reject('Nenhum animal com esse nome!');
    }, 100);
  })
);
const getAnimal = async (name) => {
  // Adicione o código aqui.
  const Animal = await findAnimalByName(name);

  try {
    return Animal;
  } catch (error) {
    return error;
  }
};

// Exercicio 6.2
const findAnimalByAge = (idade) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === idade);
      if (arrayAnimals.length !== 0) {
        resolve(arrayAnimals);
      }
      reject('Nenhum animal com essa idade!');
    }, 100);
  })
);
const getAnimalAge = async (idade) => {
  // Adicione o código aqui.
  const Animal = await findAnimalByAge(idade);

  try {
    return Animal;
  } catch (error) {
    return error;
  }
};
module.exports = {
    uppercase,
    users,
    findUserById,
    getUserName,
    getRepos,
    getAnimal,
    getAnimalAge
};