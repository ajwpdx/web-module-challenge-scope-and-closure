// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  function callback(str){
    return callback(stringList[0])
  }
  
}

console.log(processFirstItem(`['foo','bar']`, `(str) => str + str`))

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 uses closure whereas counter 2 uses global scope. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1. It contains a function within a function. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter2 would be better if you want to redefine what the variable "count" starts out at without changing it within the function. It allows you to use that variable in multiple places. counter1 allows you to pull the same pre-set function as arguments in other functions. 
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

console.log(counter1())
console.log(counter1())
console.log(counter1("book"))

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

console.log(counter2())
console.log(counter2())
console.log(counter2("book"))

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let score = Math.floor(Math.random() * 3);
  return score;
}

console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(scoreFunct, innings){

  let final = {"home":0, "away":0};
  for (i=0;i<innings;i++){
    final.home += scoreFunct();
    final.away += scoreFunct(); 
  }
  return final
}

console.log(finalScore(inning,9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(scoreFunct,innings) {
    let home = [0]
    let away = [0]
    for(let i = 0; i<innings; i++){ 
    home.push(home[i]+scoreFunct());
    away.push(away[i]+scoreFunct());
  }
  console.log(
`1st inning: ${home[1]} - ${away[1]}
2nd inning: ${home[2]} - ${away[2]}
3rd inning: ${home[3]} - ${away[3]}
4th inning: ${home[4]} - ${away[4]}
5th inning: ${home[5]} - ${away[5]}
6th inning: ${home[6]} - ${away[6]}
7th inning: ${home[7]} - ${away[7]}
8th inning: ${home[8]} - ${away[8]}
9th inning: ${home[9]} - ${away[9]}

Final Score: ${home[9]} - ${away[9]}`)
  }

scoreboard(inning,9)