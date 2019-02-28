//Possible word choices from computer

let randomWordArr = ["apple", "javascript", "sucks", "constellation", "galaxy", "orange", "dream", "house", "raffle", "advil"];

//choose word from array at random

let wordGuess = randomWordArr[Math.floor((Math.random() * randomWordArr.length))];

//global variables below

var k;
var count = 0;
//^^0 to score guesses
var answerArray = [];


//fill in answer array with underscores

function startUp() 
{
    for (var i = 0; i < wordGuess.length; i++)
    {
        answerArray[i] = " _ ";
    }

    //add values to string
    k = answerArray.join(" ");
    document.getElementById("answer").innerHTML = k;

}

function Letter() {
    //get letter user typed in box
    var letter = document.getElementById("letter").value;

    if (letter.length > 0) 
    {
        for (var i = 0; i < wordGuess.length; i++) 
        {
            if (wordGuess[i] === letter) 
            {
                answerArray[i] = letter;
            }
        }

        count++;
        document.getElementById("counter").innerHTML = "No of guesses: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }

    if (count > 5) 
    {
        document.getElementById("message").innerHTML = "You're bad at this game";
    }

    if (count > 10)
    {
        document.getElementById("message").innerHTML = "You're <b>really<b> bad at this game";
    }

    if (count > 15){
        document.getElementById("message").innerHTML = "Just quit."
    }
}