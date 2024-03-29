// Neogcamp mark-two exercise : Brain-riddles-2.0 quiz

var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

// array of high score objects
var highScores = [{
  name: "Nitasha",
  score: 15
},{
  name: "Anju",
  score: 10
}]

// array of all questions objects
var levelOne = [{
  question: "1.You go at red, but stop at green. What am I? ",
  answer: "Watermelon"
},{
  question: "2.I’m tall when I’m young, and I’m short when I’m old. What am I? ",
  answer: "Candle"
},{
  question: "3.I have a head and a tail that will never meet. Having too many of me is always a treat. What am I? ",
  answer: "Coin"
},{
  question: "4.I help you from your head to your toe. The more I work, the smaller I grow. What am I? ",
  answer: "Soap"
},{
  question: "5.I can fly but have no wings. I can cry but I have no eyes. Wherever I go, darkness follows me. What am I? ",
  answer: "Clouds"
}]

var levelTwo = [{
  question: "1.I shave every day, but my beard stays the same. What am I?  ",
  answer: "Barber"
},{
  question: "2.I’m a god, a planet, and I measure heat. What am I? ",
  answer: "Mercury"
},{
  question: "3.I can never be thrown but I can be caught. Ways to lose me are always being sought. What am I? ",
  answer: "Cold"
},{
  question: "4.I have branches, but no fruit, trunk or leaves. What am I? ",
  answer: "Bank"
},{
  question: "5.A seed with three letters in my name. Take away two and I still sound the same. What am I? ",
  answer: "Pea"
}]

var levelThree = [{
  question: "1.The more you take, the more you leave behind. What am I? ",
  answer: "Footsteps"
},{
  question: "2.I have two hands, but I can not scratch myself. What am I? ",
  answer: "Clock"
},{
  question: "3.If you have me, you want to share me. If you share me, you haven’t got me. What am I? ",
  answer: "Secret"
},{
  question: "4.Always in you, Sometimes on you; If I surround you, I can kill you. What am I? ",
  answer: "Water"
},{
  question: "5.People make me, save me, change me, raise me. What am I? ",
  answer: "Money"
}]

// welcome message
console.log(chalk.bold.yellow("--------- BRAIN RIDDLES 2.0 ---------"));
console.log("\n");
var userName = readlineSync.question("What's your name? \n");
console.log("Hey " + userName + "! Welcome to Brain Riddles 2.0.");
console.log("\n");
console.log(chalk.bold.yellow("--------- GUIDELINES FOR QUIZ ---------"));
console.log("\n");
console.log("There are three levels in this quiz. Each level has 5 riddles.");
console.log("Type your answer and then press Enter key.");
console.log("Make sure to enter the correct spellings for your answer.");
console.log("You can play next level only if you scored more than a predefined number in your current level.")
console.log("\n");
console.log(chalk.bold.yellow("--------- Let's start! ---------"));
console.log("\n");

// defining function play
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.red.bgWhite(question + "\n"));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong!"));
  }
  console.log("Your Score:" + score);
}

// level one
console.log(chalk.bold.black.bgRed("Level One"));
console.log("---------");
console.log("\n");

for (var i=0; i<levelOne.length; i++) {
  play(levelOne[i].question, levelOne[i].answer);
  console.log(chalk.yellow("Right answer:" + levelOne[i].answer));
  console.log("---------");
  console.log("\n");
}

// level two
if (score >= 3) {
  console.log(chalk.bold.black.bgRed("Level Two"));
  console.log("---------");
  console.log("\n");

  for (var i=0; i<levelTwo.length; i++) {
  play(levelTwo[i].question, levelTwo[i].answer);
  console.log(chalk.yellow("Right answer:" + levelTwo[i].answer));
  console.log("---------");
  console.log("\n");
  }
}
else {
}

// level three
if (score >= 7) {
  console.log(chalk.bold.black.bgRed("Level Three"));
  console.log("---------");
  console.log("\n");

for (var i=0; i<levelThree.length; i++) {
  play(levelThree[i].question, levelThree[i].answer);
  console.log(chalk.yellow("Right answer:" + levelThree[i].answer));
  console.log("---------");
  console.log("\n");
  }
}
else {
}

// total score
console.log("Yay! Your total score is " + score);
console.log("Send me the screenshot of your scores.")
console.log("---------");

// high score
if (score>=highScores[0].score) {
  console.log("Congratulations! You made a new high score");
} else {
  console.log("Check who got the high scores.")
}

console.log("---------");
console.log(chalk.bold.black.bgYellow("High scores:"));
console.log("\n");

for (var i=0; i<highScores.length; i++) {
  console.log(highScores[i].name + ":" + highScores[i].score);
}
