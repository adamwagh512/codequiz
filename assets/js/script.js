// this code creates variables and assigns them to website sections
var homeScreen = document.querySelector('.landingPage');
var quizScreen = document.querySelector('.gameScreen');
var gameOverScreen = document.querySelector('.gameOver');
var highscores = document.querySelector('.leaderboard');

// ===================================================================
// This code creates variables and assigns them to buttons
var startBtn = document.getElementById('startQuiz');
var leaderboardBtn = document.getElementById('viewLeaderboard');
var answerbox1 = document.getElementById('button1');
var answerbox2 = document.getElementById('button2');
var answerbox3 = document.getElementById('button3');
var answerbox4 = document.getElementById('button4');
var nameSubmit = document.getElementById('submitBtn');
var viewHighScores = document.getElementById('leaderboard');
var returnHome = document.getElementById('returnToHome');
var BackToHome = document.getElementById('backHome');

// ====================================================================
// This code adds extra functionality to the quiz section
var timeHolder = document.getElementById('currentTime')
var scoreHolder = document.getElementById('currentScore')
var qnum = document.getElementById('questionNumber')
var qtext = document.getElementById('questionText')


// ===================================================================
// This code assigns functions to things

// This function starts the game and hides all other sections
function startGame() {
    homeScreen.setAttribute('style', 'display:none')
    quizScreen.setAttribute('style', 'display:block')
    gameOverScreen.setAttribute('style', 'display:none')
    highscores.setAttribute('style', 'display:none')
    Q1();
    
};
// This function brings up the leaderboard and hides all other sections
function highscoreScreen () {
    homeScreen.setAttribute('style', 'display:none')
    quizScreen.setAttribute('style', 'display:none')
    gameOverScreen.setAttribute('style', 'display:none')
    highscores.setAttribute('style', 'display:block')
}

function homescreen () {
    homeScreen.setAttribute('style', 'display:block')
    quizScreen.setAttribute('style', 'display:none')
    gameOverScreen.setAttribute('style', 'display:none')
    highscores.setAttribute('style', 'display:none')
}

// ===================================================================
// This code assigns event listeners to buttons

startBtn.addEventListener('click', startGame)
leaderboardBtn.addEventListener('click', highscoreScreen)
BackToHome.addEventListener('click', homescreen)

// ===================================================================
// Questions Bank

function Q1 (){
    qnum.textContent = '1'
    qtext.textContent= 'What is the HTML tag under which one can write the JavaScript code?'
    answerbox1.textContent= '<javascript>'
    answerbox2.textContent= '<scripted>'
    answerbox3.textContent= '<script>'
    answerbox4.textContent= '<js>'
  if (answerbox1.clicked == true) {
    console.log('good')
  }
}

function Q2 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}

function Q3 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}

function Q4 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}

function Q5 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}

function Q6 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}

function Q7 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}

function Q8 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}

function Q9 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}

function Q10 (){
    qnum.textContent = '1'
    qtext.textContent= 'Testerooo'
    answerbox1.textContent= 'test1'
    answerbox2.textContent= 'test2'
    answerbox3.textContent= 'test3'
    answerbox4.textContent= 'test4'
}