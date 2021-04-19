// Exercicio 1
const sum = require('./exercise_1');

describe('Testes do Exercicio 1', () => {

    test('Testando se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4,5)).toEqual(9);
    });
    
    test('Testando se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0,0)).toEqual(0);
    });
    
    test('Testando se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
        expect(() => sum(4, '5')).toThrowError();
    });

    test('Testando se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
    });

})

