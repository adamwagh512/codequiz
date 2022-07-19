var timeHolder = document.getElementById("currentTime");
var timeRemaining = 90;
var scoreHolder = document.getElementById("currentScore");
var score = 0;
// ==================================================================
// this code creates variables and assigns them to website sections
var homeScreen = document.querySelector(".landingPage");
var quizScreen = document.querySelector(".gameScreen");
var gameOverScreen = document.querySelector(".gameOver");
var highscores = document.querySelector(".leaderboard");

// ===================================================================
// This code creates variables and assigns them to buttons
var startBtn = document.getElementById("startQuiz");
var leaderboardBtn = document.getElementById("viewLeaderboard");
var answerbox1 = document.getElementById("button1");
var answerbox2 = document.getElementById("button2");
var answerbox3 = document.getElementById("button3");
var answerbox4 = document.getElementById("button4");
var nameSubmit = document.getElementById("submitBtn");
var viewHighScores = document.getElementById("leaderboard");
var returnHome = document.getElementById("returnToHome");
var BackToHome = document.getElementById("backHome");

// ====================================================================
// This code adds extra functionality to the quiz section
var qnum = document.getElementById("questionNumber");
var qtext = document.getElementById("questionText");
var currentQuestion;

// ===================================================================
// This code assigns functions to things

// This function starts the game and hides all other sections
function startGame() {
  currentQuestion = 0;
  populateQuestions();
  homeScreen.setAttribute("style", "display:none");
  quizScreen.setAttribute("style", "display:block");
  gameOverScreen.setAttribute("style", "display:none");
  highscores.setAttribute("style", "display:none");
  timerFunction()
  scoreHolder.textContent = `Score : ${score}`;
}
// This function brings up the leaderboard and hides all other sections
function highscoreScreen() {
  homeScreen.setAttribute("style", "display:none");
  quizScreen.setAttribute("style", "display:none");
  gameOverScreen.setAttribute("style", "display:none");
  highscores.setAttribute("style", "display:block");
}

function homescreen() {
  homeScreen.setAttribute("style", "display:block");
  quizScreen.setAttribute("style", "display:none");
  gameOverScreen.setAttribute("style", "display:none");
  highscores.setAttribute("style", "display:none");
}
function gameIsOver() {
  homeScreen.setAttribute("style", "display:none");
  quizScreen.setAttribute("style", "display:none");
  gameOverScreen.setAttribute("style", "display:block");
  highscores.setAttribute("style", "display:none");
}
function timerFunction() {
    timer = setInterval(function() {
        timeRemaining--;
        timeHolder.textContent = timeRemaining;
        if (timeRemaining == 0){
        clearInterval(timer);
        alert('Time is up, Lets see how you did!')
        gameIsOver();
         }
    } , 1000);
}

  
// ===================================================================
// This code assigns event listeners to buttons

startBtn.addEventListener("click", startGame);
leaderboardBtn.addEventListener("click", highscoreScreen);
BackToHome.addEventListener("click", homescreen);

// ===================================================================
// Questions Bank
var questions = [
  {
    title:
      "Which built-in method combines the text of two strings and returns a new string?",
    choices: ["append()", "concat()", "attach()", "none of the above"],
    answer: "concat()",
  },
  {
    title: " Which built-in method sorts the elements of an array?",
    choices: ["changeOrder(order)", "order()", "sort()", "none of the above"],
    answer: "sort()",
  },
  {
    title:
      "Which of the following function of String object extracts a section of a string and returns a new string?",
    choices: ["slice()", "split()", "replace()", "search()"],
    answer: "slice()",
  },
  {
    title:
      "Which of the following function of String object returns the calling string value converted to lower case?",
    choices: [
      "toLocaleLowerCase()",
      "toLowerCase()",
      "toString()",
      "substring()",
    ],
    answer: "toLowerCase()",
  },
  {
    title:
      "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
    choices: ["sup()", "small()", "strike()", "sub()"],
    answer: "sub()",
  },
  {
    title:
      "Which of the following function of Array object joins all elements of an array into a string?",
    choices: ["concat()", "join()", "pop()", "map()"],
    answer: "join()",
  },
  {
    title:
      "Which of the following function of Array object reverses the order of the elements of an array?",
    choices: ["reverse()", "push()", "reduce()", "reduceRight()"],
    answer: "reverse()",
  },
  {
    title:
      "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
    answer: "<script>",
  },
  {
    title: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface", "throws", "program", "short"],
    answer: "program",
  },
  {
    title:
      "What is the correct syntax for referring to an external script called “geek.js”?",
    choices: [
      "<script src=”geek.js”>",
      "<script href=”geek.js”>",
      "<script ref=”geek.js”>",
      "<script name=”geek.js”>",
    ],
    answer: "<script src=”geek.js”>",
  },
];

// actual question =questiontext
function populateQuestions() {
  if (currentQuestion === questions.length) {
    gameIsOver();
  } else {
    qtext.textContent = questions[currentQuestion].title;
    answerbox1.textContent = questions[currentQuestion].choices[0];
    answerbox1.value = questions[currentQuestion].choices[0];
    answerbox2.textContent = questions[currentQuestion].choices[1];
    answerbox2.value = questions[currentQuestion].choices[1];
    answerbox3.textContent = questions[currentQuestion].choices[2];
    answerbox3.value = questions[currentQuestion].choices[2];
    answerbox4.textContent = questions[currentQuestion].choices[3];
    answerbox4.value = questions[currentQuestion].choices[3];
  }
}

answerbox1.addEventListener("click", gradeAnswers);
answerbox2.addEventListener("click", gradeAnswers);
answerbox3.addEventListener("click", gradeAnswers);
answerbox4.addEventListener("click", gradeAnswers);

function gradeAnswers() {
  if (event.target.value === questions[currentQuestion].answer) {
    score += 10;
    alert("You got it right!");
  } else {
    timeRemaining -= 10;
    alert("Bummer, your got it wrong!");
  }
  currentQuestion++;
  populateQuestions();
}