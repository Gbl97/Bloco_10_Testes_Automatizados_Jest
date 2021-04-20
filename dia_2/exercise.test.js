const { uppercase, users, findUserById, getUserName } = require('./exercise.js');

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
});