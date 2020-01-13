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
var timeLeft = 75;
var score;
  
function startQuiz() {
    score = 0;
    countDownElement.textContent = "Time: " + 75;

    var interval = window.setInterval(countDown, 1000);

}

function countDown() {
    timeLeft--;
    if(timeLeft === 0) {
        clearInterval(interval);
    }
    countDownElement.textContent = "Time: " + timeLeft;
}

document.getElementById("StartQuiz").addEventListener("click", startQuiz);