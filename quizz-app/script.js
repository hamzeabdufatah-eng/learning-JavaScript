const questions = [
  {
    question: "what is javaScript?",
    answers: [
      "Programing Language",
      "Database",
      "Opearating System",
      "Web Browser",
    ],
    correctAnswer: "Programing Language",
  },
  {
    question: "which keyword declare a variable?",
    answers: ["style", "let", "html", "body"],
    correctAnswer: "let",
  },
  {
    question: "which method selects an html element by ID?",
    answers: ["querySelectorAll()", "getElementById()", "map()", "filter()"],
    correctAnswer: "getElementById()",
  },
];
const questionDisplay = document.getElementById("question");
const answersConatiner = document.getElementById("answers");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next");
const resetButton = document.getElementById("reset");
let currentQuestionIndex = 0;
let score = 0;
let answerSelected = false;
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  answerSelected = false;
  questionDisplay.textContent = currentQuestion.question;
  answersConatiner.innerHTML = "";
  currentQuestion.answers.forEach(function (answer) {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", function () {
      checkAnswer(answer);
    });
    answersConatiner.appendChild(button);
  });
}
displayQuestion();
function checkAnswer(selectedAnswer) {
  if (answerSelected) {
    return;
  }
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    scoreDisplay.textContent = "Score:" + score;
    alert("Correct Answer!");
  } else {
    alert("Wrong Answer!");
  }
  answerSelected = true;
}
function nextQuestion() {
  if (answerSelected === false) {
    return;
  }
  currentQuestionIndex++;
  if (!answerSelected) {
    return;
  } else if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    questionDisplay.textContent = "Quiz Complated";
    answersConatiner.innerHTML = "";
    nextButton.style.display = "none";
    resetButton.style.display = "block";
    alert("Your final score is:" + score);
  }
}
nextButton.addEventListener("click", nextQuestion);

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answerSelected = false;
  scoreDisplay.textContent = "score: 0";
  nextButton.style.display = "block";
  resetButton.style.display = "none";
  displayQuestion();
}
resetButton.addEventListener("click", resetQuiz);
