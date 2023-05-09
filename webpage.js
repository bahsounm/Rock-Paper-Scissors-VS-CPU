//Here we are cashing the dom
// cashing refers to storing something for future use
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".Score-Board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


function getCompChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]
}


function convertLetter(letter){
    if (letter === "r") return "Rock"
    if (letter === "s") return "Scissors"
    return "Paper"
}


function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_div.innerHTML = convertLetter(userChoice) + " Beats " + convertLetter(computerChoice) + ". YOU WIN!!"
}


function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML= computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertLetter(computerChoice)} Beats ${convertLetter(userChoice)}. YOU Lose!!`
}


function draw(userChoice,computerChoice){
    result_div.innerHTML = `${convertLetter(userChoice)} vs ${convertLetter(computerChoice)}. Its a DRAW!!"`
}


function game(userChoice){
    const computerChoice = getCompChoice()
    switch (userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}


function main(){

    rock_div.addEventListener("click",function(){
        game("r");
    })

    paper_div.addEventListener("click",function(){
        game("p");

    })

    scissors_div.addEventListener("click",function(){
        game("s");

    })

}

main();
