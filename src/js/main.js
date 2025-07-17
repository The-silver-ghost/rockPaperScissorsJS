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
	}
	return choiceInput;
}

console.log(getHumanChoice());
