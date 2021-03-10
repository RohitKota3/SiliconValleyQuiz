var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log((chalk.bold.rgb(253, 15, 2).bgWhite("This is a quiz for how well you know the TV show Silicon Valley!, so let us start")));

var userName = readlineSync.question(chalk.bold.rgb(253, 15, 2).bgWhite('May I have your name?'));
console.log("Welcome "+userName)

num = 0;
num2 = 0;
num3 = 0;
score = 0;

function quiz(question, answer, frameworks){
  var answerGiven = readlineSync.keyInSelect(frameworks, question)
  console.log(frameworks[answerGiven])
  if (frameworks[answerGiven] == answer){
  console.log("Right")
  score = score + 1
  return score
  }else{
  console.log("Wrong")
  score = score - 1

  return score
  }
}

questionOne = {
  question: 'What is Pied Piper?',
  answer: "A lossless compression software",
  frameworks: ['A lossless compression software', 'A blockchain system', 'On demand shopping network', 'Futuristic Technology Manufacturer', 'Space Company']
}

questionTwo = {
question: "Gavin Belson originally offered how much to buy Pied Piper?",
answer: "$600,000",
frameworks: ['$1,000,000', '$600,000', '$25,000,000', '$15,000,000']
}

questionThree = {
question: "How did Erlich originally come to own 10% of Pied Piper?",
answer: "In exchange for rent-free lodging at Erlichs incubator, Richard agreed to give him 10% of Pied Piper.",
frameworks: ['Erlich came up with the idea for Pied Piper.', 'In exchange for rent-free lodging at Erlichs incubator, Richard agreed to give him 10% of Pied Piper.', 'He tricked Richard into giving it to him.', 'He bought it outright.']
}

questionFour = {
question: "Where did Richard first meet Peter Gregory?",
answer: "Outside a TED talk.",
frameworks: ['At Hooli.', 'At a coffee shop.', 'At a tech start-up competition.', 'Outside a TED talk.']
}

questionFive = {
question: "Who was cut from the original Pied Piper Cap Table?",
answer: "Big Head",
frameworks: ['Big Head', 'Dinesh', 'Gilfoyle', 'Jared']
}

questionSix = {
question: "What is the name of the test that measures the performance of lossless compression software?",
answer: "Weissman Score",
frameworks: ['The Compressor', 'The tester', 'Weissman Score', 'TechCrunch Test']
}

questionSeven = {
question: "Big Head was promoted to what position in season 2",
answer: "Co-Head Dreamer of Hooli XYZ",
frameworks: ['Associate Developer', 'Co-Head Dreamer of Hooli XYZ', 'Junior Developer', 'Product Specialist']
}

questionEight = {
question: "How much money did Gavin burn through on the Nucleus and End Frame projects?",
answer: "About $750 million",
frameworks: ['About $750 million', '$250 million', '$500 million', '$1 billion']
}

HighScore1 = {
name: "Rohit",
score: "8"
}

HighScore2 = {
name: "Ranga Reddy",
score: "6"
}

var questionsList = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question];

var answersList = [questionOne.answer, questionTwo.answer, questionThree.answer, questionFour.answer];

var frameworksList = [questionOne.frameworks, questionTwo.frameworks, questionThree.frameworks, questionFour.frameworks];

var questionsListlevel2 = [questionFive.question, questionSix.question];

var answersListlevel2 = [questionFive.answer, questionSix.answer];

var frameworksListlevel2 = [questionFive.frameworks, questionSix.frameworks];

var questionsListlevel3 = [questionSeven.question, questionEight.question];

var answersListlevel3 = [questionSeven.answer, questionEight.answer];

var frameworksListlevel3 = [questionSeven.frameworks, questionEight.frameworks];

for (i=0;i<questionsList.length;i++){
  quiz(questionsList[num],answersList[num],frameworksList[num])
  num=num+1;
}

if (score == 4){
  console.log(chalk.bold.rgb(253, 15, 2).bgWhite("Congrats you are in Level 2 now"))
  for (i=0;i<questionsListlevel2.length;i++){
  quiz(questionsListlevel2[num2],answersListlevel2[num2],frameworksListlevel2[num2])
  num2=num2+1;
}
}else{console.log(chalk.bold.rgb(253, 15, 2).bgWhite("You cannot go to Level 2 since your score is less than 4"))}

if (score == 6){
  console.log(chalk.bold.rgb(253, 15, 2).bgWhite("Congrats you are in Level 3 now"))
  for (i=0;i<questionsListlevel3.length;i++){
  quiz(questionsListlevel3[num3],answersListlevel3[num3],frameworksListlevel3[num3])
  num3=num3+1;
}
}else if (score >= 4)
{console.log(chalk.bold.rgb(253, 15, 2).bgWhite("You cannot go to Level 3 since your score is less than 6"))}

console.log(chalk.bold.rgb(253, 15, 2).bgWhite("Your score is: "+ score))
console.log("Previous high scores are for: "+HighScore1.name+" score of "+HighScore1.score+" and "+HighScore2.name+" score of "+HighScore2.score)

if (score >= HighScore1.score){
  console.log(chalk.bold.rgb(253, 15, 2).bgWhite("Congratulations, you got a high score,please send Rohit a screenshot of your score to get a chance at being the lucky draw winner"))
  }else if (score >= HighScore2.score){
  console.log(chalk.bold.rgb(253, 15, 2).bgWhite("Congratulations, you got a high score,please send Rohit a screenshot of your score to get a chance at being the lucky draw winner"))
  }else {
    console.log(chalk.bold.rgb(253, 15, 2).bgWhite("Keep playing to beat the high score. Have a good day ahead. Thank you"))
  }
