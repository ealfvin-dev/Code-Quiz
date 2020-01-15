//get score back out of local storage
var score = localStorage.getItem("Score");

var scoreDisplay = document.getElementById("FinalScore");

//set back to 0 to prevent directly visiting this page again and seeing a score (you must take the quiz to get a score)
localStorage.setItem("Score", 0);

scoreDisplay.innerHTML = "Your Final Score is: <strong>" + score + "</strong><br/>";

document.getElementById("SubmitScore").addEventListener("click", addToHighScores);

function addToHighScores() {
    var name = document.getElementById("PlayerName").value;
    var highScores = JSON.parse(localStorage.getItem("HighScores"));

    if(highScores === null) {
        //If no highScores object yet
        highScores = {[name]: score};
        localStorage.setItem("HighScores", JSON.stringify(highScores));
    }
    else {
        if(highScores[name] === undefined) {
            //If no high score for the given name, add name to object
            highScores[name] = score;
            localStorage.setItem("HighScores", JSON.stringify(highScores));
        }
        else {
            //If you have played before and get a new high score
            if(score > highScores[name]) {
                highScores[name] = score;
                localStorage.setItem("HighScores", JSON.stringify(highScores));
            }
        }
    }

    //Go to highscores page
    window.location.href = "./highScores.html";
}