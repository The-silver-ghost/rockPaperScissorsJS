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

function getHumanChoice(){
	let choiceInput = " ";
	while (choiceInput != "r" && choiceInput != "p" && choiceInput != "s"){
		choiceInput = prompt("Rock Paper Scissors[r,p,s]: ");
		switch (choiceInput){
			case "r":
				return "Rock";
				break;
			case "p":
				return "Paper";
				break;
			case "s":
				return "Scissors";
				break;
			default:
				console.log("Invalid Answer. Try again.");
				break;
		}
	}
}

function playRound(computerChoice,humanChoice){
	let messageTemplate = `Computer picked ${computerChoice}.
	You picked ${humanChoice}.\n`
	if (computerChoice == humanChoice){
		console.log(`${messageTemplate} This round is a tie!`);
		return "tie";
	}
	else if (computerChoice == "Rock" && humanChoice == "Scissors" ||
	computerChoice == "Paper" && humanChoice == "Rock" ||	
	computerChoice == "Scissors" && humanChoice == "Paper"){
		console.log(`${messageTemplate} Computer wins this round!`);
		return "computer";
	}
	else{
		console.log(`${messageTemplate} You win this round`);
		return "player";
	}
}

//main 
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
