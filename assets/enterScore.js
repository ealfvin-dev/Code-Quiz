//get score back out of local storage
var score = localStorage.getItem("Score");

var scoreDisplay = document.getElementById("FinalScore");

//set back to 0 to prevent directly visiting this page again and seeing a score (you must take the quiz to get a score)
localStorage.setItem("Score", 0);

scoreDisplay.innerHTML = "Your Final Score is: <strong>" + score + "</strong><br/>";

document.getElementById("SubmitScore").addEventListener("click", addToHighScores);

function addToHighScores() {
    var name = document.getElementById("PlayerName").value;
    console.log(name);
}