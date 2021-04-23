
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