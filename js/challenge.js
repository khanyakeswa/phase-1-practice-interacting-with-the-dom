const minusButton = document.getElementById("minus");
const counter = document.getElementById("counter");

minusButton.addEventListener("click", function() {
    const counterValue = Math(counter.textContent) ++;
})