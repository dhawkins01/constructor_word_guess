// bring in the word.js file
var Word = require("./word.js");

// bring in inquirer package
var inquire = require("inquirer");

// array of words to guess
var wordArray = ["apple", "banana", "orange", "apple", "avocado", "squash", "onion", "pototo", "celery"];

// set the number of guesses
var guessesLeft = 10;

function playGame() {
    // pick a random word from the word array

    var newWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    var word = new Word(newWord);

    guessWord(word, newWord);

};
