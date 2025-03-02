const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
console.log(buttons);

// memory - safe what we clicked
let calculation = [];
let accumulativeCalculation;

// action - clicking on number
function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    console.log(accumulativeCalculation);
    screenDisplay.textContent = eval(accumulativeCalculation); //eval only for practice - could be security threat
  } else {
    calculation.push(value); // push values to memory
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
