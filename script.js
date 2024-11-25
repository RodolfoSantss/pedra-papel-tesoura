//Função para fazer o computador escolher entre pedra, papel e tesoura
function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Função para determinar o vencedor pegando o valor do computador e o valor de entrada
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

//Função para que a pessoa possa escolher um valor de entrada
function playGame() {
    let playerChoice = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

    const validChoices = ['pedra', 'papel', 'tesoura'];

    if (!validChoices.includes(playerChoice)) {
        alert("Escolha inválida! Por favor, escolha entre 'pedra', 'papel' ou 'tesoura'.");
        return;
    }

    const computerChoice = getComputerChoice();

//Alertando o resultado da partida
    alert(`Você escolheu: ${playerChoice}`);
    alert(`O computador escolheu: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
}

playGame();
