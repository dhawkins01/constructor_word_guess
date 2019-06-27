// bring in the letter.js file
var Letter = require("./letter.js");

// word constructor
function Word(word) {
    this.letterArray = [];

    for(i = 0; i < word.length; i++) {
        if (word.charAt[i] === " ") {
            this.letterArray.push(" ");
        }
        else {
            this.letterArray.push(new Letter(word.charAt(i)));
        };
    };
    // method that uses the displayLetter method from letter.js to display what letters are guessed correctly in the random word
    this.createString = function() {
        var wordString = "";

        this.letterArray.forEach(function(element){
            if(element === " ") {
                wordString += " ";
            }
            else {
                wordString += element.displayLetter();
            }
        });
        return wordString;
    }

    this.checkGuessWord = function(letterguess) {
        this.letterArray.forEach(function(element){
            if (element.letter !== undefined) {
                element.checkGuess(letterGuess);
            }
        });
    };

};

// export the Word constructor to the index.js
module.exports = Word;