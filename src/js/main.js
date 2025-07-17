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
	let computerScore = 0;
	let humanScore = 0;
	let messageTemplate = `Computer picked ${computerChoice}.
	You picked ${humanChoice}.\n`
	if (computerChoice == humanChoice){
		console.log(`${messageTemplate} This round is a tie!`);
		return [computerScore,humanScore];
	}
	else if (computerChoice == "Rock" && humanChoice = "Scissors" ||
	computerChoice == "Paper" && humanChoice = "Rock" ||	
	computerChoice == "Scissors" && humanChoice = "Paper"){
		console.log(`${messageTemplate} Computer wins this round!`);
		computerScore += 1;
		console.log(`The score as of now:
		Computer: ${computerScore}
		You: ${humanScore}`);
		return [computerScore,humanScore];
	}
	else{
		console.log(`${messageTemplate} You win this round`);
		humanScore += 1;
		console.log(`The score as of now:
		Computer: ${computerScore}
		You: ${humanScore}`);
		return [computerScore,humanScore];
	}
}


