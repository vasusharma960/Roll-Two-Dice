var player1Value = 0;
var player2Value = 0;
var player1 = true;
var player2 = false;

function rollDice(){
  var diceValue = Math.floor(Math.random() * 6) + 1;
  document.getElementById("inpt").value = diceValue;

  if(player1 && !player2){
    addPlayer1(diceValue);
    player1 = false;
    player2 = true;
  }
  else if(!player1 && player2){
    addPlayer2(diceValue);
    player1 = true;
    player2 = false;
  }

  if(player1Value >= 30){
    document.getElementById("result").innerHTML = "Player 1 Won";
    reset();
  }
  if(player2Value >= 30){
    document.getElementById("result").innerHTML = "Player 2 Won";
    reset();
  }
}

function addPlayer1(diceValue){
  player1Value += diceValue;
  document.getElementById("player1").value = player1Value;
}

function addPlayer2(diceValue){
  player2Value += diceValue;
  document.getElementById("player2").value = player2Value;
}

function reset(){
  setTimeout(function(){
    location.reload();
  }, 5000);
}
