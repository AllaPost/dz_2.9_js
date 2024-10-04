// Логика для кнопки и счетчика
let count = 0;

const button = document.getElementById("click-button");
const counterDisplay = document.getElementById("counter");

button.addEventListener("click", function () {
  count++;

  counterDisplay.textContent = count;
});

// Логика для формы и валидации email
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const submitBtn = document.getElementById("submit-btn");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value;

  if (!emailPattern.test(emailValue)) {
    errorMessage.style.display = "inline";
    submitBtn.disabled = true;
  } else {
    errorMessage.style.display = "none";
    submitBtn.disabled = false;
  }
});

// Логика для таймера
let secondsPassed = 0;
const timerDisplay = document.getElementById("timer");

setInterval(function () {
  secondsPassed++;
  timerDisplay.textContent = secondsPassed;
}, 1000);
