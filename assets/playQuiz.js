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
    },
    {
    title: "Arrays can hold what type of data?",
    choices: ["integers", "other arrays", "dictionaries", "all of the above"],
    answer: "all of the above"
    },
    {
    title: "How would you create a new element, myDiv, in jQuery?",
    choices: ["var myDiv = (\"div\")", "var myDiv = $(\"div\")", "var myDiv = #(\"div\")", "var myDiv = jQuery.IWantToMakeADiv()"],
    answer: "var myDiv = $(\"div\")"
    }
  ];

var countDownElement = document.getElementById("CountDown");

var timeLeft;
var score;
var questionNumber;
var interval;

//Answer buttons
var answer1 = document.getElementById("Answer1");
var answer2 = document.getElementById("Answer2");
var answer3 = document.getElementById("Answer3");
var answer4 = document.getElementById("Answer4");

//Correct/wrong response
var result = document.getElementById("Result");

var finalScore = document.getElementById("FinalScore");
  
function initializeQuiz() {
    //Initialize score, question number and countdown timer
    timeLeft = 75;
    score = 0;
    questionNumber = 1;

    countDownElement.textContent = "Time: " + timeLeft;

    //Hide start button, title, instructions and make answer buttons visible
    document.getElementById("StartQuiz").setAttribute("style", "visibility: hidden;");
    document.getElementById("Instructions").textContent = "";
    document.getElementById("Title").setAttribute("style", "visibility: hidden;");

    answer1.setAttribute("style", "visibility: visible;");
    answer2.setAttribute("style", "visibility: visible;");
    answer3.setAttribute("style", "visibility: visible;");
    answer4.setAttribute("style", "visibility: visible;");

    //Add event listeners to answer buttons
    document.getElementById("Answer1").addEventListener("click", askNextQuestion);
    document.getElementById("Answer2").addEventListener("click", askNextQuestion);
    document.getElementById("Answer3").addEventListener("click", askNextQuestion);
    document.getElementById("Answer4").addEventListener("click", askNextQuestion);

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

        result.textContent = "Correct!";
        result.setAttribute("style", "color: green; visibility: visible;");

        setTimeout(function() {result.setAttribute("style", "visibility: hidden;");}, 1300);
    }
    else {
        timeLeft -= 15;

        result.textContent = "Wrong";
        result.setAttribute("style", "color: red; visibility: visible;");

        setTimeout(function() {result.setAttribute("style", "visibility: hidden;");}, 1300);
    }

    //Check if they answered wrong with less than 15 seconds left. End game before displaying next question
    if(timeLeft <= 0) {
        timeLeft = 0;
        endGame();

        return;
    }

    //Check if it's the last question and ask a new question or end quiz
    if(questionNumber === questions.length) {
        endGame();

        return;
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
    if(timeLeft <= 0) {
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

    //store the score in local storage, pull back out in javascript that controls the enterScore page
    score += timeLeft;
    localStorage.setItem("Score", score);

    //Go to enterScore page
    window.location.href = "./enterScore.html";
}

document.getElementById("StartQuiz").addEventListener("click", initializeQuiz);