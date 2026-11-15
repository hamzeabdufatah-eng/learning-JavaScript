document.addEventListener("DOMContentLoaded", () => {
  const heightInput = document.getElementById("hieght");
  const weightInput = document.getElementById("wieght");
  const calculatebutton = document.getElementById("calculate-button");
  const resultValue = document.querySelector(".result-value");
  const resultCategory = document.querySelector(".result-caregory");
  function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; //cm to m
    const weight = parseFloat(weightInput.value);
    if (isNaN(height) || isNaN(weight)) {
      resultValue.textContent = "";
      resultCategory.textContent = "Please enter valid values";
      resultCategory.style.color = "#ff6b6b";
      return;
    }
    const BMI = (weight / (height * height)).toFixed(1);
    resultValue.textContent = BMI;
    let category, color;
    if (BMI < 18.5) {
      category = "UnderWeight";
      color = "#4a90e2";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      category = "Normal";
      color = "#2ed573";
    } else if (BMI >= 25 && BMI <= 29.9) {
      category = "Overwiegth";
      color = "#ffa502";
    } else {
      category = "Obese";
      color = "#ff4757";
    }
    resultCategory.textContent = category;
    resultCategory.style.color = color;
    resultValue.color = color;
  }
  calculatebutton.addEventListener("click", calculateBMI);
});
