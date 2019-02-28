//Possible word choices from computer

let randomWordArr = ["apple", "javascript", "sucks",];

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
    for (var i = 0; i < wordGuess.length; i++);
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
        document.getElementById("stat").innerHTML = "<b>You're bad at this game</b>";
    }
}













//run through the loop and add a dash for each member of the array. 


// let remainingLetters = chosenWord.length; 

// function() {
//     document.getElementById("answerArray").textContent = answerArray.join(" ");
// }

// // document.getElementById("userprogress").textContent = userProgress.join(" ")

// console.log(wordArray);

// console.log(wordBank[chosenWord]);

// //Log the user's input with onkeyup + event.key 

// document.onkeyup = function(){
//     let userInput = event.key.toLowerCase();
//     console.log(userInput);


// for (let j = 0; j < wordArray.length; j++){
//     if(userInput === wordArray[j]){
//         answerArray[j] = wordArray[j];
//          }
//     }
// }

// console.log(answerArray);
// render();
