function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Empate!";
    }

    if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        return "Você venceu!";
    } else {
        return "Você perdeu!";
    }
}

function playGame() {
    let playerChoice = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

    const validChoices = ['pedra', 'papel', 'tesoura'];

    if (!validChoices.includes(playerChoice)) {
        alert("Escolha inválida! Por favor, escolha entre 'pedra', 'papel' ou 'tesoura'.");
        return;
    }

    const computerChoice = getComputerChoice();

    alert(`Você escolheu: ${playerChoice}`);
    alert(`O computador escolheu: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
}

playGame();