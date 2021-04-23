
let { numberRandom } = require('./exercise.js');

// Exercício 1
test('Testes do Exercício 1', () => {
    // Definindo o retorno padrão como 10
    numberRandom = jest.fn().mockReturnValue(10);

    //Testando o retorno da função
    expect(numberRandom(10)).toBe(10);

    // Testando se a função foi chamada
    expect(numberRandom).toHaveBeenCalled();
    
    //Quantas vezes foi chamada
    expect(numberRandom).toHaveBeenCalledTimes(1);
});

// Exercício 2
test('Testes do Exercício 2', () => {
    numberRandom.mockImplementation((a, b) => a / b);

    numberRandom(10, 5);

    // Testando se a função foi chamada
    expect(numberRandom).toHaveBeenCalled();

    // Testando se a função foi chamada com os parâmetros 10 e 5
    expect(numberRandom).toHaveBeenCalledWith(10, 5);

    //Testando o retorno da função
    expect(numberRandom(10, 5)).toBe(2);

    //Quantas vezes foi chamada
    expect(numberRandom).toHaveBeenCalledTimes(3);

});

// Exercício 3
test('Testes do Exercício 3.1', () => {
    numberRandom.mockImplementation((a, b, c) => a * b * c);

    numberRandom(10, 5, 3);

    // Testando se a função foi chamada
    expect(numberRandom).toHaveBeenCalled();

    // Testando se a função foi chamada com os parâmetros 10 e 5
    expect(numberRandom).toHaveBeenCalledWith(10, 5, 3);

    //Testando o retorno da função
    expect(numberRandom(10, 5, 3)).toBe(150);

    //Quantas vezes foi chamada
    expect(numberRandom).toHaveBeenCalledTimes(5);
});

test('Testes do Exercício 3.2', () => {
    numberRandom.mockImplementation((a) => a * 2);

    numberRandom(10);

    // Testando se a função foi chamada
    expect(numberRandom).toHaveBeenCalled();

    // Testando se a função foi chamada com os parâmetros 10 e 5
    expect(numberRandom).toHaveBeenCalledWith(10);

    //Testando o retorno da função
    expect(numberRandom(10)).toBe(20);

    //Quantas vezes foi chamada
    expect(numberRandom).toHaveBeenCalledTimes(7);
});

// Exercício 4
const exercise = require('./exercise.js');

jest.mock('./exercise');

test('Testes do Exercício 4.1', () => {
    exercise.upperWord.mockImplementation((string) => string.toLowerCase());
    exercise.firstChar.mockImplementation((string) => string.charAt(string.length-1));
    exercise.concatStrings
    .mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

    //Testando o retorno da função
    expect(exercise.upperWord('WORD')).toBe('word');
    expect(exercise.firstChar('Word')).toBe('d');
    expect(exercise.concatStrings('Hello', 'beautiful', 'world!')).toBe('Hellobeautifulworld!');
});