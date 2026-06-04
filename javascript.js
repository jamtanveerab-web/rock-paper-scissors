let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msgs = document.querySelector(".msg");
const userscorepara = document.querySelector(".your-scores");
const compscorepara = document.querySelector(".comp-scores");
const genCompChoice =() => {
    const option = ["rock","paper","scissor"];
    const rendidx = Math.floor(Math.random() * 3);
    return option[rendidx];

}
const drawGame = () => {
    msgs.innerText ="Game Draw!";
    msgs.style.backgroundColor = "gray";
}
const showWinner= (userwin , choiceId , compChoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;

        msgs.innerText =`You Won ${choiceId} beats ${compChoice}`;
        msgs.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msgs.innerText = `You Lose! ${compChoice} beats ${choiceId}`;
        msgs.style.backgroundColor = "red";
    }
}
const playgame = (choiceId) => {
    console.log("user choice is = " , choiceId);
    const compChoice = genCompChoice();
    console.log("computer choice = " ,compChoice);
    if (choiceId === compChoice){
        drawGame();
    }else {
        let userwin = true;
        if(choiceId === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(choiceId === "paper"){
           userwin = compChoice === "scissor" ? false : true;
        } else  {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin , choiceId, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
       const choiceId = choice.getAttribute("id");
        playgame(choiceId);
    });
});
