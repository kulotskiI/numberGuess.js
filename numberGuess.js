// Guess The Number
    const rightNum = Math.floor(Math.random( )* 10) + 1;

    function rightNum(){
        let userGuess;
        while (userGuess !== correctNum){
            userGuess = parseInt(prompt("Guess a number between 1 - 10:"));

            if(userGuess < correctNum) {
                alert("Too low!");
            } else if (userGuess > correctNum){
                alert("Too high!");            }
        } else if (userGuess === correctNum) {
            alert("Please enter a valid number.");
        }
    }
    guessNum();