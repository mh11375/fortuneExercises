var words = [
        "titanic",
        "avatar",
        "terminator",
        "abyss",
        "aliens"
        ];
    
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    
var remainingLetters = word.length;
var remainingGuess = 10;
    
    while (remainingLetters > 0) {
        alert(answerArray.join(" "));
    
var guess = prompt("Guess a letter or click Cancel to stop playing.");
    if (remainingGuess < 0) {
        alert("Sorry, you ran out of guesses! The word was " + word);
        break;
    } if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    }  else {
        for (var j = 0; j < word.length; j++, (remainingGuess--)) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    }
alert(answerArray.join(" "));
alert("The answer was " + word);
