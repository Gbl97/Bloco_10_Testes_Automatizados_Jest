const { uppercase } = require('./exercise.js');

//Exercicio 1
test('Verificando se a chamada da função callback transforma letras de uma palavra em maiúsculas', (done) => {
    const callback = (str) => {
        expect(str).toBe('HELLO');
        done()
    };
    uppercase('hello', callback);
});