// Exercício 1
const numberRandom = () => {
    const random = Math.floor(Math.random() * 100);
    return random;
};

// Exercício 4
const upperWord = (word) =>  word.toUpperCase();

const firstChar = (word) => word.charAt(0);

const concatStrings = (word1, word2) => word1.concat(word2);

module.exports = {
    numberRandom,
    upperWord,
    firstChar,
    concatStrings
}