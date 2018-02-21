// set win & loss counters to 0
var winCounter = 0;
var lossCounter = 0;
// random number generator for target number between 19 - 120
// reference: var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var targetNumber = Math.floor(Math.random() * 101) + 19;
// convert targetNumber integer to text in #targetNumber div
$("#targetNumber").text(targetNumber);

// set random number for each crystal between 1 - 12
var Crystal1 = Math.floor(Math.random() * 11) + 1;
var Crystal2 = Math.floor(Math.random() * 11) + 1;
var Crystal3 = Math.floor(Math.random() * 11) + 1;
var Crystal4 = Math.floor(Math.random() * 11) + 1;

// winCounter in #winCounter div
$("#winCounter").html(winCounter);
// lossCounter in #lossCounter div
$("#lossCounter").html(lossCounter);

// set counter to 0
var counter = 0;
// convert to text in #yourScore div
$("#yourScore").text(counter);

// *** RESTARTING THE GAME ***
function restartGame() {
// when game restarts, target number changes to another random number
targetNumber = Math.floor(Math.random() * 101) + 19;
// convert integer of new targetNumber to text in #targetNumber div
$("#targetNumber").text(targetNumber);
// each crystal gains a new random number
Crystal1 = Math.floor(Math.random() * 11) + 1;
Crystal2 = Math.floor(Math.random() * 11) + 1;
Crystal3 = Math.floor(Math.random() * 11) + 1;
Crystal4 = Math.floor(Math.random() * 11) + 1;
// counter returns to 0
counter = 0;
// convert counter integer to text in #yourScore div
$("#yourScore").text(counter);
}

// *** WINNING THE GAME ***
function win() {
  // Alert saying "You win!"
  alert("You win!");
  // winCounter increases by 1
  winCounter ++;
  // convert winCounter integer to text in #winCounter div
  $("#winCounter").text(winCounter);
  // game restarts
	restartGame();
}

// *** LOSING THE GAME ***
function lose() {
  // Alert saying "You lose!"
  alert("You lose!");
  // lossCounter increases by 1
  lossCounter ++;
  // convert lossCounter integer to text in #lossCounter div
  $("#lossCounter").text(lossCounter);
  // game restarts
	restartGame();
}

// CRYSTAL FUNCTIONALITY

// When you click on #Crystal1
$('#Crystal1').on ('click', function(){
  // counter variable becomes counter + the value of Crystal1
    counter = counter + Crystal1;
    // update the #yourScore div with the new counter integer converted to text
    $('#yourScore').text(counter); 
        // if counter = targetNumber, you win
        if (counter == targetNumber){
          // run win function to restart game
          win();
        }
        // if counter is greater than targetNumber, you lose
        else if (counter > targetNumber){
          // run lose function to restart game
          lose();
        }   
  });  

  // When you click on #Crystal2
$('#Crystal2').on ('click', function(){
    // counter variable becomes counter + the value of Crystal2
    counter = counter + Crystal2;
    // update the #yourScore div with the new counter integer converted to text
    $('#yourScore').text(counter); 
        // if counter = targetNumber, you win
        if (counter == targetNumber){
          // run win function to restart game
          win();
        }
        // if counter is greater than targetNumber, you lose
        else if (counter > targetNumber){
          // run lose function to restart game
          lose();
        }   
  });  

// When you click on #Crystal3
$('#Crystal3').on ('click', function(){
  // counter variable becomes counter + the value of Crystal3
  counter = counter + Crystal3;
  // update the #yourScore div with the new counter integer converted to text
  $('#yourScore').text(counter); 
      // if counter = targetNumber, you win
      if (counter == targetNumber){
        // run win function to restart game
        win();
      }
      // if counter is greater than targetNumber, you lose
      else if (counter > targetNumber){
        // run lose function to restart game
        lose();
      }   
});  

// When you click on #Crystal4
$('#Crystal4').on ('click', function(){
  // counter variable becomes counter + the value of Crystal2
  counter = counter + Crystal4;
  // update the #yourScore div with the new counter integer converted to text
  $('#yourScore').text(counter); 
      // if counter = targetNumber, you win
      if (counter == targetNumber){
        // run win function to restart game
        win();
      }
      // if counter is greater than targetNumber, you lose
      else if (counter > targetNumber){
        // run lose function to restart game
        lose();
      }   
});  









