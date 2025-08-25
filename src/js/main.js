function generateComputerChoice(){
	let randomChoice = Math.floor(Math.random() * 3); //0 <= randomChoice <=2
	switch (randomChoice){
		case 0:
			return "Rock";
			break;
		case 1:
			return "Paper";
			break;
		case 2:
			return "Scissors";
			break;
	}
}


function playRound(event){

	let computerChoice = generateComputerChoice();
	let humanChoice = event.target.textContent;
	let messageTemplate = `Computer picked ${computerChoice}.
	You picked ${humanChoice}.`
	while (playerScore < 5 && computerScore < 5){
		round++;
		if (computerChoice == humanChoice){
			//tie
			commentary.firstChild.textContent = `Round ${round}: 
			${messageTemplate} This round is a tie!`;
			playerScoreboard.textContent = playerScore;
			computerScoreboard.textContent = computerScore;
			return;
		}
		else if (computerChoice == "Rock" && humanChoice == "Scissors" ||
		computerChoice == "Paper" && humanChoice == "Rock" ||	
		computerChoice == "Scissors" && humanChoice == "Paper"){
			//computer win
			commentary.firstChild.textContent = `Round: ${round}:  
			${messageTemplate} Computer wins this round!`;
			computerScore++;
			playerScoreboard.textContent = playerScore;
			computerScoreboard.textContent = computerScore;
			return;
		}
		else{
			//player win
			commentary.firstChild.textContent = `Round ${round}: 
			${messageTemplate} You win this round!`;
			playerScore++;
			playerScoreboard.textContent = playerScore;
			computerScoreboard.textContent = computerScore;			
			return;
		}
	}
	if (playerScore > computerScore){
		winnerScreen.firstChild.textContent = "Congrats!! You Won!";
	}
	else {
		winnerScreen.firstChild.textContent = "You lost this one. Try again next time!";
	}
}

//main
let playerScore = 0, computerScore = 0, round = 0;
const commentary = document.querySelector('#commentary');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');
const winnerScreen = document.querySelector('#winner');


const choiceInput = document.querySelector("#options");
choiceInput.addEventListener('click',(event)=>{
	if (event.target.nodeName === 'BUTTON'){playRound(event);}
});

/*let playerScore = 0, computerScore = 0;
for (rounds = 0; rounds < 5; rounds += 1){
	console.log(`Round ${rounds + 1}`);
	let result = playRound(generateComputerChoice(),getHumanChoice());
	if (result == "computer"){
		computerScore += 1;
		console.log(`The score as of now:
		Computer: ${computerScore}
		You: ${playerScore}`);
	}
	else if (result == "player"){
		playerScore += 1;
		console.log(`The score as of now:
		Computer: ${computerScore}
		You: ${playerScore}`);
	}
	else {
	console.log(`The score as of now:
	Computer: ${computerScore}
	You: ${playerScore}`);	
	}
}

if (computerScore > playerScore){
	console.log(`The Computer Wins!`);
}
else if (playerScore > computerScore){
	console.log(`You win!`);
}
else{
	console.log(`It's a tie!`);
}*/
