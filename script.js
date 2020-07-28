
var playButton = document.querySelector("#start");
// var startQuiz = document.querySelector("#button");
var secondsDisplay = document.querySelector("#seconds");



var totalSeconds = 60;
var secondsElapsed = 0;
//var interval;

// This launches the app by calling setTime() and renderTime()

// These two functions are just for making sure the numbers look nice for the html elements


function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

function setTime() {
  
    totalSeconds = 60;
  }

// This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
  
  
  secondsDisplay.textContent = ("Time: "+getFormattedSeconds());

 // ..and then checks to see if the time has run out
  if (secondsElapsed >= totalSeconds) {    
    stopTimer();
  }
}

// This function is where the "time" aspect of the timer runs
// Notice no settings are changed other than to increment the secondsElapsed var
function startTimer() {
    console.log("started Timer");
    window.open("question.html");
    setTime();

  // We only want to start the timer if totalSeconds is > 0
  if (totalSeconds > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
       secondsElapsed variable which is used to check if the time is up */
      interval = setInterval(function() {
        secondsElapsed++;

        // So renderTime() is called here once every second.
        renderTime();
      }, 1000);
  } 
}



/* This function stops the interval and also resets secondsElapsed*/
  
function stopTimer() {
  secondsElapsed = 0;
  alert("Time is Up!");
  alert("Your score is:");

}


console.log("we are in script");

startTimer();



