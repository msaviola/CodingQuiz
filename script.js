
var playButton = document.querySelector("#start");
var secondsDisplay = document.querySelector("#seconds");


// select all elements
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


var totalSeconds = 60;
var secondsElapsed = 0;

// create our questions
let questions = [
  {
      question : "What does HTML stand for?",
      
      choiceA : "Correct",
      choiceB : "Wrong",
      choiceC : "Wrong",
      correct : "A"
  },{
      question : "What does CSS stand for?",
      
      choiceA : "Wrong",
      choiceB : "Correct",
      choiceC : "Wrong",
      correct : "B"
  },{
      question : "What does JS stand for?",
      
      choiceA : "Wrong",
      choiceB : "Wrong",
      choiceC : "Correct",
      correct : "C"
  }
];

// create some variables

const lastQuestion = questions.length - 1;
var runningQuestion = 0;
let count = 0;
// const questionTime = 10; // 10s
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
//let TIMER;
let score = 0;

//write out question
function renderQuestion(){
  var q = questions[runningQuestion];
  question.innerHTML = "<p>"+ q.question +"</p>";
  
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  console.log("we are making questions");
}



// start quiz
function startQuiz(){
  
  renderQuestion();
  
  //renderProgress();
  renderCounter();
  scoreRender();
  console.log("end of quiz");
  //TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

//render progress
// function renderProgress(){
//   for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//       progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//   }
// }
// counter render

function renderCounter(){
  if(count <= 0){
      counter.innerHTML = count;
      //timeGauge.style.width = count * gaugeUnit + "px";
      count++
  }else{
      count = 0;
      // change progress color to red
      answerIsWrong();
      secondsElapsed=secondsElapsed+10;
  
      if(runningQuestion < lastQuestion){
          runningQuestion++;
          renderQuestion();
      }else{
          // end the quiz and show the score
          //clearInterval(TIMER);
          scoreRender();
      }
  }
}

// checkAnwer

function checkAnswer(answer){
  if( answer == questions[runningQuestion].correct){
      // answer is correct
      score++;
      // change progress color to green
     // answerIsCorrect();
  }else{
      // answer is wrong
      // change progress color to red
      //answerIsWrong();
      secondsElapsed=secondsElapsed+10;
  }
  count = 0;
  if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
  }else{
      // end the quiz and show the score
      //clearInterval(TIMER);
      scoreRender();
      

  }
}

// // answer is correct
// function answerIsCorrect(){
//   document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
// }

// // answer is Wrong
// function answerIsWrong(){
//   document.getElementById(runningQuestion).style.backgroundColor = "#f00";
// }

// score render
function scoreRender(){
  scoreDiv.style.display = "block";
  
  // calculate the amount of question percent answered by the user
  var scorePerCent = Math.round(100 * score/questions.length);
  
  
  scoreDiv.textContent += "<p>"+ scorePerCent +"%</p>";
  alert(scoreDiv);
  console.log("you finished, we are gathering your score");
}







// function printQuestion(){
// for (var i = 0; i < Question.length; i++) {

//   // For each drink in the array, we create a new paragraph to hold that text.
//   // A new paragraph will be created with each iteration of the loop.
//   var nextQuestionP = document.createElement("p");
  

//   // We then assign the the text of this paragraph to be the text in the array.
//   nextQuestionP.textContent = Question[i];

//   // We then add the paragraph to the our main div on the page ("#drink-options")
//   questionNumber.appendChild(nextQuestionP);
//   renderAnswerListItems();
// }
// };



// function renderAnswerListItems() {
//   // Render a new li for each answer
  
//   for (var i = 0; i < answerListItems0.length; i++) {
//     answerListItemBtn= document.createElement("li");
//     answerListItemBtn.textContent = answerListItems0[i];
//     answerList.appendChild(answerListItemBtn);
//   } 
// }
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
  
    totalSeconds = totalSeconds-secondsElapsed;
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

function startTimer() {
    console.log("started Timer");
    //window.open("question.html");
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
  alert("Your score is:" +scoreDiv);

}


console.log("we are in script");

startTimer();
startQuiz();
//printQuestion();




