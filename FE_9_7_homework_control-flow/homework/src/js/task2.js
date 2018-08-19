//const
const magicNum = {
    one: 1,
    two: 2,
    three: 3,
    attempts: 3,
    five: 5
}

//variables
var randomInt = 0;
var limit = 1;
var mainPrize = 0;
var secondPrize = 10;
var thirdPrize = secondPrize;

//random number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomInt = Math.floor(Math.random() * (max - min + magicNum.one)) + min;
}
//start game
var startGame = confirm(`Do you want to play a game?`);

if (startGame === false) {
    alert(`You did not become a millionaire, but can.`);
} else {
    for (var i = 0; i < limit; i++) {
        var x = magicNum.five;
        getRandomIntInclusive(0,x);
        
        //loop of attempts
        for (var q = 1; q <= magicNum.attempts; q++) {
            var trueNum = parseFloat(prompt(`enter a number from 0 to ` + x +
                    `\nAttempts left: ` + (magicNum.attempts - q) + `\nTotal prize: ` 
                    + mainPrize + `$\nPossible prize on current attempt: ` + thirdPrize + `$`));
            //when user did not guess
            if (trueNum !== randomInt) {
                thirdPrize = thirdPrize / magicNum.two ^ 0;   
                if (q === magicNum.attempts) {
                    alert(`Thank you for a game. Your prize is: ` + mainPrize); 
                    thirdPrize = 0;
                    mainPrize = 0;
                    var continueGame = confirm(`Do you want to continue?`);
                    if (continueGame === true) {
                        x = magicNum.five;
                        getRandomIntInclusive(0,x);
                        q = 0;
                        i++;
                        limit += magicNum.one;
                    } else {
                        q = 4;
                        limit = 0;
                    }
                }
            //when user did guess
            } else {
                if (q === magicNum.one) {
                    thirdPrize = secondPrize;
                }
                mainPrize += thirdPrize;
                thirdPrize = 0;
                q = 0;
                continueGame = confirm(`Congratulation! Your prize is: ` 
                + mainPrize + `$ Do you want to continue?`);
                if (continueGame === true) {
                    secondPrize *= magicNum.three;
                    thirdPrize = secondPrize;
                    i++;
                    limit += magicNum.one;
                    x *= magicNum.two;
                    getRandomIntInclusive(0,x);
                } else {
                    alert(`Thank you for a game. Your prize is: ` + mainPrize + `$`); 
                    q = 4;
                    mainPrize = 0;
                    continueGame = confirm(`Do you want to continue?`);
                    if (continueGame === true) {
                        thirdPrize = secondPrize;
                        x = magicNum.five;
                        getRandomIntInclusive(0,x);
                        q = 0;
                        i++;
                        limit += magicNum.one;
                    } else {
                        limit = 0;
                    }
                }
            }
        }
    }
}