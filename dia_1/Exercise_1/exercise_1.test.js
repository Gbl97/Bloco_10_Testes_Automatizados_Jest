const { myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('./exercise_1');

// Exercicio 1
// const sum = require('./exercise_1');

// describe('Testes do Exercicio 1', () => {

//     test('Testando se o retorno de sum(4, 5) é 9', () => {
//         expect(sum(4,5)).toEqual(9);
//     });
    
//     test('Testando se o retorno de sum(0, 0) é 0', () => {
//         expect(sum(0,0)).toEqual(0);
//     });
    
//     test('Testando se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
//         expect(() => sum(4, '5')).toThrowError();
//     });

//     test('Testando se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
//         expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
//     });

// });

// Exercicio 2
describe('Testes do Exercicio 2', () => {

    test('Verificando se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('Verificando se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Verificando se o array passado por parâmetro não sofreu alterações', () => {
        const array = [1, 2, 3, 4];
        myRemove(array, 1);
        expect(myRemove(array)).toEqual([1, 2, 3, 4]);
    });

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    });
});

// Exercicio 3
describe('Testes do Exercicio 3', () => {
    test('Verificando se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('Verificando se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Fazendo uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
        const array = [1, 2, 3, 4, 5, 6];
        myRemoveWithoutCopy(array, 6);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    test('Verificando se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
        const array = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
    });
});

// Exercicio 4
describe('Testes do Exercicio 4', () => {
    test('Fazendo uma chamada com um número divisível por 3 e 5 e verificando se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    });

    test('Fazendo uma chamada com um número divisível por 3 e verificando se o retorno é o esperado', () => {
        expect(myFizzBuzz(9)).toMatch('fizz');
    });

    test('Fazendo uma chamada com um número divisível por 5 e verificando se o retorno é o esperado', () => {
        expect(myFizzBuzz(25)).toMatch('buzz');
    });

    test('Fazendo uma chamada com um número divisível por 3 ou 5 e verificando se o retorno é o esperado', () => {
        expect(myFizzBuzz(8)).toBe(8);
    });

    test('Fazendo uma chamada com um parâmetro que não é um número e verificando se o retorno é o esperado', () => {
        expect(myFizzBuzz('9')).toBeFalsy();
    });
});

// Exercicio 5
describe('Testes do Exercicio 5', () => {
    test('Compare dois objetos (JSON) para verificar se são idênticos ', () => {
        expect(obj1).toEqual(obj1);
    });

    test('Compare dois objetos (JSON) para verificar se são idênticos ', () => {
        expect(obj3).toEqual(obj1);
    });
});