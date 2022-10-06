const choices = ['rock', 'paper', 'scissors']
let computerC = getComputerChoice();
  let playerC = getPlayerChoice();


function game(){
    for (let i = 0; i<= 3; i++){
      playRound(i); 
      console.log(playRound());

}
}


function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}


function getPlayerChoice(){
  let input = prompt ('Please choose rock paper or scissors.');
}


function playRound(){

  

    if((computerC == 'rock' && playerC == 'paper')|| 
       (computerC == 'paper' && playerC == 'scissors') ||
       (computerC == 'scissors' && playerC == 'rock')){
        console.log("winner");
        
      
      } else if((computerC == "rock" && playerC == "scissors")||
                (computerC == "paper" && playerC == "rock")||
                (computerC == "scissors" && playerC == "paper")){
                cononsole.log("loser");

                } else{
                  console.log("tie")
                }
      }

      
    

game();

