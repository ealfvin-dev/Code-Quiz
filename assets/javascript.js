var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  ];

var countDownElement = document.getElementById("CountDown");

var timeLeft;
var score;
var questionNumber;
var interval;

//Answer buttons;
var answer1 = document.getElementById("Answer1");
var answer2 = document.getElementById("Answer2");
var answer3 = document.getElementById("Answer3");
var answer4 = document.getElementById("Answer4");
  
function initializeQuiz() {
    //Initialize score, question number and countdown timer
    timeLeft = 75;
    score = 0;
    questionNumber = 1;

    countDownElement.textContent = "Time: " + timeLeft;

    //Hide start button, title, instructions and make answer buttons visible
    document.getElementById("StartQuiz").setAttribute("style", "visibility: hidden");
    document.getElementById("Instructions").textContent = "";
    document.getElementById("Title").setAttribute("style", "visibility: hidden");

    answer1.setAttribute("style", "visibility: visible");
    answer2.setAttribute("style", "visibility: visible");
    answer3.setAttribute("style", "visibility: visible");
    answer4.setAttribute("style", "visibility: visible");

    //Start timer
    interval = window.setInterval(countDown, 1000);

    //Ask the first question
    askNextQuestion("AskFirstQuestion");
}

function askNextQuestion(event) {
    if(event === "AskFirstQuestion") {
        document.getElementById("Question").textContent = questions[0]["title"];

        answer1.textContent = questions[0]["choices"][0];
        answer2.textContent = questions[0]["choices"][1];
        answer3.textContent = questions[0]["choices"][2];
        answer4.textContent = questions[0]["choices"][3];

        return;
    }

    //Check if correct answer was given
    if(event.target.textContent === questions[questionNumber - 1]["answer"]) {
        score += 5;
    }
    else {
        timeLeft -= 15;

    }
    //Check if it's the last question and ask a new question or end quiz
    if(questionNumber === questions.length) {
        endGame();
    }
    else {
        //Display the next question
        document.getElementById("Question").textContent = questions[questionNumber]["title"];

        answer1.textContent = questions[questionNumber]["choices"][0];
        answer2.textContent = questions[questionNumber]["choices"][1];
        answer3.textContent = questions[questionNumber]["choices"][2];
        answer4.textContent = questions[questionNumber]["choices"][3];

        questionNumber++;
    }
}

function countDown() {
    timeLeft--;
    if(timeLeft === 0) {
        clearInterval(interval);
        endGame();
    }
    countDownElement.textContent = "Time: " + timeLeft;
}

function endGame() {
    try {
        clearInterval(interval);
    }
    finally {

    }

    console.log("END");
}

document.getElementById("StartQuiz").addEventListener("click", initializeQuiz);

document.getElementById("Answer1").addEventListener("click", askNextQuestion);
document.getElementById("Answer2").addEventListener("click", askNextQuestion);
document.getElementById("Answer3").addEventListener("click", askNextQuestion);
document.getElementById("Answer4").addEventListener("click", askNextQuestion);