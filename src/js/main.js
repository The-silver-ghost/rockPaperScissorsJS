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
console.log(getHumanChoice());
