// JavaScript for interactivity
const rateInput = document.getElementById("rate");
const rateValue = document.getElementById("rate-value");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");

// Update speech rate dynamically
rateInput.addEventListener("input", () => {
  rateValue.textContent = `${rateInput.value}x`;
});


// Change background based on selected voice
maleInput.addEventListener("change", () => {
  if (maleInput.checked) {
    document.body.classList.add("male-selected");
    document.body.classList.remove("female-selected");
  }
});

femaleInput.addEventListener("change", () => {
  if (femaleInput.checked) {
    document.body.classList.add("female-selected");
    document.body.classList.remove("male-selected");
  }
});

