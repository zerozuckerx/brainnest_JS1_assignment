  const gameStates = ["rock", "paper", "scissors"];
  const counts = {
    player: 0,
    computer: 0
  }

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

      if((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")) {
        counts.player++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      } else if(playerSelection == computerSelection) {
        return `It's a draw! You both chose ${playerSelection}`
      } else {
        counts.computer++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      }
  }

  function game(input) {
    console.log(` ________ \n|Round 1:| \n ‾‾‾‾‾‾‾‾`);
    //looping 4 times with "round counter", then once without
    for(let i=1; i<5; i++) {
      console.log(playRound(input));
      console.log(`Game record after round ${i}: \n***player ${counts.player}:${counts.computer} computer*** \n ________ \n|Round ${i+1}:|  \n ‾‾‾‾‾‾‾‾`)
    }
    console.log(playRound(input));
    console.log(logWinner());
    //reset game counts
    counts.player = 0;
    counts.computer = 0;
  }

  function logWinner() {	//print winner
    if(counts.player > counts.computer) {
      return `***Player wins this game with ${counts.player} points***`;
    } else if (counts.player < counts.computer) {
      return `***Computer wins this game with ${counts.computer} points***`;
    } else {
      return `***It's a draw! Both have ${counts.player} points.***`;
    }
  }

  function checkValid(string) {
    if(gameStates.includes(string.toLowerCase())) {
      // console.log("Input not valid. Please choose rock, paper or scissors");
    }
  }
