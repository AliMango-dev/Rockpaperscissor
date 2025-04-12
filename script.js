
const resultdiv = document.getElementById("result");

const choices = ["rock" , "paper" , "scissor"];

document.getElementById("rock").addEventListener('click', ()=> play("rock"));
document.getElementById("paper").addEventListener('click', ()=> play("paper"));
document.getElementById("scissor").addEventListener('click', ()=> play("scissor"));

function play(userChoice){
    const comChoice = choices[Math.floor(Math.random()*choices.length)];


if (userChoice === comChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "rock" && comChoice === "scissor") ||
    (userChoice === "paper" && comChoice === "rock") ||
    (userChoice === "scissor" && comChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  resultdiv.innerHTML = `
    You chose <b>${userChoice}</b><br>
    Computer chose <b>${comChoice}</b><br>
    <span class="text-2xl">${result}</span>
  `;
}





