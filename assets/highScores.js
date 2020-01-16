var highscores = JSON.parse(localStorage.getItem("HighScores"));

if(highscores != null) {
    for(var name in highscores){
        var entry = document.createElement("div");
        var nameSpan = document.createElement("span");
        var scoreSpan = document.createElement("span");

        entry.setAttribute("class", "tableEntry clearfix");
        nameSpan.setAttribute("class", "names");
        scoreSpan.setAttribute("class", "scores");

        nameSpan.textContent = name;
        scoreSpan.textContent = highscores[name];

        entry.appendChild(nameSpan);
        entry.appendChild(scoreSpan);

        document.getElementById("ScoresTable").appendChild(entry);
    }
}