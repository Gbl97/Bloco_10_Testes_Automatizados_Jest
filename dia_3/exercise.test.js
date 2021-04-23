
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