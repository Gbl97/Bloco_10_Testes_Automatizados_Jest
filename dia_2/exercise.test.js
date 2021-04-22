const { uppercase, users, findUserById, getUserName, fetch, getRepos, getAnimal } = require('./exercise.js');

// Exercicio 1
test('Verificando se a chamada da função callback transforma letras de uma palavra em maiúsculas', (done) => {
    const callback = (str) => {
        expect(str).toBe('HELLO');
        done()
    };
    uppercase('hello', callback);
});

// Exercicio 2 e 3
describe('Teste dos Exercícios 2 e 3', () => {
    describe('Teste do Exercício 2', () => {
        test('Quando existir o nome Mark', () => {
            return getUserName(4).then(userName => {
                expect(userName).toEqual('Mark');
            });
        });

        test('Quando existir o nome Paul', () => {
            return getUserName(5).then(userName => {
                expect(userName).toEqual('Paul');
            });
        });

        test('Quando não existir um nome', () => {
            return getUserName(6).catch(error => {
                expect(error).toEqual({ error: 'User with 6 not found.' });
            });
        });
    });

    describe('Teste do Exercício 3', () => {
        test('Quando existir o nome Mark Async', async () => {
           const id4 = await getUserName(4).then(userName => {
           expect(userName).toEqual('Mark');
           });
        });

        test('Quando existir o nome Paul Async', async () => {
           const id5 = await getUserName(5).then(userName => {
           expect(userName).toEqual('Paul');
           });
        });

        test('Quando não existir um nome Async', async () => {
            try {
              await getUserName(6);
            } catch (error) {
              expect(error).toEqual({ error: 'User with 6 not found.' });
            }
        });
    });

    
});

// Exercicio 4
describe('Teste do Exercício 4', () => {
    test('Testando o 1º Repositório ', async () => {
       const repositorio_1 = await getRepos('https://api.github.com/orgs/tryber/repos').then(repos => {
           expect(repos).toContainEqual('sd-01-week4-5-project-todo-list');
       });
    });

    test('Testando o 2º Repositório ', async () => {
        await getRepos('https://api.github.com/orgs/tryber/repos').then(repos => {
           expect(repos).toContainEqual('sd-01-week4-5-project-meme-generator');
       });
    });
});

// Exercicio 5
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
// beforeEach(() => console.log('2 - beforeEach'));
// afterEach(() => console.log('2 - afterEach'));

// test('', () => console.log('2 - test'));
// });

// Exercicio 6.1

  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
});