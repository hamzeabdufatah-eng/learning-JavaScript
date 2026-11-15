document.addEventListener("DOMContentLoaded", () => {
  let targetNumber;
  let attemts;
  let maxAttemts = 10;
  const guesInput = document.getElementById("gues-input");
  const submitGues = document.getElementById("submit-gues");
  const newGame = document.getElementById("new-game");
  const feedback = document.getElementById("feedback");
  const attemtsDisplay = document.getElementById("attemts");
  function initGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attemts = 0;
    attemtsDisplay.textContent = `Attemts:${attemts}`;
    feedback.textContent = "";
    guesInput.value = "";
    submitGues.disabled = false;
  }

  function checkGuess() {
    const userGuess = parseInt(guesInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      feedback.textContent = "please enter a valid number between 1 and 100";
      return;
    }
    attemts++;
    attemtsDisplay.textContent = `Attemts:${attemts}`;
    if (userGuess === targetNumber) {
      feedback.textContent = `🎉Correct you guesed it in:${attemts}`;
      feedback.style.color = "#2ecc71";
      submitGues.disabled = true;
    } else if (attemts >= maxAttemts) {
      feedback.textContent = `Game Over! the number was:${targetNumber}`;
      feedback.style.color = "#e7433c";
    } else {
      const hint = userGuess < targetNumber ? "Too Low" : "Too High";
      feedback.textContent = `${hint}try again`;
      feedback.style.color = "#f39c12";
    }
    guesInput.value=""
  }
  submitGues.addEventListener("click", checkGuess);
  newGame.addEventListener("click", initGame);
  initGame();
 
});


