
  let gameStates = ["rock", "paper", "scissors"];
  let playerCount = 0;
  let computerCount = 0;

  function computerPlay() {
    let computerSelection;
    let randomNumber = Math.floor(Math.random() * 3); //random number (0 - 2 for array looping)

    for(let i=0; i<gameStates.length; i++) {
      if(i==randomNumber) {
        computerSelection = gameStates[i];
        return(computerSelection);
      }
    }
  }

  function playRound(input) {
    let playerSelection;
    //check if player started the game with an input
    if(input == undefined) {
      input = prompt("Choose your weapon: Rock, paper or scissors?");
    }
    playerSelection = input.toLowerCase();
    computerSelection = computerPlay();
    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);

    switch(true) {
      case (playerSelection == "rock" && computerSelection == "scissors"):
      case (playerSelection == "scissors" && computerSelection == "paper"):
      case (playerSelection == "paper" && computerSelection == "rock"):
      playerCount++;
      return `You win! ${playerSelection} beats ${computerSelection}`;

      case (playerSelection == "scissors" && computerSelection == "rock"):
      case (playerSelection == "rock" && computerSelection == "paper"):
      case (playerSelection == "paper" && computerSelection == "scissors"):
      computerCount++;
      return `You lose! ${computerSelection} beats ${playerSelection}`;

      case (playerSelection == computerSelection):
      return `It's a draw! You both chose ${playerSelection}`
    }
  }

  function game(input) {
    console.log(` ________ \n|Round 1:| \n ‾‾‾‾‾‾‾‾`);
    //looping 4 times with "round counter", then once without
    for(let i=1; i<5; i++) {
      console.log(playRound(input));
      console.log(`Game record after round ${i}: \n***player ${playerCount}:${computerCount} computer*** \n ________ \n|Round ${i+1}:|  \n ‾‾‾‾‾‾‾‾`)
    }
    console.log(playRound(input));
    console.log(logWinner());
    //reset game counts
    playerCount = 0;
    computerCount = 0;
  }

  function logWinner() {	//print winner
    if(playerCount > computerCount) {
      return `***Player wins this game with ${playerCount} points***`;
    } else if (playerCount < computerCount) {
      return `***Computer wins this game with ${computerCount} points***`;
    } else {
      return `***It's a draw! Both have ${playerCount} points.***`;
    }
  }

  function checkValid(string) {
    if(gameStates.includes(string.toLowerCase())) {
      // console.log("Input not valid. Please choose rock, paper or scissors");
    }
  }
